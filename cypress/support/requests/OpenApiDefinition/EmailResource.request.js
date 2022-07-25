/// <reference types="cypress" />


class EmailResource {
    // Get no endpoint { id } único de email
    getUniqueEmail(id){
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('apiOpenDefinition')}/emails/${id}`,
            failOnStatusCode: false
        });
    }

    // Get geral no endpoint de email
    getEmails(id){
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('apiOpenDefinition')}/emails?clienteId=${id}`,
            failOnStatusCode: false
        });
    }

    // Post no endpoint geral
    postEmail(ClientId, CategoryId, payload){
        return cy.request({
            method: 'POST',
            url: `${Cypress.env('apiOpenDefinition')}/emails?clienteId=${ClientId}&categoriaId=${CategoryId}`,
            failOnStatusCode: false,
            body: payload
        });
    }

    // Put no endpoint de email
    putEmail(ClientId, CategoryId, payload){
        return cy.request({
            method: 'PUT',
            url: `${Cypress.env('apiOpenDefinition')}/emails/${ClientId}?categoriaId=${CategoryId}`,
            failOnStatusCode: false,
            body: payload
        });
    }

    // Deletar id
    delEmail(id){
        return cy.request({
            method: 'DELETE',
            url: `${Cypress.env('apiOpenDefinition')}/emails/${id}`,
            failOnStatusCode: false
        });
    }

    getEmailGeneral(){
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('apiOpenDefinition')}/emails`,
            failOnStatusCode: false
        })
    }
}


export default new EmailResource;