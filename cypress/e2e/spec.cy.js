import BasePage from "../pageObjects/BasePage"
import BasketPage from "../pageObjects/BasketPage"
import CreateAddressPage from "../pageObjects/CreateAddressPage"
import DeliveryMethodPage from "../pageObjects/DeliveryMethodPage"
import LoginPage from "../pageObjects/LoginPage"
import MainPage from "../pageObjects/MainPage"
import MenuBar from "../pageObjects/MenuBar"
import OrderCompletionPage from "../pageObjects/OrderCompletionPage"
import OrderSummaryPage from "../pageObjects/OrderSummaryPage"
import PaymentOptionsPage from "../pageObjects/PaymentOptionsPage"
import ProductCard from "../pageObjects/ProductCard"
import RegistrationPage from "../pageObjects/RegistrationPage"
import SavedAddressesPage from "../pageObjects/SavedAddressesPage"
import SavedPaymentMethodsPage from "../pageObjects/SavedPaymentMethodsPage"
import SelectAddressPage from "../pageObjects/SelectAddressPage"

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
      MenuBar.loginButton.click();
      LoginPage.emailField.type("demo");
      LoginPage.passwordField.type("demo");
      LoginPage.loginSubmitButton.click();
      BasePage.accountButton.click();
      MenuBar.menuBar.should("contain", "demo");
    })

    it("Registration Scenario", () => {

      BasePage.accountButton.click();
      MenuBar.loginButton.click();
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
      MenuBar.menuBar.should("contain", email);

    })

    

  })

  context("Web Page Funhctionality Tests", () => {

    beforeEach(() => {
      MainPage.visit();
      BasePage.closeDialogButton.click();
      BasePage.accpetCookieButton.click();
      BasePage.reloadPage;
      BasePage.accountButton.click();
      MenuBar.loginButton.click();
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


    it("Search 500ml and validate Lemon, while having multiple cards",() => {
      BasePage.searchIcon.click();
      BasePage.searchField.type("500ml{enter}");
      MainPage.getProductCard("Lemon Juice (500ml)").click();
      ProductCard.card.should("contain", "Sour but full of vitamins.");
    });


    it("Search 500ml and validate cards", () => {
      BasePage.searchIcon.click();
      BasePage.searchField.type("500ml{enter}");

      MainPage.getProductCard("Eggfruit Juice (500ml)").click();
      ProductCard.card.should("contain", "Now with even more exotic flavour.");
      ProductCard.closeButton.click();

      MainPage.getProductCard("Lemon Juice (500ml)").click();
      ProductCard.card.should("contain", "Sour but full of vitamins.");
      ProductCard.closeButton.click();

      MainPage.getProductCard("Strawberry Juice (500ml)").click();
      ProductCard.card.should("contain", "Sweet & tasty!");
      
    });


    it("Add a review", () => {
      
      BasePage.searchIcon.click();
      BasePage.searchField.type("Raspberry{enter}");

      MainPage.getProductCard("Raspberry Juice (1000ml)").click();
      ProductCard.reviewProductField.click().type("Tastes like metal");
      ProductCard.submitButton.click();
      ProductCard.expandReviewsButton.click();
      ProductCard.reviews.should("contain", "Tastes like metal");

    });


    it("Validate product card amount", () => {
      MainPage.cardsPerPageField.should("contain", 12);
      MainPage.cardsPerPageField.click();
      MainPage.cardsSelectionField.contains(24).click();
      MainPage.allProductCards.should("have.length", 24);
      MainPage.cardsPerPageField.click();
      MainPage.cardsSelectionField.contains(36).click();
      MainPage.allProductCards.should("have.length", 35);
    })


    it.only("Buy Girlie T-shirt", () => {
      BasePage.searchIcon.click();
      BasePage.searchField.type("Girlie{enter}");
      MainPage.getAddToCartButton("Girlie").click();

      

      BasePage.shoppingCartIcon.click();
      BasketPage.checkoutButton.click({force:true});

      SelectAddressPage.getAddressSelection("United Fakedom").click();
      SelectAddressPage.continueButton.click();

      DeliveryMethodPage.getDeliverySelection("Standard Delivery").click();
      DeliveryMethodPage.continueButton.click();

      PaymentOptionsPage.getCardRadioButton("3456").click();

      PaymentOptionsPage.continueButton.click();

      OrderSummaryPage.placeOrderButton.click();

      OrderCompletionPage.confirmationMessage.should("contain", "Thank you for your purchase!");

    })


    it("Scenario - Add address", () => {

      BasePage.accountButton.click();
      MenuBar.orderPaymentButton.click();
      MenuBar.savedAddressButton.click();

      SavedAddressesPage.addNewAddressButton.click();

      CreateAddressPage.countryField.type("Latvia");
      CreateAddressPage.nameField.type("Anna Lapa");
      CreateAddressPage.numberField.type("20247821");
      CreateAddressPage.zipField.type("LV1085");
      CreateAddressPage.addressField.type("Kr.Valdemara 8");
      CreateAddressPage.cityField.type("Riga");
      CreateAddressPage.submitButton.click();
      
      SavedAddressesPage.addressRows.should("be.visible", "Kr.Valdemara 8");

    })


    it("Add payment option", () => {
      BasePage.accountButton.click();
      MenuBar.orderPaymentButton.click();
      MenuBar.paymentOptionButton.click();

      SavedPaymentMethodsPage.expansionButton.click();

      SavedPaymentMethodsPage.nameField.type("Anna Lapa");
      SavedPaymentMethodsPage.cardNumberField.type("1234567890123456");
      SavedPaymentMethodsPage.expiryMonthField.select("7");
      SavedPaymentMethodsPage.expiryYearField.select("2090");
      SavedPaymentMethodsPage.submitButton.click();

      SavedPaymentMethodsPage.paymentOptionRows.should("contain", "3456");

    })


  })




})

