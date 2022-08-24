
class BasePage {

    static get url(){
        return "";
    }

    static visit(){
        cy.visit(this.url);
    }

    static get closeDialogButton(){
        return cy.get('.close-dialog');
    }

    static get accpetCookieButton(){
        return cy.get('.cc-btn');
    }

    static get accountButton(){
        return cy.get("#navbarAccount");
    }

    static get loginButton(){
        return cy.get("#navbarLoginButton");
    }


    static get menuBar() {
        return cy.get('.mat-menu-content');
    }

    static get reloadPage(){
        cy.reload();
    }
}


export default BasePage;


