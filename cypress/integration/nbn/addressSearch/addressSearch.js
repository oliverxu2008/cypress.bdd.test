/// <reference types="Cypress" />

import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
import selectors from "../../../config/selectors";

When("I click the button {string}", function (btnName) {
    cy.contains(btnName).click({ force: true })
    cy.wait(2000)
});

Then("I can see the Belong website for internet plans", function () {
    cy.url()
        .should('include', selectors.belongInternet.url)
    cy.title()
        .should('include', selectors.belongInternet.page_title)
});

Then("I can see the page for NBN Address Search", function () {
    cy.url()
        .should('include', selectors.checkYourAddress.url)
    cy.title()
        .should('include', selectors.checkYourAddress.page_title)
    cy.get(selectors.checkYourAddress.inputAddress)
        .should('exist')
        .should('be.visible')
});

Then("I input the given address {string}", function (address) {
    cy.get(selectors.checkYourAddress.inputAddress)
        .type(address)
    cy.wait(500)
});

Then("I select the first matched address result", function () {
    cy.get(selectors.checkYourAddress.addressResults).eq(0).click()
    cy.wait(3000)
});

Then('I can see the NBN search address result as {string}', function (technology) {
    cy.url()
        .should('include', selectors.checkYourAddress.resultUrl)
    cy.wait(2000)
    cy.get(selectors.checkYourAddress.serviceAbilityDetails)
        .should('be.visible')
        .invoke('text')
        .should('include', technology)
})
