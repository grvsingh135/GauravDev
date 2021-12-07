global with sharing class LWCExample {

@AuraEnabled(cacheable=true)
global static List<Opportunity> getOpportunityByRecordId(String id){
    system.debug('id ' + id);
    return [Select Id ,Name from Opportunity where Id=:id Limit 1];

}

}