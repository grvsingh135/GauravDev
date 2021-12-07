/* eslint-disable no-alert */
// eventWithData.js
import { LightningElement, wire, track,api } from 'lwc';
//import getContactList from '@salesforce/apex/ContactController.getContacts';
 import ConvertCurrency from '@salesforce/apex/ContactController.getConvertCurrency';

import jQueryMin from '@salesforce/resourceUrl/jquery';
import{ loadScript }  from 'lightning/platformResourceLoader';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import eventTestComponent from 'c/eventTest';
export default class EventWithData extends LightningElement {
   
    @track myContact = {
        Name: '',
        Address: '',
        HomeAddres :''
    };
  
    @api result;
    @api name;
    @track name;
    @track error;
    @track successMessage = '';
    selectedRecordId; //store the record id of the selected 

handleContactChange(event) {
    this.myContact[event.target.name] = event.target.value;

    }


save(event)
{
   console.log('data ' +JSON.stringify(this.myContact));
     //you can access single property 
    console.log(this.myContact.countryCode1);

    /*ConvertCurrency({amount :'1',
                   countryCode1 :this.myContact.countryCode1,
                    countryCode2:this.myContact.countryCode2} )
    .then(result => {
        this.dispatchEvent(
            new ShowToastEvent({
                title: ' successfully',
                message: 'Converted-->' + result,
                variant: 'success',
            }),
        );
    })
    .catch(error => {
        this.error = error;
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Error while contacting API',
                message: error.message,
                variant: 'error',
            }),
        );
        
    });*/
}

contactSelected(event) {
    const contactId = event.detail;
    this.selectedContact = this.contacts.data.find(contact => contact.Id === contactId);
}
get listIsNotEmpty() {
    // eslint-disable-next-line no-console
    console.log(this.contacts);
    return this.contacts && Array.isArray(this.contacts.data) && this.contacts.data.length > 0;
}
connectedCallback() { 
    // eslint-disable-next-line no-debugger
    debugger;// invoke the method when component rendered or loaded
    Promise.all([
        //loadStyle(this, leafletResource +'/leaflet.css'), // CSS File
       // loadScript(this, leafletResource + '/leaflet.js'),  // leaflet js file
        //loadScript(this, chartJSResource + '/Chart.min.js'), // chart js file
        loadScript(this, jQueryMin), // jquery script
    ])
    .then(() => { 
        this.error = undefined;
        // Call back function if scripts loaded successfully
        this.showSuccessMessage();
    })
    .catch(error => {
        this.error = error;
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Error!!',
                message: error.message,
                variant: 'error',
            }),
        );
    });
    
}
showSuccessMessage() { // call back method 
   this.successMessage = 'Scripts are loaded successfully!!';

}
selectedRecords(event){
       let selRecords  = event.detail;
       alert(JSON.stringify(selRecords));
     
}

    handleValueSelcted(event) {
        this.selectedRecordId = event.detail;
    }
    validateLookupField() {
        this.template.querySelector('c-custom-lookup').isValid();
   }
}