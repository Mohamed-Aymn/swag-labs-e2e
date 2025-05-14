import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// Import page objects
import LoginPage from "../../pages/loginPage";
import InventoryPage from "../../pages/inventoryPage";

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

Given("I am on the login page", () => {
    cy.visit("https://www.saucedemo.com/");
});

When("I enter username {string} and password {string}", (username, password) => {
    loginPage.enterUsername(username);
    loginPage.enterPassword(password);
});

When("I click the login button", () => {
    loginPage.clickLogin();
});

Then("I should be redirected to the inventory page", () => {
    inventoryPage.verifyInventoryPageIsVisible();
});

Then("I should see an error message", () => {
    loginPage.verifyErrorMessage();
});
