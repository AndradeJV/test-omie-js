/// <reference types="cypress" />


class CadastrarPage {
    // Clicar em [ Cadastrar ]
    clickSubmit(){ cy.get(".text-center > input").click(); }

    // Escrever CNPJ
    writeCnpj(cnpj){ cy.get("#inscricao").type(cnpj); }

    // Escrever apelido
    writeSurname(surname){ cy.get("#Apelido").type(surname); }

    // Escrever nome
    writeName(name){ cy.get("#name").type(name); }

    // Inserir link da foto
    insertPhoto(urlPhoto){ cy.get("#foto").type(urlPhoto); }

    // Selecionar status
    selectStatus(status){ cy.get("#status").type(status); }
}


export default new CadastrarPage;