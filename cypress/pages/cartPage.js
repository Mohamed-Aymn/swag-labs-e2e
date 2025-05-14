class CartPage {
    removeItem(itemName) {
        cy.contains('.cart_item', itemName)
            .find('button')
            .click();
    }

    verifyCartIsEmpty() {
        cy.get('.cart_item').should('not.exist');
    }
}

export default CartPage;
