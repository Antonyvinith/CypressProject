const {
  Given,
  When,
  Then,
} = require("@badeball/cypress-cucumber-preprocessor");

var OrganizationID = "";
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

When("the user clicks on any organization Entry from the results", () => {
  cy.get("div[class='sheet-cell']").eq(1).click();
  cy.get(
    "tr[class='even'] td[class='readonly-cell sheet-coll'][data-row='0'][data-col='0'] div[class='sheet-cell'][style='max-height:39px;height:39px;']"
  ).click();
  cy.get("div[class='stibo-Value-ReadOnly']").then((data) => {
    OrganizationID = data.text();
    cy.log(data.text());
  });
  cy.wait(2000);
});

When("the user clicks on any of the Linked Customer", () => {
  cy.get(
    "div[id='stibo_tab_Linked_Golden_Customer(s)'] div[class='tabs-panel-tab-inner']"
  ).click();
  cy.wait(2000);
  cy.get(':nth-child(2) > [data-col="0"] > .sheet-cell > .menulink').click();
  cy.wait(3000);
});

When("the user Changes to the Organization Tab in Customer page", () => {
  cy.get("#stibo_tab_Organization > .tabs-panel-tab-inner").click();
});

When("the user verifies the Organization ID if they are the same", () => {
  cy.log("Organization ID", OrganizationID);
  cy.get(".menulink").then(($ID) => {
    assert.equal(OrganizationID.trim(), $ID.text().trim());
  });
});
