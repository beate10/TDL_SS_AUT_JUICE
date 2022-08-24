import BasePage from "../pageObjects/BasePage"
import LoginPage from "../pageObjects/LoginPage"
import MainPage from "../pageObjects/MainPage"
import ProductCard from "../pageObjects/ProductCard"
import RegistrationPage from "../pageObjects/RegistrationPage"

describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})


context ("Juice Shop Test", () => {


  context ("Login/Registration", () => {

    beforeEach(() =>{
      MainPage.visit();
      BasePage.closeDialogButton.click();
      BasePage.accpetCookieButton.click();
      BasePage.reloadPage;
    })


    it("Login Scenario", () => {

      BasePage.accountButton.click();
      BasePage.loginButton.click();
      LoginPage.emailField.type("demo");
      LoginPage.passwordField.type("demo");
      LoginPage.loginSubmitButton.click();
      BasePage.accountButton.click();
      BasePage.menuBar.should("contain", "demo");
    })

    it("Registration Scenario", () => {

      BasePage.accountButton.click();
      BasePage.loginButton.click();
      LoginPage.notCustomerLink.click();

      const number = Math.round(Math.random() * 10000);
      const email = `email_${number}@ebox.com`;

      RegistrationPage.emailField.type(email);
      RegistrationPage.passwordField.type("hello");
      RegistrationPage.repeatPasswordField.type("hello");
      RegistrationPage.securityQuestionOptions.contains("pet").click();
      RegistrationPage.securityQuestionAnswer.type("cat");
      RegistrationPage.registerButton.click();


      LoginPage.emailField.type(email);
      LoginPage.passwordField.type("hello");
      LoginPage.loginSubmitButton.click();

      BasePage.accountButton.click();
      BasePage.menuBar.should("contain", email);

    })

    

  })

  context("Web Page Funhctionality Tests", () => {

    beforeEach(() => {
      MainPage.visit();
      BasePage.closeDialogButton.click();
      BasePage.accpetCookieButton.click();
      BasePage.reloadPage;
      BasePage.accountButton.click();
      BasePage.loginButton.click();
      LoginPage.emailField.type("demo");
      LoginPage.passwordField.type("demo");
      LoginPage.loginSubmitButton.click();
    })

    it("Search and validate Lemon", () => {
      BasePage.searchIcon.click();
      BasePage.searchField.type("Lemon{enter}");
      MainPage.getProductCard("Lemon Juice (500ml)").click();
      ProductCard.card.should("contain", "Sour but full of vitamins.");
      
    })


    it.only("Search 500ml and validate Lemon, while having multiple cards",() => {
      BasePage.searchIcon.click();
      BasePage.searchField.type("500ml{enter}");
      MainPage.getProductCard("Lemon Juice (500ml)").click();
      ProductCard.card.should("contain", "Sour but full of vitamins.");
    })


    
  })




})

