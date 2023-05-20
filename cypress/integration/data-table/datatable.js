import { Then, Given, And, When } from "cypress-cucumber-preprocessor/steps";
/// <reference types="cypress" />

Given("visit to url", () => {
    cy.visit("https://qa-environment.koalaresorthotels.com/");
    cy.get("#navLogon > .nav-link").click();
});
When("login using data", (dataTable) => {
    cy.get("#UserName").type(dataTable.rawTable[1][0]);
    cy.get("#Password").type(dataTable.rawTable[1][1]);
    cy.get("#btnSubmit").click();
});

When("verify login", () => {
    cy.get(".username").should("contain.text", "manager");
});
