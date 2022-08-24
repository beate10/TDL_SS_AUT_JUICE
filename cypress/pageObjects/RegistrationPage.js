import BasePage from "./BasePage";

class RegistrationPage extends BasePage{

    static get url() {
        return "http://localhost:3000/#/register";
    }

    static get emailField() {
        return cy.get('#emailControl');
    }


    static get passwordField() {
        return cy.get('#passwordControl');
    }

    static get repeatPasswordField() {
        return cy.get('#repeatPasswordControl');
    }


    static get securityQuestionTrigger() {
        return cy.get('.mat-select-trigger');
    }

    static get securityQuestionOptions() {
        return this.securityQuestionTrigger.click().get('mat-option');
    }


    static get securityQuestionAnswer() {
        return cy.get('#securityAnswerControl');
    }

    static get registerButton() {
        return cy.get('#registerButton');
    }

    




    
    

    
}


export default RegistrationPage;