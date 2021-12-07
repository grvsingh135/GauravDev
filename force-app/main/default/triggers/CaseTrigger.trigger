trigger CaseTrigger on Case (after insert, after update, before insert, before update)
{   
    //Get all the list in the TriggerApexSwitch
    Map<String, TriggerApexSwitch__c> apexSwitch = TriggerApexSwitch__c.getAll();
    
    //Check if the Apex Switch Field is True and if already executed
    if(apexSwitch.get(System.Label.Case)!= null &&
            apexSwitch.get(System.Label.Case).APEXSwitch__c) {


        if((CaseTriggerHandler.scoreCaseList.isEmpty() && CaseTriggerHandler.scoreCaseList.isEmpty())){
            System.debug('checkIfScoreCases');
        }

        if(Trigger.isBefore && Trigger.isInsert && !CaseTriggerHandler.isBeforeInsertExecuted){
            CaseTriggerHandler.isBeforeInsertExecuted = true;
            new CaseTriggerHandler().run();
        }

        if(Trigger.isAfter && Trigger.isInsert && !CaseTriggerHandler.isAfterInsertExecuted){
            CaseTriggerHandler.isAfterInsertExecuted = true;
            new CaseTriggerHandler().run();
        }

        if(Trigger.isBefore && Trigger.isUpdate && !CaseTriggerHandler.isBeforeUpdateExecuted){
            CaseTriggerHandler.isBeforeUpdateExecuted = true;
            new CaseTriggerHandler().run();
        }

        if(Trigger.isAfter && Trigger.isUpdate && !CaseTriggerHandler.isAfterUpdateExecuted){
            CaseTriggerHandler.isAfterUpdateExecuted = true;
            new CaseTriggerHandler().run();
        }
    }
}