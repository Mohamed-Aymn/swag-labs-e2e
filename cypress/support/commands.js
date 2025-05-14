// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('selectSortOption', (optionText) => {
    cy.get('[data-test="product_sort_container"]').select(optionText);
});
// cy.selectSortOption('Price (low to high)');

Cypress.Commands.add('addProductToCart', (productName) => {
    cy.contains('.inventory_item', productName)
        .find('button')
        .click();
});
// cy.addProductToCart('Sauce Labs Backpack');

Cypress.Commands.add('removeProductFromCart', (productName) => {
    cy.contains('.cart_item', productName)
        .find('button')
        .click();
});
// cy.removeProductFromCart('Sauce Labs Backpack');

Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://www.saucedemo.com/');
    cy.get('[data-test="username"]').type(username);
    cy.get('[data-test="password"]').type(password);
    cy.get('[data-test="login-button"]').click();
  });
// cy.login()