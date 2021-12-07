/* eslint-disable no-console */
/* eslint-disable no-alert */
import { LightningElement, api,wire } from 'lwc';
import getContactList from '@salesforce/apex/LWCTest.getContactList';
export default class ShowToastMsg extends LightningElement {
   /* @api firstName = '';
    @api lastName = '';*/
    @api  Account = {
        'firstName' :'hello ',
        'lastName' : 'test'
    };
    @wire(getContactList) contacts;
   CreateAccount(event)
   {
 //  const  Account = {'firstName' :this.firstName};
    alert(this.Account.firstName + this.Account.lastName);
    console.log(event);
    
   }
}