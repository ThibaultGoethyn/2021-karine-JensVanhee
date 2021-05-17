describe('my first test', function() {
    it('our app runs', function() {
        cy.visit('http://localhost:4200/');
        //cy.get('[data-cy=gameCardList]').should('have.length', 17);
        //cy.get('[data-cy=filterInput]').type('cal');
        //cy.get('[data-cy=gameCardList]').should('have.length', 3);
        cy.get('[data-cy=gameCard]').should('be.visible');
    });

    /* Doesn't work
    it('mock game test', function() {
        cy.server();
        cy.visit('http://localhost:4200/');
        cy.route({ method: 'GET', url: 'http://localhost:44349/api/game', status:200, response: 'fixture:games.json'});

        cy.get('[data-cy=gameCardList]').should('have.length', 3);
    });
    */
});
