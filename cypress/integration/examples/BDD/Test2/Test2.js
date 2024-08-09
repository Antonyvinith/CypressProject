const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

Given("the user visits the STEP login page", () => {
  cy.visit("https://compass-uat-step.mdm.stibosystems.com/");
});

Given("the user enters the username {string}", (username) => {
  cy.get("#kc-form-login > :nth-child(1)").type(username);
});

Given("the user enters the password {string}", (password) => {
  cy.get("#password").type(password);
});

When("the user clicks the login button", () => {
  cy.get("#kc-login").click();
});

When("the user navigates to the Compass UI", () => {
  cy.get(
    ":nth-child(10) > .iconcell > .webstart-page-link > .sub-heading"
  ).click();
});

When("the user Searches for {string}", (text) => {
  cy.get("div[class='headerTile'][title='Search']").click();
  cy.get("a[class='gwt-Anchor search-screen-link']").click();
  cy.get("div[class='gwt-Label swatch ObjectTypeSearchDescriptor']").click();
  cy.get("input[type='text'][placeholder='Enter object type']").type(text);
  cy.get("#gwt-uid-2 > .treeItem").click();
  cy.get(
    "button[type='button'][class='stibo-GraphicsButton material SearchButton']"
  ).click();
});
When(
  "the user clicks on any multiple organization Entry from the results",
  () => {
    cy.get("tr[style='height:43px;'][row-header-id='0']").click();
    cy.wait(2000);
    cy.get("tr[style='height:43px;'][row-header-id='1']").click();
    cy.wait(2000);
    cy.get("tr[style='height:43px;'][row-header-id='2']").click();
    cy.wait(2000);
  }
);
When("the user clicks on the Export option", () => {
  cy.get(".more-actions").click();
  cy.get(".more-panel > :nth-child(7)").click();
});

When("the user confirms the export", () => {
  cy.get("button[class='stibo-GraphicsButton']").click();
});

When(
  "the user waits for {string} seconds for the export process to complete",
  (time) => {
    cy.get(".gwt-Anchor").click();
    cy.wait(time * 1000);
  }
);
Then(
  "the user should see the status {string} in the exported data",
  (expectedStatus) => {
    cy.get(".stb-valuesEditorTable").then((text) => {
      const CheckData = text.text();
      cy.log(CheckData);
      cy.get("td > .material > .gwt-Label").then(($el) => {
        cy.log($el.text());
        expect($el.text()).to.equal(expectedStatus);
      });
    });
  }
);
