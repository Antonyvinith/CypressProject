Feature: Test Cases on STEP for To verify the Linked Customer Contains the Their Linked Organization

  Scenario: To verify the Linked Customer Contains the Thier Linked Organization
    Given the user visits the STEP login page
      And the user enters the username "DHWADV01"
      And the user enters the password "123456"
      When the user clicks the login button
      And the user navigates to the Compass UI
      And the user Searches for "Organization"
      And the user clicks on any organization Entry from the results
      And the user clicks on any of the Linked Customer
      And the user Changes to the Organization Tab in Customer page
    Then the user verifies the Organization ID if they are the same