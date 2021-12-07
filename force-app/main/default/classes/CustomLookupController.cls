public without sharing class CustomLookupController {
    public CustomLookupController() {

    }
    @AuraEnabled(cacheable = true)
    public static List<SObject> findRecords(String searchKey, String objectName, String searchField){
        String key = '%' + searchKey + '%';
        system.debug('key  ' + key);
        String QUERY = 'Select Id, '+searchField+' From '+objectName +' Where '+searchField +' LIKE :key';
        System.debug(System.LoggingLevel.DEBUG, QUERY);
        List<SObject> sObjectList = Database.query(QUERY);
        system.debug('case  ' +sObjectList );
        return sObjectList;
    }
}