Cypress.Commands.add('createPayment', () => {
  // Set name
  cy.get('#payment-form_name').type('Payment for June');

  // Set payment period
  cy.get('#payment-form_paymentPeriod').click();
  cy.get('.ant-picker-content');
  cy.contains('14').click();
  cy.contains('24').click();

  // Submit
  cy.get('button[type=submit]').click();
});
