public with sharing class ParamLwcTest {

 @AuraEnabled(cacheable=true)
    public static void findContacts(myContact obj) {
        System.debug('obj' + obj);
    }

   public class myContact
   {
    public String username{get;set;} 
    public String password{get;set;}

   }
}