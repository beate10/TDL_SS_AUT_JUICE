import BasePage from "./BasePage";


class SelectAddressPage extends BasePage{

    static get addressRows() {
        return cy.get('.mat-row');
    }

    static getAddressSelection(address) {
        return this.addressRows.contains(address);
    }




    static get continueButton() {
        return cy.get('[aria-label="Proceed to payment selection"]');
    }
    
   
}


export default SelectAddressPage;