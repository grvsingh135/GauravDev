trigger ClosedOpportunityTrigger on Opportunity (before insert,before update) {
    if(Trigger.isInsert && Trigger.isBefore)
        
    {
        List<Task> task1 = new  List<Task>();     
        for(Opportunity opr : Trigger.new)
        {
            if(!String.isEmpty(opr.StageName) && opr.StageName == 'Closed Won')
            {
                system.debug('oppir '+ opr.Id);
                Task tsk = new Task();
                tsk.ActivityDate=date.today();
                tsk.Subject='Follow Up Test Task insert';
                tsk.Status='Active';
                tsk.Description='Description';
                tsk.WhatId=opr.Id;
                task1.add(tsk);
                
            }
        }
        Insert task1;
    }
    if(Trigger.isUpdate)
        
    {
        List<Task> task2 = new  List<Task>();
        for(Opportunity opr : Trigger.new)
        {
            Task tsk = new Task();
            tsk.ActivityDate=date.today();
            tsk.Subject='Follow Up Test Task update';
            tsk.Status='Active';
            tsk.Description='Description';
            tsk.WhatId=opr.Id;
            task2.add(tsk);
        }
        Insert task2;
    }
    
}