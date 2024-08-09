describe('Compass Export testcase', () => {
    it('Compass Export testcase', () => {

   cy.visit('https://compass-uat-step.mdm.stibosystems.com/')   
   cy.get('#username').type('DHWADV01')
        cy.get('#password').type('123456')
        cy.get('#kc-login').click()
        cy.get(':nth-child(10) > .iconcell > .webstart-page-link > .sub-heading').click()
        cy.wait(5000)
        cy.get(':nth-child(11) > .headerTile > .material-icons').click()
        cy.get('.gwt-SuggestBox').type('CLR_100555')
        cy.get('.search-field-wrapper > .material-icons').click()
        cy.wait(3000)
       
cy.get('#stibo_tab_Organization > .tabs-panel-tab-inner').click()
cy.get('input[type="checkbox"]').each(($checkbox) => {
  cy.wrap($checkbox).check({ force: true });
})
cy.get('#toolbar_button_Export').click()
// Wait for the dialog box to appear
cy.get('.gwt-DialogBox.portal-popup.ExportAction', { timeout: 10000 }).should('be.visible');

// Interact with the dialog box
cy.get('.dropdown').select('Golden Organization to Customer Export');
cy.get('input[type="checkbox"]').check({ force: true });
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
    })
  })
