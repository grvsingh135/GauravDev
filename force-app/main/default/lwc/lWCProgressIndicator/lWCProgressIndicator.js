import { LightningElement, track } from 'lwc';
 
export default class LWCProgressIndicator extends LightningElement {
    @track selectedStep = '1';
    @track searchSupplier = true;
    @track selectOffers = false;
    @track selectSalesPrice = false;
    handleNext() {
        switch (this.selectedStep) {
            case "1":
                this.selectedStep ="2";
                this.searchSupplier = false;
                this.selectOffers = true;
                this.selectSalesPrice = false;
                break;
            case "2":
                this.selectedStep = "3";
                this.searchSupplier = false;
                this.selectOffers = false;
                this.selectSalesPrice = true;

                break;
            default:
                this.selectedStep = "1";
                this.searchSupplier = true;
                this.selectOffers = false;
                this.selectSalesPrice = false;
                break;
        }
    }
 
    handlePrev() {
        switch (this.selectedStep) {
            case "2":
                this.selectedStep ="1";
                this.searchSupplier = true;
                this.selectOffers = false;
                this.selectSalesPrice = false;

                break;
            case "3":
                this.selectedStep = "2";
                this.searchSupplier = false;
                this.selectOffers = true;
                this.selectSalesPrice = false;

                break;
        }
    }
      
    handleFinish() {
        alert('Finished...');
        this.selectedStep = '1';
        this.searchSupplier = true;
        this.selectOffers = false;
        this.selectSalesPrice = false;
    }
      
    selectStep1() {
        this.selectedStep = '1';
        this.searchSupplier = true;
        this.selectOffers = false;
        this.selectSalesPrice = false;
    }
 
    selectStep2() {
        this.selectedStep = '2';
        this.searchSupplier = false;
        this.selectOffers = true;
        this.selectSalesPrice = false;
    }
 
    selectStep3() {
        this.selectedStep = '3';
        this.searchSupplier = false;
        this.selectOffers = false;
        this.selectSalesPrice = true;
    }
 
    
 
    get isSelectStep4() {
        return this.selectedStep === "4";
    }
}