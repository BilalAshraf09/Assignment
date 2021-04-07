#Feature: Login into application
#    As a QA
#    I Login into application

#    Scenario: Single click on a link should navigate to another page
#        Given  I navigated application at home page
#        When  I click on sign in button
#        And I login into application 
#        Then I verify user login successfully


Feature: Login into application
    As a QA
    I Login into application

Scenario: 
    Given I am on the WestwingNow home page
    When I search for "möbel"
    Then I should see product listing page with a list of products
    When I click on wishlist icon of the first found product
    Then I should see the login and registration overlay
    When I switch to login form of the overlay
    And I log in with existing credentials
    Then the product should be added to the wishlist
    And I go to the wishlist page
    And I delete the product from my wishlist

