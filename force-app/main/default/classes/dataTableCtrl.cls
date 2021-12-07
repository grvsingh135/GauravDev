public class dataTableCtrl{
    @AuraEnabled 
    public static List<accountListWrapper> fetchAccountWrapper(){     
        List<accountListWrapper> lstaccountListWrapper = new List<accountListWrapper>();
        // query account records and create 'accountListWrapper' class instance for each record. 
        for(Account acc : [Select id,Name,Type,Phone
                           From Account
                           Limit 1000]){
                               // by default checkbox should be false 
                               lstaccountListWrapper.add(new accountListWrapper(false,acc));
                           } 
        // return the 'lstaccountListWrapper' list 
        return lstaccountListWrapper; 
    }
    
    @AuraEnabled 
    public static List<accountListWrapper> fetchAccountWrapperWithSearch(string searchKey){     
        String searchValue= searchKey + '%';
        List<accountListWrapper> lstaccountListWrapper = new List<accountListWrapper>();
        // query account records and create 'accountListWrapper' class instance for each record.
        if(String.isNotBlank(searchValue)){
           for(Account acc : [Select id,Name,Type,Phone
                           From Account Where Name LIKE: searchValue 
                           Limit 1000]){
                               // by default checkbox should be false 
                               lstaccountListWrapper.add(new accountListWrapper(false,acc));
                           }   
        } 
       else
       {
            for(Account acc : [Select id,Name,Type,Phone
                                  From Account 
                                Limit 1000])
            {
                               // by default checkbox should be false 
                               lstaccountListWrapper.add(new accountListWrapper(false,acc));
                                }  
       }
        // return the 'lstaccountListWrapper' list 
        return lstaccountListWrapper; 
    }
    
    /* wrapper class */  
    public class accountListWrapper {
        @AuraEnabled public boolean isChecked {get;set;}
        @AuraEnabled public  account objAccount{get;set;}
        public accountListWrapper(boolean isChecked, account objAccount){
            this.isChecked = isChecked;
            this.objAccount = objAccount;
        }
    }
}