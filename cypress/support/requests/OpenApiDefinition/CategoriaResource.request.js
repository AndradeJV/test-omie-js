/// <reference types="cypress" />


class CategoriaResource {
    // Get no endpoint { id } único de Categorias
    getUniqueCategorias(id){
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('apiOpenDefinition')}/categorias/${id}`,
            failOnStatusCode: false
        });
    }

    // Get geral no endpoint de Categorias
    getCategorias(id){
        return cy.request({
            method: 'GET',
            url: `${Cypress.env('apiOpenDefinition')}/categorias/${id}`,
            failOnStatusCode: false
        });
    }

    // Post no endpoint geral
    postCategorias(payload){
        return cy.request({
            method: 'POST',
            url: `${Cypress.env('apiOpenDefinition')}/categorias`,
            failOnStatusCode: false,
            body: payload
        });
    }

    // Put no endpoint de Categorias
    putCategorias(id, payload){
        return cy.request({
            method: 'PUT',
            url: `${Cypress.env('apiOpenDefinition')}/categorias/${id}`,
            failOnStatusCode: false,
            body: payload
        });
    }

    // Deletar id
    delCliente(id){
        return cy.request({
            method: 'DELETE',
            url: `${Cypress.env('apiOpenDefinition')}/categorias/${id}`,
            failOnStatusCode: false
        });
    }
}


export default new CategoriaResource;