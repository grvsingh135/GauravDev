public class ContactAndLeadSearch {
    public static  List<List< SObject>>  searchContactsAndLeads(String input){
        
        return [FIND :input IN All FIELDS RETURNING Lead(Id,FirstName,LastName),Contact(Id, FirstName,LastName,Department)];
    }
}