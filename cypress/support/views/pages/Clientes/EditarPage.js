/// <reference types="cypress" />


class EditarPage {
    // Clicar em [ Novo ]
    clickNovo(){ cy.get("th.text-center > a").click(); }

    // Clicar em [ Deletar ]
    clickDelete(){ cy.get(".text-center button.btn.btn-danger").click(); }

    // Clicar em "[ Editar ]"
    clickButtonEdit(){ cy.get(".text-center > input").click(); }
    
    // Clicar em [ Cadastrar ] no modal de categoria
    clickButtonCadastrarCategory(){ cy.get(".custom-modal-footer  input").click(); }

    clickButtonDeleteCategory(){ cy.get(".custom-modal-footer .btn.btn-danger").click(); }

    // Mudar status
    changeStatus(status){ cy.get("#status").select(status); }
}


export default new EditarPage;