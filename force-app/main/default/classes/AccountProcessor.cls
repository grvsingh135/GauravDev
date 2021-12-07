public class AccountProcessor {

    @future
    public static void countContacts(List<Id> accountIds){
        List<Account> accountWithContact =[Select Id ,Number_of_Contacts__c ,(Select id From Contacts) From Account
                                          Where Id IN:accountIds];
                    system.debug('jj' +accountWithContact );
        For(Account ac : accountWithContact){
           system.debug('size' +ac.Contacts.size() );
            ac.Number_of_Contacts__c = ac.Contacts.size();
        }
        update accountWithContact;
        
    }
}