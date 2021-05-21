describe('game test', function(){
    beforeEach(function() {
        cy.visit('/');
        cy.get('[data-cy=login-email]').type('Nathan-Drake@gmail.com');
        cy.get('[data-cy=login-password]').type('N@th@n123');
        cy.get('[data-cy=login-button]').click();
        cy.server();
        cy.visit('/');
        cy.route({ method: 'GET', url: 'api/games', status:200, response: 'fixture:games.json'});
    })

    it('mock game test', function() {
        cy.get('[data-cy=gameCardList]').should('have.length', 3);
    });

    it('filter test', function() {
        cy.get('[data-cy=filterInput]').type("pok");
        cy.get('[data-cy=gameCardList]').should('have.length',1);
    })

    it('succes add game', function() {
        cy.get('[data-cy=add-game-button]').click();
        cy.get('[data-cy=game-title]').type('Mario Bross');
        cy.get('[data-cy=game-console]').click().get('mat-option').contains("Nintendo DS").click();
        cy.get('[data-cy=game-description]').type('Platformer game.');
        cy.get('[data-cy=game-new-price]').type('60');
        cy.get('[data-cy=game-used-price]').type('50');
        cy.get('[data-cy=game-new-stock]').type('2');
        cy.get('[data-cy=game-used-stock]').type('30');
        cy.get('[data-cy=games-button]').click();
    })

    it('failed add game', function() {
        cy.get('[data-cy=add-game-button]').click();
        cy.get('[data-cy=game-title]').type('Mario Bross');
        cy.get('[data-cy=game-console]').click().get('mat-option').contains("Nintendo DS").click();
        cy.get('[data-cy=game-description]').type('Platformer game.');
        cy.get('[data-cy=game-new-stock]').type('2');
        cy.get('[data-cy=game-used-stock]').type('30');
        cy.get('[data-cy=submit-button]').should('be.disabled');
    })
});