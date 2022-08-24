import BasePage from "./BasePage";

class OrderSummaryPage extends BasePage{

    static get url(){
        return "http://localhost:3000/#/order-summary";
    }

    static get placeOrderButton(){
        return cy.get("#checkoutButton");
    }

    
}


export default OrderSummaryPage;