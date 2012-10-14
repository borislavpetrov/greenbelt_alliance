Feature: user accounts

  As a concerned citizen
  So that I can create discussions and post comments on existing discussions
  I should be able to have an account with the website

Background: 

Scenario: successfully sign up for a new account
  Given that I am on the home page
  And I press "Sign up"
  Then I should be on the user signup page
  When I fill in "Username" with "testuser"
  And I fill in "Password" with "password"
  And I fill in "Email" with "user1@example.com"
  And I fill in "Zip Code" with "94704"
  And I press "Submit"
  Then I should see "Welcome testuser!"
  And test user should exist
  

Scenario: successfully log in to an existing account
  Given that a test user exists
  And that I am on the home page
  And I am not logged in
  And I fill in "Username" with "testuser"
  And I fill in "Password" with "password"
  And I press Log in
  Then I should be on the home page
  And I should see "Welcome testuser!"
  And I should not see "Sign up"
