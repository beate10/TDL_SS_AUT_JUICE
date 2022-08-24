import BasePage from "./BasePage";

class PaymentOptionsPage extends BasePage {

    static get url(){
        return "http://localhost:3000/#/payment/shop";
    }

    static get cardRadioButtons(){
        return cy.get('.mat-row');
    }


    static getCardRadioButton(card){

        let hello;
        cy.get('.mat-row').each(($ele, index) => {
            if ($ele.text().includes(card)) {
               cy.log(index);
               hello = Number(index);
               //return cy.get('[class="mat-radio-container"]').eq(Number(index));
            
            }
        })

        cy.log(hello);

        return cy.get('[class="mat-radio-container"]').eq(hello);
    }

    static get continueButton(){
        return cy.get('[aria-label="Proceed to review"]');
    }

    


}

export default PaymentOptionsPage;