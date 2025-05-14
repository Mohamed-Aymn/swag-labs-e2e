class InventoryPage {
    verifyInventoryPageIsVisible() {
        cy.url().should("include", "/inventory.html");
        cy.get('.inventory_list').should('be.visible');
    }
}

export default InventoryPage;
