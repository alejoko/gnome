describe( 'Search for citizen', () => {
    it( 'Search efectively', () => {
      cy.visit( 'http://localhost:3000/' );
      cy.get('#searchbar').type('tobus bitterlauncher').should('have.value', 'tobus bitterlauncher');
      cy.get('.card .title a').contains('Tobus Bitterlauncher');
    });

    it( 'Goes to Detail efectively', () => {
        cy.get('.card .title a').click();
        cy.get('.citizen-card .title h1').contains('Tobus Bitterlauncher');
      });

    it( 'Navigate through friends efectively', () => {
        cy.get('.value a').click();
        cy.get('.citizen-card .title h1').contains('Tinadette Gyrorocket');
    });

    it( 'goes back to list efectively', () => {
        cy.get('#back-button').click();
        cy.get('#searchbar').should('have.value', 'tobus bitterlauncher');
        cy.get('.card .title a').contains('Tobus Bitterlauncher');
    });
  });