/// <reference types="cypress" />


class ListarPage {
    // Acessar um CNPJ
    accessCNPJ(css){ cy.get(`tr:nth-child(${css}) > td.text-center > a`).click(); }

    // Acessar aba cadastrar
    accessCadastrar(){ cy.get("th.text-center > a").click(); }
}


export default new ListarPage;