import BasePage from "./BasePage";

class MainPage extends BasePage{

    static get url(){
        return "http://localhost:3000/#/";
    }

    

    static getProductCard(product){
        return cy.get('.mat-card').contains(product);
    }

    static get allProductCards(){
        return cy.get('.mat-card');
    }

    static get cardsPerPageField() {
        return cy.get('.mat-select-value');
    }

    static get cardsSelectionField(){
        return cy.get('.mat-option');
    }


    static getAddToCartButton(product){

        return this.getProductCard(product).get('[aria-label="Add to Basket"]');
        
    }

    


    

    

   

   

    

   

}


export default MainPage;