describe( 'Search for citizen', () => {
    it( 'Search', () => {
      cy.visit( 'http://localhost:3000/' );
      cy.get('#searchbar').type('tobus bitterlauncher').should('have.value', 'tobus bitterlauncher');
      cy.get('.card .title a').contains('Tobus Bitterlauncher');
    });

    it( 'Goes to Detail', () => {
        cy.get('.card .title a').click();
        cy.get('.citizen-card .title h1').contains('Tobus Bitterlauncher');
      });

    it( 'Navigate through friends', () => {
        cy.get('.value a').click();
        cy.get('.citizen-card .title h1').contains('Tinadette Gyrorocket');
    });

    it( 'Goes back to list', () => {
        cy.get('#back-button').click();
        cy.get('#searchbar').should('have.value', 'tobus bitterlauncher');
        cy.get('.card .title a').contains('Tobus Bitterlauncher');
    });
  });