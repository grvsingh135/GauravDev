public class AccountHandler {
    public static Account insertNewAccount(String accountName){
        Account obj = new Account();
        obj.Name = accountName;
        try{
            Insert obj;
        }
        catch(Exception ex)
        {
            return null;
        }
        return obj;
    }
}