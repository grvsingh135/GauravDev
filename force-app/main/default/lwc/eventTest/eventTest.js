import { LightningElement,api } from 'lwc';

export default class EventTest extends LightningElement {
@api result = 0;
    previousHandler() {
      
     this.dispatchEvent(new CustomEvent("previous",{ detail: "Prvious" }));
    }
nextHandler(){
      this.dispatchEvent(new CustomEvent("next",{ detail: "Next" }));
}

additon()
{

    this.result = 2+2;
}

}