Feature: Test Cases on STEP for User able to sucessfully export the Organization ROWS

  Scenario: User able to sucessfully export the Organization ROWS
    Given the user visits the STEP login page
      And the user enters the username "DHWADV01"
      And the user enters the password "123456"
      When the user clicks the login button
      And the user navigates to the Compass UI
      And the user Searches for "Organization"
      And the user clicks on any multiple organization Entry from the results
      And the user clicks on the Export option
      And the user confirms the export
      And the user waits for "30" seconds for the export process to complete
    Then the user should see the status "Succeeded" in the exported data