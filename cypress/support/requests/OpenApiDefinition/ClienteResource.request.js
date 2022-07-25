/// <reference types="cypress" />


class ClienteResource {
    // Get no endpoint { id } único de clientes
    getUniqueClientes(id){
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('apiOpenDefinition')}/clientes/${id}`,
            failOnStatusCode: false
        });
    }

    // Get geral no endpoint de clientes
    getClientes(id){
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('apiOpenDefinition')}/clientes/${id}`,
            failOnStatusCode: false
        });
    }

    // Post no endpoint geral
    postClientes(payload){
        return cy.request({
            method: 'POST',
            url: `${Cypress.env('apiOpenDefinition')}/clientes`,
            failOnStatusCode: false,
            body: payload
        });
    }

    // Put no endpoint de clientes
    putClientes(id, payload){
        return cy.request({
            method: 'PUT',
            url: `${Cypress.env('apiOpenDefinition')}/clientes/${id}`,
            failOnStatusCode: false,
            body: payload
        });
    }

    // Deletar id
    delCliente(id){
        return cy.request({
            method: 'DELETE',
            url: `${Cypress.env('apiOpenDefinition')}/clientes/${id}`,
            failOnStatusCode: false
        });
    }
}


export default new ClienteResource;