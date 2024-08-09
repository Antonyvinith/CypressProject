
const excelToJson = require('convert-excel-to-json');

describe('Compass Ticket 1', () => {
    it('Export From AdvanceSearch', () => {

   cy.visit('https://compass-uat-step.mdm.stibosystems.com/')   
   cy.get('#username').type('DHWADV01')
        cy.get('#password').type('123456')
        cy.get('#kc-login').click()
        cy.get(':nth-child(10) > .iconcell > .webstart-page-link > .sub-heading').click()
        cy.wait(5000)
        cy.get('#stibo_anchor_Advanced_Search',{timeout:10000}).click()
       
        cy.get('.palette > :nth-child(3) > .gwt-Label').click()

        cy.get('.gwt-SuggestBox').type('Org'); // Type 'Org' to filter the dropdown options

        cy.get('.item').contains('Organization',{timeout:10000}).click(); // Find and click 'Organization (OBJ_Organization)'

// // Verify that 'Organization (OBJ_Organization)' is in the dropdown text area
// cy.get('.gwt-SuggestBox').should('have.title', 'Organization');

// Click the search button
cy.get('.button-panel > .stibo-GraphicsButton').contains('Search').click(); // working
cy.wait(2000)
//cy.get('input[type="checkbox"]').check('gwt-uid-160_checkbox_0_6662','gwt-uid-162_checkbox_1_6662')
cy.get('input[type="checkbox"]', {timeout: 10000})
  .each(($checkbox, index) => {
    if (index < 3) {
      cy.wait(2000);
      cy.wrap($checkbox).check({force: true});
    }
  });
cy.wait(3000)
// Proceed with further actions
cy.get('.more-actions').click();
cy.wait(3000)
cy.get('.more-panel > :nth-child(7) > .gwt-Label',{timeout:10000}).click();

// // Wait for the dialog box to become visible
// cy.get('.gwt-DialogBox.portal-popup.ExportAction', { timeout: 10000 }).should('be.visible');

// // Check the "Export data from current context" checkbox
// cy.get('.gwt-DialogBox.portal-popup.ExportAction')
//   .find('input[type="checkbox"]#gwt-uid-128')
//   .check({ force: true });

// // Click the "Start export" button
// cy.get('.gwt-DialogBox.portal-popup.ExportAction')
//   .find('button.stibo-GraphicsButton')
//   .contains('Start export')
//   .click();
//Wait for the dialog box to appear
cy.get('.gwt-DialogBox.portal-popup.ExportAction', { timeout: 10000 }).should('be.visible');

// // Interact with the dialog box
 cy.get('.dropdown').select('Golden Organization to Customer Export');
 cy.contains('label', 'Export data from current context').prev('input[type="checkbox"]').check({ force: true });
 //cy.get('span[class="gwt-CheckBox"]').click({ force: true });
 cy.get('.stibo-GraphicsButton').contains('Start export').click();
cy.wait(5000)
cy.get('.cornerbar_notification > :nth-child(1) > .material-icons').click()
cy.wait(5000)
cy.get('.cornerbar-notification-area-content__list .notification-item__title').first().click();
cy.wait(10000);
cy.get('div[class="flexRow componentRow component-3"] div[class="gwt-Label"]').each(($e1,index)=>{
  const vtext =$e1.text()
  expect(vtext).to.equal('Succeeded')
  })
  cy.log("export successfull")

//  cy.contains('Golden Organization to Customer-2024-07-22_06.31.19.xlsx').click()
// cy.log('hello')
// const filepath = Cypress.config("fileServerFolder")+"\cypress\downloads\Golden Organization to Customer-2024-07-22_06.31.19.xlsx"
//  cy.log(filepath)
 




    })
  })


