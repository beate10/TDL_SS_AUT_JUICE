import BasePage from "./BasePage";

class BasketPage extends BasePage{

    static get url() {
        return "http://localhost:3000/#/basket";
    }

    static get checkoutButton() {
        return cy.get('#checkoutButton');
    }

    
}


export default BasketPage;


