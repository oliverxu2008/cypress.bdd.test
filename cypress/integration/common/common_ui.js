/// <reference types="Cypress" />

import { Given, When, And, Then } from 'cypress-cucumber-preprocessor/steps';
import selectors from '../../config/selectors';

Given('I am on the Belong homepage', function () {
    cy.visit(Cypress.config('baseUrl'));
});

