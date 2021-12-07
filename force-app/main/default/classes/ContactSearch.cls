public class ContactSearch {
public static List<Contact> searchForContacts(string lastName ,String mailingPostalCode)
{
    return [Select Id,Name from Contact where LastName =:lastName AND MailingPostalCode =: mailingPostalCode];
}
}