/* created by Ashish Developer */
import { LightningElement, track, api } from 'lwc';  
 const PAGE_SIZE = 10;  
 export default class RecordLWC extends LightningElement {  
   @api objectName ='Account'; 
   @api objectRecordId; 
   @api page = 1;  
   @api totalrecords;  
   @api _pagesize = PAGE_SIZE;  
   get pagesize() {  
     return this._pagesize;  
   }  
   set pagesize(value) {  
     this._pagesize = value;  
   }  
   handlePrevious() {  
     if (this.page > 1) {  
       this.page = this.page - 1;  
     }  
   }  
   handleNext() {  
     if (this.page < this.totalPages)  
       this.page = this.page + 1;  
   }  
   handleFirst() {  
     this.page = 1;  
   }  
   handleLast() {  
     this.page = this.totalPages;  
   }  
   handleRecordsLoad(event) {  
     this.totalrecords = event.detail;
    // alert(JSON.stringify(this.totalrecords))
     this.totalPages = Math.ceil(this.totalrecords / this.pagesize);  
   }  
   handlePageChange(event) {  
     this.page = event.detail;
   } 
   handleCloseModel(){
      const closeModalEvent = new CustomEvent("closemodal");
      this.dispatchEvent(closeModalEvent);
   } 
 }