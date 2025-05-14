import loginPage from '../pages/loginPage';
import inventoryPage from '../pages/inventoryPage';

describe('SauceDemo Login Tests', () => {
    it('should log in with valid credentials', () => {
        loginPage.visit();
        loginPage.login('standard_user', 'secret_sauce');
        inventoryPage.verifyInventoryPage();
    });

    it('should display error with invalid credentials', () => {
        loginPage.visit();
        loginPage.login('invalid_user', 'wrong_password');
        loginPage.elements.errorMessage().should('be.visible');
    });
});
