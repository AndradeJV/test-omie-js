import EmailResource from "../../../../support/requests/OpenApiDefinition/EmailResource.request";

const payloadOriginal = require("../../../../fixtures/api/OpenApiDefinition/DELETE/EmailResource/payloadOriginal.json");
const payloadPost = require("../../../../fixtures/api/OpenApiDefinition/DELETE/EmailResource/payloadPost.json");


describe("DELETE Endpoit - Email Resource", () => {
    beforeEach(() => {
        EmailResource.postEmail(payloadPost.success.ClientId, payloadPost.success.CategoryId, payloadPost.success.body).should(res => {
            expect(res.status).to.eq(201);
        });
    });


    context("Deletar CNPJ com sucesso", () => {
        it("Validar requisição com sucesso", () => {
            EmailResource.getEmailGeneral().should(response => {                
                let payloadForDeleteEmail = response.body[0].id;
                
                EmailResource.delEmail(payloadForDeleteEmail).should(res => {
                    expect(res.status).to.eq(204);
                });
            });
        });
    });
});