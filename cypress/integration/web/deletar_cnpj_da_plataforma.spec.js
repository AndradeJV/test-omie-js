import EditarPage from "../../support/views/pages/Clientes/EditarPage";
import ListarPage from "../../support/views/pages/Clientes/ListarPage";

import data from '../../fixtures/web/editarStatusCliente.json';


describe("Deletar um CNPJ da plataforma", () => {
    before(() => {
        cy.goToApplication();
    });
    
    it("Dadp que eu tenha acessado um CNPJ", () => {
        ListarPage.accessCNPJ(2);
    });

    it("Quando eu optar por deletar o CNPJ do cadastro", () => {
        EditarPage.clickDelete();
        EditarPage.clickButtonDeleteCategory();
    });

    it("Então eu devo ser redirecionado para a página inicial da plataforma", () => {
        cy.validationMessageVisible("app-listar-cliente > h1", data.validacoesEmTela.textoPaginaInicial);
    });
});