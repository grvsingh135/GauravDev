@isTest(seeAllData=false)
public class TestVerifyDate {
    @isTest
    static void CheckDatesTest()
    {   
        
        VerifyDate.CheckDates(Date.today(),date.today().addDays(12));
        VerifyDate.CheckDates(Date.today(),date.today().addDays(33));
        
    }
}