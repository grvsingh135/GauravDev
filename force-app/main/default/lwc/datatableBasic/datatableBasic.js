import { LightningElement,track,wire } from 'lwc';
import getAllContact from '@salesforce/apex/ContactController.getContacts';



    const columns = [
        { label: 'Id', fieldName: 'Id' },
        { label: 'Name', fieldName: 'Name' },
        { label: 'Phone', fieldName: 'phone' },
        { label: 'Title', fieldName: 'Title'},
        { label: 'Email', fieldName: 'Email'},
    ];


export default class DatatableBasic extends LightningElement {
   @track data =[];
   @track columns = columns;
   @wire(getAllContact) 
   contacts;

   handleRowAction(event) 
   {
    // eslint-disable-next-line no-alert
    alert('hello');
    const row = event.detail.row;
    // eslint-disable-next-line no-alert
    alert('Showing Details: ' + JSON.stringify(row));
    
}
}