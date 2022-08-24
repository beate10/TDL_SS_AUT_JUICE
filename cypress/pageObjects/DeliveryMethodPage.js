import BasePage from "./BasePage";

class DeliveryMethodPage extends BasePage{


    static get deliveryMethodRows(){
        return cy.get('.mat-cell');
    }

    static getDeliverySelection(deliveryOption){
        return this.deliveryMethodRows.contains(deliveryOption);
    }

    static get continueButton(){
        return cy.get('[aria-label="Proceed to delivery method selection"]');
    }


    
}


export default DeliveryMethodPage;