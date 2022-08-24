class ProductCard {


    static get card(){
        return cy.get('.container > [fxlayout="row"]');
    }

    static get closeButton(){
        return cy.get('.close-dialog');
    }
    
    static get reviewProductField(){
        return cy.get('[aria-label="Text field to review a product"]');
    }

    static get submitButton(){
        return cy.get('#submitButton');
    }
    
    static get expandReviewsButton(){
        return cy.get('.mat-expansion-panel');
    }


    static get reviews(){
        return cy.get('.comment');
    }
    


    

}


export default ProductCard;