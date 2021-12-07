trigger AccountAddressTrigger on Account (before insert,before update) {
  if(Trigger.isInsert)
  {
    for(Account account :Trigger.new)
    {
        if(!String.isEmpty(account.BillingPostalCode) &&  account.Match_Billing_Address__c == true)
        {
            account.ShippingPostalCode = account.BillingPostalCode;
        }
    }
  }
    if(Trigger.isUpdate)
  {
    for(Account account :Trigger.new)
    {
         if(!String.isEmpty(account.BillingPostalCode) &&  account.Match_Billing_Address__c == true)
        {
            account.ShippingPostalCode = account.BillingPostalCode;
        }
    }
  }
}