/// <reference types="cypress" />

describe('MOT cypress activity', () => {
    beforeEach(()=> {
        cy.fixture('form_login_data').as('data');
    });
    
    it('shoul submit the form', function () {
        cy.visit('https://automationintesting.online/#/');
        const { name, email, phone, subject, message} = this.data.form_test01;
        cy.get('#name').type(name);
        cy.get('#email').type(email);
        cy.get('#phone').type(phone);
        cy.get('#subject').type(subject);
        cy.get('#description').type(message);
        cy.get('#submitContact').click();
        cy.contains(`Thanks for getting in touch ${name}!`).should('be.visible');
    });

    it('should login successfully as an admin',  function () {
        const {username,  password } = this.data.validCredentials;
        cy.visit('https://automationintesting.online/#/admin')
        cy.get('[data-testid="username"]').type(username);
        cy.get('[data-testid="password"]').type(password);
        cy.get('[data-testid="submit"]').click();
        cy.get('.order-3 > .navbar-nav > :nth-child(3) > .nav-link').should('be.visible');
    });

    it('should display the booking', function () {
        const { name, subject} = this.data.form_test01;
        cy.get('.order-3 > .navbar-nav > :nth-child(1) > .nav-link').click();
        cy.contains(name).should('be.visible');
        cy.contains(subject).should('be.visible');
    });

});