Feature: Shopping Cart

  Scenario: Add item to cart
    Given I am logged in as "standard_user"
    When I add "Sauce Labs Backpack" to the cart
    Then the cart badge should show "1"

  Scenario: Remove item from cart
    Given I have "Sauce Labs Backpack" in the cart
    When I remove "Sauce Labs Backpack" from the cart
    Then the cart should be empty
