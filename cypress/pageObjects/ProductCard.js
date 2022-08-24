class ProductCard {


    static get card(){
        return cy.get('.container > [fxlayout="row"]');
    }

}


export default ProductCard;