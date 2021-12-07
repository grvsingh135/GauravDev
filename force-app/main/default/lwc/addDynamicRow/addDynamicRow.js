import { LightningElement ,api} from 'lwc';
import getAccountList from '@salesforce/apex/CallFromLWC.getAllAccount';

export default class AddDynamicRow extends LightningElement {

    
    @api name='';
    @api address = '';
    @api index = 1;
    @api serialNumber=1;
    @api show =false;
    @api hide=false;
    @api contacts;
    connectedCallback(){
  this.handleLoad();
    }
    
    
    handleLoad() {
        getAccountList()
            .then(result => {
                this.contacts = result;
            })
            .catch(error => {
                this.error = error;
            });
    }
    renderedCallback() {
        this.show=true;
        this.hide=false;

    }
    AddNewRow(event)
    {
        this.index++;
        this.dispatchEvent(new CustomEvent("addrow",{ detail:  this.index}));

    }
    DeleteRow(event)
    {
        this.index--;
        this.dispatchEvent(new CustomEvent("deleterow",{ detail:  this.serialNumber}));
    }
  @api  callFromParent(fromParent){
        alert('call from parent'+ fromParent);
    }
}