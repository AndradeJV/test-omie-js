import ListarPage from '../../support/views/pages/Clientes/ListarPage';
import EditarPage from '../../support/views/pages/Clientes/EditarPage';

import data from '../../fixtures/web/editarStatusCliente.json';


describe('Trocar Status de um cliente qualquer', () => {
    before(() => {
        cy.goToApplication();
    });

    it('Dado que eu tenha acessado a plataforma com sucesso', () => {
        cy.validationMessageVisible("app-listar-cliente > h1", data.validacoesEmTela.textoPaginaInicial);
    });

    it("Quando eu acessar um CNPJ específico", () => {
        ListarPage.accessCNPJ(2);

       cy.validationMessageVisible("app-editar-cliente > h1", data.validacoesEmTela.textoCliente);
    });

    it("E mudar o status do CNPJ", () => {
        EditarPage.changeStatus(data.status);
        EditarPage.clickButtonEdit();
    });

    it("Então eu devo ver o status alterado", () => {
        
    });
});