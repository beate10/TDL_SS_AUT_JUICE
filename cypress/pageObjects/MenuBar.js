
class MenuBar {

    static get menuBar() {
        return cy.get('.mat-menu-content');
    }

    static get loginButton(){
        return cy.get("#navbarLoginButton");

    }

    static get orderPaymentButton(){
        return cy.get('.mat-menu-content > [aria-label="Show Orders and Payment Menu"]');
        
    }

    static get savedAddressButton(){
        return cy.get('[routerlink="/address/saved"]');
        
    }


    static get paymentOptionButton(){
        return  cy.get('[routerlink="/saved-payment-methods"]');
        
    }

}

export default MenuBar;