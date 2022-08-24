import BasePage from "./BasePage";

class SavedPaymentMethodsPage extends BasePage{


    static get expansionButton(){
        return cy.get('.mat-expansion-indicator');
    }

    static get nameField(){
        return cy.get('#mat-input-3')
    }

    static get cardNumberField(){
        return cy.get('#mat-input-4')
    }

    static get expiryMonthField(){
        return cy.get('#mat-input-5')
    }

    static get expiryYearField(){
        return cy.get('#mat-input-6');
    }


    static get submitButton(){
        return cy.get('#submitButton');
    }


    static get paymentOptionRows(){
        return cy.get('.mat-row');
    }
    


    
}


export default SavedPaymentMethodsPage;