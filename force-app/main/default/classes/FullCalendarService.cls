public with sharing class FullCalendarService {

    @AuraEnabled
    public static List<EventWrapper> fetchAllEvents(){

        List<EventWrapper> eventWrapperList =new List<EventWrapper> ();
        Map<Id,Event> eventMap = new Map<Id,Event>();
        List<Opportunity> oppList = new List<Opportunity>();
        for(Event evenObj : [Select Id, Subject, WhatId, WhoId, Description, EndDate, EndDateTime, OwnerId, ActivityDate, ActivityDateTime From Event Where What.Type = 'Opportunity']){
            eventMap.put(evenObj.WhatId,evenObj);
          }
        oppList = [Select Id ,StageName from Opportunity Where Id IN:eventMap.KeySet()];

           if(oppList !=null && oppList.size()>0){
              for(Opportunity op:oppList){
                EventWrapper wrapperObj = new EventWrapper();
                wrapperObj.event =eventMap.get(op.Id);
                wrapperObj.status =op.StageName;
                eventWrapperList.add(wrapperObj);
              }
          }   
          
          return eventWrapperList;
    }



    Public Class EventWrapper{

        @AuraEnabled
        public Event event;
        @AuraEnabled
        public  String status;
    }
}