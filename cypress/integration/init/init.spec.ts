/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */

describe('Cypress', () => {   
    it('is working', () => {
        /* eslint-disable jest/valid-expect */
        expect(true).to.equal(true);
    }) 
    
    it('opens the app', () => {   
        cy.visit('http://localhost:3000') 
    })
});