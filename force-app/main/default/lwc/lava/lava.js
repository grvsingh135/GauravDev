import { LightningElement } from 'lwc';

export default class Lava extends LightningElement {
    selected;
    listenerAttached = false;

    addInput() {
        alert('Reached');
    }

}