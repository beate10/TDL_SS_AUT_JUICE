import BasePage from "./BasePage";

class LoginPage extends BasePage{

    static get url(){
        return "http://localhost:3000/#/login";
    }

    static get emailField() {
        return cy.get('#email');
    }

    static get passwordField() {
        return cy.get('#password');
    }

    static get loginSubmitButton() {
        return cy.get('#loginButton');
    }

    static get notCustomerLink() {
        return cy.get('[routerlink="/register"]');
    }

}


export default LoginPage;