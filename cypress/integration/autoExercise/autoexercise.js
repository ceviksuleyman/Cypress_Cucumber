import { Then, Given, And, When } from "cypress-cucumber-preprocessor/steps";

Given("go to url", () => {
    cy.visit("https://www.automationexercise.com/");
});

When("login link", () => {
    cy.get(".shop-menu > .nav > :nth-child(4) > a").click();
});

Then("email, password and sigin button", () => {
    cy.get("input[data-qa=login-email]").type("automation01@gmail.com");
    cy.get('[type="password"]').type("123456!a");
    cy.get(".login-form > form > .btn").click();
});

And("assert login", () => {
    cy.get(".shop-menu >").should("contain.text", "Logged in as Automation");
    cy.get(".shop-menu >").should("contain.text", "Logout");
});
