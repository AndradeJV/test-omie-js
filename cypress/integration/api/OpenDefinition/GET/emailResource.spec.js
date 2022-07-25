import EmailResource from "../../../../support/requests/OpenApiDefinition/EmailResource.request";

const payloadUniqueEmail = require("../../../../fixtures/api/OpenApiDefinition/GET/EmailResource/payload.json");
const payloadEmails = require("../../../../fixtures/api/OpenApiDefinition/GET/EmailResource/payloadEmails.json");


describe("GET Endpoint - Email Resource", () => {
    before(() => {

    });

    context("Endpoint - Unique email (/clientes/id)", () => {
        it("Validar retorno com sucesso", () => {
            EmailResource.getEmailGeneral().should(response => {
                let id = response.body[0].id;

                EmailResource.getUniqueEmail(id).should(res => {
                    expect(res.status).to.eq(200);
                    expect(res.headers.connection).to.eq(payloadUniqueEmail.success.headers.connection);
                });
            });

        });
    
        it("Validar retornos com erro", () => {
            EmailResource.getUniqueEmail(payloadUniqueEmail.error.id).should(res => {
                expect(res.status).to.eq(404);
                expect(res.body.status).to.eq(404);
                expect(res.body.message).to.eq(payloadUniqueEmail.error.body.message);
                expect(res.headers.connection).to.eq(payloadUniqueEmail.error.headers.connection);
            });
        });
    });


    context("Endpoint emails em geral - (/clientes)", () => {
        it("Validar retorno com sucesso", () => {
            EmailResource.getEmailGeneral().should(response => {
                let id = response.body[0].id; 

                EmailResource.getEmails(id).should(res => {
                    expect(res.status).to.eq(200);
                });
            })

        });

        it("Validar retorno com erros", () => {
            EmailResource.getEmails(payloadEmails.error.id).should(res => {
                expect(res.status).to.eq(400);
            });
        });
    });
});