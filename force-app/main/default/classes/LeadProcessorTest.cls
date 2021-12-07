@isTest
public class LeadProcessorTest {
    @testSetup
    static void setup() {
        List<Lead> insertLead =new List<Lead>();
         for (Integer i=0;i<100;i++) {
                Lead lstLead =   new Lead();
                lstLead.Company = 'JohnMiller';
                lstLead.LastName = 'Mike';
                lstLead.Status = 'Open'; 
                insertLead.add(lstLead);
        }
                    
        insert insertLead;  
    }
     @isTest static void test() {
        Test.startTest();
        LeadProcessor uca = new LeadProcessor();
        Id batchId = Database.executeBatch(uca);
        Test.stopTest();
        // after the testing stops, assert records were updated properly
       // System.assertEquals(10, [select count() from contact where MailingCity = 'New York']);
    }
}