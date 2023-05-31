<reference types="cypress" />

import RegisterPage from "../../pages/RegisterPage";

describe("Register user test suite", () => {
  it("Register with valid creds", () => {
    cy.get('https://magento.softwaretestingboard.com/customer/account/create/');
    cy.get('#firstname').type('Raluca');
    cy.get('#lastname').type('Mirea');
    cy.get('#email_address').type('testraluca001@gmail.com');
    cy.get('#password').type('Test1234');
    RegisterPage.getCreateAccountBtn().contains("Create an Account").click();
    cy.get("div.message-success.success.message")
      .contains("Thank you for registering with Main Website Store.")
      .should("be.visible");
  });
});