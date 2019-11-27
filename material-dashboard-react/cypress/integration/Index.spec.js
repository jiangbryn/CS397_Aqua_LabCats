describe ('Test App', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it ('content test', () => {
    cy.visit ('/');
    cy.get('[data-cy=studies]').should('contain', 'Study ID');
  });

  it('test interaction', () => {
    cy.visit ('/');
    cy.get('[data-cy=tabs]').click();
    cy.get('[data-cy=studies]').should('contain' ,'The Gratton Lab');
  });
});