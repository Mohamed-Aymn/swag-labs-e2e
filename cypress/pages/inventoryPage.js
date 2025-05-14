class InventoryPage {
    elements = {
        title: () => cy.get('.title'),
        inventoryList: () => cy.get('.inventory_list'),
    };

    verifyInventoryPage() {
        this.elements.title().should('have.text', 'Products');
        this.elements.inventoryList().should('be.visible');
    }
}

export default new InventoryPage();
