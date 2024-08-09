const ExcelJS = require('exceljs')
describe('Compass Export Ticket 1', () => {
    it('Export From GoldenCustomer Details Page', () => {

   cy.visit('https://compass-uat-step.mdm.stibosystems.com/')   
   cy.get('#username').type('DHWADV01')
        cy.get('#password').type('123456')
        cy.get('#kc-login').click()
        cy.get(':nth-child(10) > .iconcell > .webstart-page-link > .sub-heading').click()
        cy.wait(5000)
        cy.get('#stibo_anchor_Advanced_Search',{timeout:10000}).click()
       
        cy.get('.palette > :nth-child(3) > .gwt-Label').click()
        cy.get('.gwt-SuggestBox').type('Org'); // Type 'Org' to filter the dropdown options

        cy.get('.item').contains('Organization',{timeout:10000}).click(); 
        cy.get('.button-panel > .stibo-GraphicsButton').contains('Search').click(); // working
        cy.wait(2000)
        cy.get(':nth-child(1) > [data-col="0"] > .sheet-cell > .menulink').click()
        cy.wait(3000);
        cy.get('#stibo_tab_Linked_Golden_Customer\\(s\\) > .tabs-panel-tab-inner > :nth-child(1) > .gwt-InlineLabel') //
        .contains('Linked Golden Customer(s)')
        .click();
        cy.wait(3000);
        cy.get('[style="height: 50px;"] > [data-col="0"] > .sheet-cell > .menulink',{timeout:10000}).click()
        cy.wait(3000)
        cy.get('#stibo_tab_Organization > .tabs-panel-tab-inner > :nth-child(1) > .gwt-InlineLabel',{timeout:10000}).click()
        cy.wait(3000)
        cy.get('input[type="checkbox"]').each(($checkbox) => {
            cy.wrap($checkbox).check({ force: true });
          })
// cy.get('input[type="checkbox"]').each(($checkbox) => {
//   cy.wrap($checkbox).check({ force: true });
// })
cy.wait(1000)
cy.get('#toolbar_button_Export').click()
// Wait for the dialog box to appear
cy.get('.gwt-DialogBox.portal-popup.ExportAction', { timeout: 10000 }).should('be.visible');
cy.wait(1000)
// Interact with the dialog box
cy.get('.dropdown').select('Golden Organization to Customer Export');

cy.contains('label', 'Export data from current context').prev('input[type="checkbox"]').check({ force: true });

cy.get('.stibo-GraphicsButton').contains('Start export').click();
cy.get('.cornerbar_notification > :nth-child(1) > .material-icons').click()
cy.wait(5000)
cy.get('.cornerbar-notification-area-content__list .notification-item__title').first().click();
cy.wait(3000);
cy.get('div[class="flexRow componentRow component-3"] div[class="gwt-Label"]').each(($e1,index)=>{
const vtext =$e1.text()
expect(vtext).to.equal('Succeeded')
})
cy.log("export successfull")

cy.contains('excel').click()
cy.log('hello')
// const filepath = Cypress.config("fileServerFolder")+"/cypress/downloads/cypress/downloads/excel-2024-07-03_15.18.03.xlsx"
//  cy.log(filepath)
const filepath = 'C:/Users/Yuvashree.J/Desktop/CompassAutomation/cypress/downloads/excel-2024-07-24_06.50.33.xlsx';
const SearchText = 'ORG_3698455';
cy.task('ExcelValidation', { searchText: SearchText, filepath: filepath }).then(result => {
  // console.log(result)
  // cy.log(JSON.stringify(result)); // converts json to string.
  // Check if the search text was found in the Excel file
  expect(result.found).to.be.true;
  // Optionally, verify the exact match
  expect(result.value).to.equal(SearchText);
});


    })
})