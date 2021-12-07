@isTest
public class TestRestrictContactByName {
   @isTest
    static void TestMethod1()
    {
     Contact c = new Contact();
     c.LastName ='INVALIDNAME';
     try{
        Insert c;
      }
      catch(Exception ex)
        {
            
        }
            
    }
}