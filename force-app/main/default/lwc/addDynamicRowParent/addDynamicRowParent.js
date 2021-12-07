import { LightningElement ,api} from 'lwc';

export default class AddDynamicRowParent extends LightningElement {
@api arrayObject =[1];
@api arrayObject1=[];
@api check= 1;
deleteRow(event)
{
 
// eslint-disable-next-line no-alert
   this.arrayObject.splice(event.detail);
// delete this.arrayObject[event.check];
   this.check--;
}
addNewRow(event)
{
  this.template.querySelector('c-add-dynamic-row').callFromParent('Gaurav ');
// eslint-disable-next-line no-alert
let value = event.detail;
this.arrayObject.push(value);
this.check++;

}
}