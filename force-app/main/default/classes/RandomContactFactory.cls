public class RandomContactFactory {
    public static List<Contact> generateRandomContacts(Integer first,String second)
    {
        List<Contact> generatedContacts =new List<Contact>();
        for(integer i=0;i<first;i++)
        {
            Contact obj=new Contact();
            obj.FirstName = 'Test ' + i;
            obj.LastName = second;
            generatedContacts.add(obj);
        }
       return  generatedContacts;
    }
}