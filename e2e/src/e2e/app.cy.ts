describe('e2e', () => {
  beforeEach(() => cy.visit('/'));

  it('should load the page with the header', () => {
    cy.get('lib-header').should('be.visible');
    cy.get('lib-header img[alt]').should('exist');
  });
});
