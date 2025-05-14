Feature: Checkout functionality

  Scenario: Successful checkout
    Given I am on the login page
    When I log in with valid credentials
    And I am on the inventory page
    And I add a product to the cart
    And I proceed to the checkout page
    And I fill in the checkout information with valid details
    And I submit the checkout form
    Then I should see the checkout page with the correct product
    When I click finish
    And I should see a confirmation message

  Scenario: Unsuccessful checkout with missing information
    Given I am on the login page
    When I log in with valid credentials
    And I am on the inventory page
    And I add a product to the cart
    And I proceed to the checkout page
    When I fill in the checkout information with missing details
    And I submit the checkout form
    Then I should see an error message
