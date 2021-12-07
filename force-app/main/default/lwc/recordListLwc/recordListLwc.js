/* created by Ashish Developer */
import { LightningElement, track, wire, api } from 'lwc';
import { ShowToastEvent } from "lightning/platformShowToastEvent";
import getRecordList from '@salesforce/apex/ManageRecordsController.getRecords';
//import saveRecords from '@salesforce/apex/ManageRecordsController.saveRecords';
import getRecordsCount from '@salesforce/apex/ManageRecordsController.getRecordsCount';  

// get colums name for Object as we want
const olicolumns = [
    {
        label: 'Account Name',
        fieldName: 'Name'
    }, {
        label: 'Phone',
        fieldName: 'Phone'
    }, {
        label: 'Type',
        fieldName: 'Type'
    }, {
        label: 'Industry',
        fieldName: 'Industry'
    }
];
export default class RecordListLwc extends LightningElement {
    @api objectname = 'Account';
    @api objectrecordid;

    @track recordList;
    @track searchKey = '';
    @track olicolumns = olicolumns;
    @track noRecordsFound = true;
    @track selectedCount;
    @track selectedRecords = [];
    @track totalSelectedRecords = 0;
    @track showSavebtn = false;
    @track error;  

    @track isChecked = false;
    @track selectAllCheckbox = false;
    @api currentpage;  
    @api pagesize;
    totalpages;
    localCurrentPage = null;  
    isSearchChangeExecuted = false;  
   
    @track selectedRecordsTest = [];

    // get all Object record 
   
    renderedCallback() {
        // This line added to avoid duplicate/multiple executions of this code.  
        if (this.isSearchChangeExecuted && (this.localCurrentPage === this.currentpage)) {  
          return;  
        }  
        this.isSearchChangeExecuted = true;  
        this.localCurrentPage = this.currentpage; 
        getRecordsCount({  objectName: this.objectname , searchKey : this.searchKey, recordId : this.objectrecordid})  
          .then(recordsCount => {  
            this.totalrecords = recordsCount;
            if (recordsCount !== 0 && !isNaN(recordsCount)) {  
                this.totalpages = Math.ceil(recordsCount / this.pagesize);  
                getRecordList({ pagenumber: this.currentpage, numberOfRecords: recordsCount, pageSize: this.pagesize, searchKey: this.searchKey, objectName: this.objectname, recordId : this.objectrecordid, searchKey : this.searchKey,  olicolumns : this.olicolumns })  
                  .then(recordList => { 
                      this.noRecordsFound = false;
                       
                      this.selectedRecordsTest =[];
                      for(let i=0;i<recordList.length ;i++){
                           
                           if(this.selectedRecords.find(offers => offers === recordList[i].Id)){     
                                this.selectedRecordsTest.push({Name:recordList[i].Name  ,
                                    Id:recordList[i].Id ,
                                    Phone:recordList[i].Phone ,
                                    Type:recordList[i].Type ,
                                    Industry: recordList[i].Industry,
                                    isChecked:true});
                            }
                            else{
                                this.selectedRecordsTest.push({Name:recordList[i].Name  ,
                                    Id:recordList[i].Id ,
                                    Phone:recordList[i].Phone ,
                                    Type:recordList[i].Type ,
                                    Industry: recordList[i].Industry,
                                    isChecked:false});
                            }
                        }
                    
                      this.recordList = this.selectedRecordsTest;
                   //  alert(JSON.stringify(this.recordList));
                      this.error = undefined;  
                  })  
                  .catch(error => {  
                      this.error = error;  
                      this.recordList = null;  
                  });  
              } else {  
                  this.recordList = [];  
                  this.totalpages = 1;  
                  this.totalrecords = 0;  
              }  
              const event = new CustomEvent('recordsload', {  
                detail: recordsCount  
              });  
              this.dispatchEvent(event);  
          })  
          .catch(error => {  
            this.error = error;  
            this.totalrecords = undefined;
            this.recordList = [];    
          });  
      }  
   
    findRecordResult(event) {
        this.searchKey = event.target.value;
        this.isSearchChangeExecuted = false;  
        this.currentpage = 1;  
    }
    allSelected(event) {
        if(event.target.checked == true){
            this.selectAllCheckbox = true;
            this.totalSelectedRecords = this.totalrecords;
        }else{
            this.selectAllCheckbox = false;
            this.totalSelectedRecords = 0;
        }
        let selectedRows = this.template.querySelectorAll('lightning-input');
        for(let i = 1; i < selectedRows.length; i++) {
            if(selectedRows[i].type === 'checkbox') {
                selectedRows[i].checked = event.target.checked;
            }
        }
    }
 
    showSelectedRecord() {
        if(this.selectAllCheckbox == true){
            this.selectedRecords = [];
            let selectedRows = this.template.querySelectorAll('lightning-input');
            
            // based on selected row getting values of the contact
            for(let i = 2; i < selectedRows.length; i++) {
                if(selectedRows[i].checked && selectedRows[i].type === 'checkbox') {
                    this.selectedRecords.push({
                        Id: selectedRows[i].dataset.id,
                        Name: selectedRows[i].value,
                        Phone: selectedRows[i].dataset.phone,
                        Type: selectedRows[i].dataset.type,
                        Industry: selectedRows[i].dataset.industry
                    })
                }
            }
        }
		alert(JSON.stringify(this.selectedRecords));
       // const event = new CustomEvent('recordsload', {  
       //     detail: 0  
       //   });  
      //    this.dispatchEvent(event); 
    }

    handleCheckbox(event){
        this.isChecked = event.target.checked;
        alert( this.isChecked);
     
        if(this.selectedRecords.length === 0 &&  this.isChecked  === true){
            this.selectedRecords.push(event.target.dataset.id);
        }
        else if(this.selectedRecords.find(offers => offers === event.target.dataset.id) && this.isChecked  ===false){
            const index =  this.selectedRecords.indexOf(event.target.dataset.id);
             if (index > -1) {
                this.selectedRecords.splice(index, 1);
                }
        }
        else if(this.isChecked ===true){
            this.selectedRecords.push(event.target.dataset.id);
        }


       /* if(this.isChecked == true){
            this.selectedRecords.push({
                Id: event.target.dataset.id,
                Name: event.target.value,
                Phone: event.target.dataset.phone,
                Type: event.target.dataset.type,
                Industry: event.target.dataset.industry
            });
        }else{
            let element = this.selectedRecords.find(ele  => ele.Id === event.target.dataset.id);
            this.selectedRecords.splice(this.selectedRecords.indexOf(element),1);
        }*/
        this.selectedRecords = [...this.selectedRecords];
        this.totalSelectedRecords = this.selectedRecords.length;
    }
    dispatchToastEvent(type, msg) {
        if (type === "success") {
          this.dispatchEvent(
            new ShowToastEvent({
              title: "Success",
              message: msg,
              variant: "success"
            })
          );
        } else {
          this.dispatchEvent(
            new ShowToastEvent({
              title: "Error",
              message: msg,
              variant: "error"
            })
          );
        }
    }
}