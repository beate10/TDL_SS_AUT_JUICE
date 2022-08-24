
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

    static get searchIcon(){
        return cy.get('.mat-search_icon-search');
    }

    static get searchField(){
        return cy.get('.mat-search_field');
    }

    

    
}


export default BasePage;


