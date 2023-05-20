import { Then, Given, And, When } from "cypress-cucumber-preprocessor/steps";
/// <reference types="cypress" />

Given("visit to url", () => {
    cy.visit("https://www.google.com/");
});
When("search capital {string}", (capital) => {
    cy.get("#APjFqb").type(capital);
    cy.get(".FPdoLc > center > .gNO89b").click();
    //click({ force: true });
});
When("assert capital {string}", (capital) => {
    
    cy.title().should("include", capital);
});
