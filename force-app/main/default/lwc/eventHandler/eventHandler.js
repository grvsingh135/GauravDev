import { LightningElement,track } from 'lwc';

export default class EventHandler extends LightningElement {




@track eventName= "";
previousButton(event)
{
this.eventName = event.detail;
alert(this.eventName);
}
nextButton(event){
    this.eventName = event.detail;
    alert(this.eventName);
}
}