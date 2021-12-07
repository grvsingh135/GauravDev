/* eslint-disable no-undef */
/* eslint-disable no-console */
/* eslint-disable @lwc/lwc/no-document-query */
/* eslint-disable no-alert */
import { LightningElement,api } from 'lwc';
import jquerymin from '@salesforce/resourceUrl/jquery';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import WEBSITE_FIELD from '@salesforce/schema/Account.Website';

export default class LightingDataService extends LightningElement {
    renderedCallback() {
        var temp= this.template.querySelector('div'); 
     console.log(temp);
    }
    save(){

       var temp= this.template.querySelector('div'); 
     console.log(temp);
    }


   
}