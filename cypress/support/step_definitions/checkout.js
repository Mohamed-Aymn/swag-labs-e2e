const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

// Given steps
// Given('I am on the login page', () => {
//     cy.visit('https://www.saucedemo.com/');
// });

Given('I log in with valid credentials', () => {
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
});

Given('I am on the inventory page', () => {
    // Ensure the user is on the inventory page after logging in
    cy.url().should('include', '/inventory.html');
});

// When steps
When('I add a product to the cart', () => {
    cy.get('.inventory_item').first().find('.btn_inventory').click();
});

When('I proceed to the checkout page', () => {
    cy.get('.shopping_cart_link').click();
    cy.get('.checkout_button').click();
});

When('I fill in the checkout information with valid details', () => {
    cy.get('[data-test="firstName"]').type('John');
    cy.get('[data-test="lastName"]').type('Doe');
    cy.get('[data-test="postalCode"]').type('12345');
});

When('I fill in the checkout information with missing details', () => {
    cy.get('[data-test="firstName"]').type('John');
});

When('I submit the checkout form', () => {
    cy.get('[name="continue"]').click();
});

When('I click finish', () => {
    cy.get('[name="finish"]').click();
});

// Then steps
Then('I should see the checkout page with the correct product', () => {
    cy.url().should('include', '/checkout-step-two.html');
    cy.get('.cart_item').should('have.length', 1);
});

Then('I should see a confirmation message', () => {
    cy.get('.complete-header').should('contain.text', 'Thank you');
});
