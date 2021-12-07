@isTest
public class AccountProcessorTest {

  
   testMethod static void countContactsTest() {
      Account testAccount = new Account();
		testAccount.Name='Test Account' ;
       // testAccount.Number_of_Contacts__c =1;
		insert testAccount;
		
		Contact cont = new Contact();
		cont.FirstName='Test';
		cont.LastName='Test';
		cont.Accountid= testAccount.id;
		insert cont;
      List<Id> ids = new List<Id>();
      ids.add(testAccount.Id);

       Test.StartTest(); 
			AccountProcessor.countContacts(ids);
			
		Test.StopTest();
  }
}