import BasePage from "./BasePage";

class PaymentOptionsPage extends BasePage {

    static get url(){
        return "http://localhost:3000/#/payment/shop";
    }

    static get cardRadioButton(){
        return cy.get('.mat-radio-button');
    }

    static get continueButton(){
        return cy.get('[aria-label="Proceed to review"]');
    }

    


}

export default PaymentOptionsPage;