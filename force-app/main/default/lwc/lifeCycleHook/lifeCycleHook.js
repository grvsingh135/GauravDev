import { LightningElement,api } from 'lwc';

export default class LifeCycleHook extends LightningElement {
   @api name='Delhi';
    constructor(){
        super();
        console.log('constructor');
    }
    connectedCallback()
    {
        console.log("connected call back");

    }

    renderedCallback(){
        console.log("rendered call back");
    }
    
   
}