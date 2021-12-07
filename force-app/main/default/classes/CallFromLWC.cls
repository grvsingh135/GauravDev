public with sharing class CallFromLWC {

    @AuraEnabled()
    public static List<Account> getAllAccount()
    {
        return [Select Id ,Name from Account];
    }
}