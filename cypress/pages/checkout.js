class CheckoutPage {
    enterCheckoutInformation(firstName, lastName, postalCode) {
        cy.get('[data-test="firstName"]').type(firstName);
        cy.get('[data-test="lastName"]').type(lastName);
        cy.get('[data-test="postalCode"]').type(postalCode);
    }

    clickContinue() {
        cy.get('[data-test="continue"]').click();
    }

    clickFinish() {
        cy.get('[data-test="finish"]').click();
    }

    verifyOrderConfirmation() {
        cy.get('.complete-header').should('contain.text', 'Thank you for your order!');
    }
}

export default CheckoutPage;
