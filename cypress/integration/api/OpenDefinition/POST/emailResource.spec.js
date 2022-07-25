import EmailResource from "../../../../support/requests/OpenApiDefinition/EmailResource.request";
const payloadOne = require("../../../../fixtures/api/OpenApiDefinition/POST/EmailResource/payload.json");


describe("POST Endpoint - Email Resource", () => {
    context("Requisição com sucesso", () => {
        it("Validação de requisição post", () => {
            EmailResource.postEmail(payloadOne.success.ClientId, payloadOne.success.CategoryId, payloadOne.success.body).should(res => {
                expect(res.status).to.eq(201);
                expect(res.body.categoria.id).to.eq(payloadOne.success.body.categoria.id);
                expect(res.headers.connection).to.not.eq('test');
            });
        });
    });

    context("Requisição com errp", () => {
        it("Validação de requisição post com erros", () => {
            EmailResource.postEmail(payloadOne.error.ClientId, payloadOne.error.CategoryId, payloadOne.error.body).should(res => {
                expect(res.status).to.eq(404);
                expect(res.headers.connection).to.not.eq('test');
            });
        });
    });
});