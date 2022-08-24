import BasePage from "./BasePage";

class CreateAddressPage extends BasePage{

    static get countryField(){
        return cy.get('[placeholder="Please provide a country."]');
    }

    static get nameField(){
        return cy.get('[placeholder="Please provide a name."]');
    }

    static get numberField(){
        return cy.get('[placeholder="Please provide a mobile number."]');
    }

    static get zipField(){
        return cy.get('[placeholder="Please provide a ZIP code."]');
    }

    static get addressField(){
        return cy.get('[placeholder="Please provide an address."]');
    }

    static get cityField(){
        return cy.get('[placeholder="Please provide a city."]');
    }

    static get submitButton(){
        return cy.get('#submitButton');
    }

    


}


export default CreateAddressPage;