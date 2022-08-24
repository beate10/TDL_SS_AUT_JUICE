
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

    


    static get reloadPage(){
        cy.reload();
    }

    static get searchIcon(){
        return cy.get('.mat-search_icon-search');
    }

    static get searchField(){
        return cy.get('.mat-search_field');
    }

    static get shoppingCartIcon(){
        return cy.get('[aria-label="Show the shopping cart"]');
    }
    

    
}


export default BasePage;


