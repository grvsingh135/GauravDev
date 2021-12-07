/* created by Ashish Developer */
public with sharing class ManageRecordsController {
    public static Integer firstIndex =0;
    public static Integer lastIndex = 0;
    public static Integer totalRecords =0;
    @AuraEnabled(Cacheable = true)
    public static Integer getRecordsCount(String objectName, String searchKey, String recordId) {  
        String query = 'select  count() from Account';  
        if (searchKey != null && searchKey != '') {  
            query += ' where Name like \'%' + searchKey + '%\' ';  
        }
        return Database.countQuery(query);  
    }  
    @AuraEnabled(Cacheable = true)
    public static List<Object> getRecords(Integer pagenumber, Integer numberOfRecords, Integer pageSize, String objectName, String recordId, String searchKey, List<Map<String, String>> olicolumns) {
        firstIndex = (pagenumber-1)*pageSize;
        lastIndex =  pagenumber*pageSize;
        totalRecords =0;
       List<account> returnList = new List<account>();
        Set<String> stringFieldName = new Set<String>();
        for(Map<String,String> oliVal : olicolumns){
            for(String strFieldName : oliVal.keySet()){
                stringFieldName.add(oliVal.get('fieldName'));
            }
        }
        String stringFieldName_Joined = String.join((Iterable<String>)stringFieldName, ', ');
        String query = 'select  Id,'+stringFieldName_Joined+' from Account ';  
        if (searchKey != null && searchKey != '') {  
             query += ' where Name like \'%' + searchKey + '%\'';  
        }
        query += ' order by LastModifiedDate desc';
     // query += ' limit ' + pageSize + ' offset ' + (pageSize * (pagenumber - 1)); 
        list<Account> lstRecord = Database.query(query);

        for(Account acc : lstRecord){
            if(totalRecords>=firstIndex && totalRecords<lastIndex){
                returnList.add( acc );
            }
            totalRecords++;
        }
        system.debug('lstRecord : ' + lstRecord);
        if(returnList.isEmpty()) {
            throw new AuraHandledException('No Record Found..');
        }
        return returnList; 
    }

}