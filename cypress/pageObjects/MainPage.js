import BasePage from "./BasePage";

class MainPage extends BasePage{

    static get url(){
        return "http://localhost:3000/#/";
    }

    

    static getProductCard(product){
        return cy.get('.mat-card').contains(product);
    }


    

    

   

   

    

   

}


export default MainPage;