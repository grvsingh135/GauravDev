public class LeadProcessor implements Database.Batchable<sObject> {

     public Database.QueryLocator start(Database.BatchableContext bc) {
        return Database.getQueryLocator(
            'SELECT ID, LeadSource From Lead'
        );
    }
    public void execute(Database.BatchableContext bc, List<Lead> scope){
        // process each batch of records
        
        for (Lead ld : scope) {
           ld.LeadSource ='Dreamforce';
        }
        update scope;
    }
    public void finish(Database.BatchableContext bc){
        
    }
}