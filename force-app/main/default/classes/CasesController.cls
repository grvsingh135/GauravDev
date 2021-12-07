public with sharing class CasesController 
{
    private ApexPages.StandardSetController standardController;

    public CasesController(ApexPages.StandardSetController standardController)
    {
        this.standardController = standardController;
    }

    public PageReference bumpCases()
    {       
        // Get the selected records (optional, you can use getSelected to obtain ID's and do your own SOQL)
        List<Opportunity> selectedCases = (List<Opportunity>) standardController.getSelected();

        // Update records       
        for(Opportunity selectedCase : selectedCases)
        {
            selectedCase.Name = 'Ramon Pvt Ltd';
        }       

        return null;        
    }

    public PageReference updateCases()
    {       
        // Call StandardSetController 'save' method to update (optional, you can use your own DML)
        return standardController.save();   
    }
}