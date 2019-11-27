describe ('Test App', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it ('content test', () => {
    cy.visit ('/');
    cy.get('[data-cy=studies]').should('contain', 'Study ID');
  });

});