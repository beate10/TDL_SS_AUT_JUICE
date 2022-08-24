import BasePage from "./BasePage";

class SavedAddressesPage extends BasePage{

    static get addNewAddressButton(){
        return cy.get('[aria-label="Add a new address"]');
    }

    static get addressRows(){
        return cy.get('.mat-row');
    }

   

    
}

export default SavedAddressesPage;