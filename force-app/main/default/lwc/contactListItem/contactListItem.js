// contactListItem.js
import { LightningElement, api } from 'lwc';

export default class ContactListItem extends LightningElement {
    @api contact;
    @api value;
    selectHandler(event) {
        // Prevents the anchor element from navigating to a URL.
        event.preventDefault();
        this.dispatchEvent(new CustomEvent('selected', { detail: this.contact.Id }));
    }
    handleInput(event)
    {

    this[event.target.name] =event.target.value;
    console.log(this);
    }
}