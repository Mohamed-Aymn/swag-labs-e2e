import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import CartPage from '../../pages/cartPage';

const cartPage = new CartPage();

Given('I am logged in as {string}', (username) => {
    cy.login(username, 'secret_sauce');
});

When('I add {string} to the cart', (itemName) => {
    cy.addProductToCart(itemName);
});

Then('the cart badge should show {string}', (count) => {
    cy.get('.shopping_cart_badge').should('have.text', count);
});

Given('I have {string} in the cart', (itemName) => {
    cy.login('standard_user', 'secret_sauce');
    cy.addProductToCart(itemName);
    cy.get('.shopping_cart_link').click();
});

When('I remove {string} from the cart', (itemName) => {
    cy.removeProductFromCart(itemName);
});

Then('the cart should be empty', () => {
    cartPage.verifyCartIsEmpty();
});
