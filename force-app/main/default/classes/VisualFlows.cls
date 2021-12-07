public class VisualFlows{

  @InvocableMethod(label='Get Account Names' description='Returns the list of account names corresponding to the specified account IDs.')
  public static List<String> getAccountNames(List<String> ids) {
    List<String> accountNames = new List<String>();
    List<Account> accounts = [SELECT Name,Id FROM Account WHERE  Id =:ids];
    for (Account account : accounts) {
      accountNames.add(account.Name);
    }
      
    return accountNames;
}
}