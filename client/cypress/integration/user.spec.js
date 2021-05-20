describe('app test', function(){
    it('app runs', function() {
        cy.visit('/');
    });
});

describe('login test', function() {
    it('succesfull', function(){
        cy.visit('/');
        cy.get('[data-cy=login-email]').type('Nathan-Drake@gmail.com');
        cy.get('[data-cy=login-password]').type('N@th@n123');
        cy.get('[data-cy=login-button]').click();
    });

    it('failed wrong password', function(){
        cy.visit('/');
        cy.get('[data-cy=login-email]').type('Nathan-Drake@gmail.com');
        cy.get('[data-cy=login-password]').type('Nath@n123');
        cy.get('[data-cy=login-button]').click();
        cy.get('[data-cy=appError]').should('be.visible');
    });

    it('failed fields are empty', function(){
        cy.visit('/');
        cy.get('[data-cy=login-button]').click();
        cy.get('[data-cy=appError]').should('be.visible');
    });

});

describe('register test', function() {
    it('succesfull', function(){
        cy.visit('/');
        cy.get('[data-cy=register-button').click();
        cy.get('[data-cy=register-firstname]').type("Jens");
        cy.get('[data-cy=register-lastname]').type("Vanhee");
        cy.get('[data-cy=register-email]').type("Jens-Vanhee@hotmail.com");
        cy.get('[data-cy=register-password]').type("P@ssword123");
        cy.get('[data-cy=register-confirm-password]').type("P@ssword123");
        cy.get('[data-cy=register-button]').click();
    });

    it('failed user exists', function(){
        cy.visit('/');
        cy.get('[data-cy=register-button').click();
        cy.get('[data-cy=register-firstname]').type("Jens");
        cy.get('[data-cy=register-lastname]').type("Vanhee");
        cy.get('[data-cy=register-email]').type("Jens-Vanhee@hotmail.com");
        cy.get('[data-cy=register-password]').type("P@ssword123");
        cy.get('[data-cy=register-confirm-password]').type("P@ssword123");
        cy.get('[data-cy=register-button]').click();
        cy.get('[data-cy=appError]').should('be.visible');
    });

    it('failed user passwords dont match', function(){
        cy.visit('/');
        cy.get('[data-cy=register-button').click();
        cy.get('[data-cy=register-firstname]').type("Jan");
        cy.get('[data-cy=register-lastname]').type("Koens");
        cy.get('[data-cy=register-email]').type("Jan-Koens@hotmail.com");
        cy.get('[data-cy=register-password]').type("P@ssword123");
        cy.get('[data-cy=register-confirm-password]').type("P@ssword1234");
        cy.get('[data-cy=register-button]').click();
        cy.get('[data-cy=passwordError]').should('be.visible');
    });
});