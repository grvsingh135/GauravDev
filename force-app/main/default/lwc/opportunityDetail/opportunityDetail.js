import { LightningElement,api,wire} from 'lwc';
import getOpportunityById from '@salesforce/apex/LWCExample.getOpportunityByRecordId'; 
export default class OpportunityDetail extends LightningElement {
    @api recordId;
    @api opp;
   // @wire(getOpportunityById,({id:'$recordId'}))
    //opportunits;
   
    connectedCallback() {

getOpportunityById({
    id:this.recordId
})
    .then(result => {
        this.opp = result;
        console.log(result);
    })
    .catch(error => {
        this.error = error;
    });
}
   
}