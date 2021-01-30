const name = 'Payment for June';

describe('Timeline', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('button[data-cy=add-new-payment-btn]').click();
    cy.get('.ant-modal');
  });

  it('should display errors when required fields are not fulfilled', () => {
    // Submit
    cy.get('button[type=submit]').click();
    // Results
    cy.get('.ant-form-item-explain-error');
    cy.get('.ant-modal');
  });

  it('should add a new payment', () => {
    cy.createPayment();

    // Results
    cy.contains(name);
    cy.get('.ant-alert');
  });

  it('should update the existing new payment', () => {
    cy.createPayment();

    cy.get('button[data-cy=timeline-payment-status-button]').click();

    const newName = 'Payment April';
    const newStatus = 'Bank transfer';
    // Change name
    cy.get('#payment-form_name').clear();
    cy.get('#payment-form_name').type(newName);

    // Change status
    cy.get('div[data-cy=status-select]').click();
    cy.contains(newStatus).click();

    // Submit
    cy.get('button[type=submit]').click();

    // Results
    cy.get('button[data-cy=timeline-payment-status-button]').trigger(
      'mouseover',
    );
    cy.contains(newName);
    cy.contains(newStatus);
    cy.get('.ant-alert');
  });

  it('should delete the existing new payment', () => {
    cy.createPayment();

    cy.get('button[data-cy=timeline-payment-status-button]').click();

    // Delete payment
    cy.get('.ant-btn-danger').click();

    // Results
    cy.contains('OK').click();
    cy.get('.ant-alert');
  });
});
