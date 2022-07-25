import EmailResource from "../../../../support/requests/OpenApiDefinition/EmailResource.request";

const payloadUpdate = require("../../../../fixtures/api/OpenApiDefinition/PUT/EmailResource/payloadUpdate.json");
const payloadReference = require("../../../../fixtures/api/OpenApiDefinition/PUT/EmailResource/payloadReference.json")


describe("PUT Endpoint - Email Resource", () => {
    before(() => {
        EmailResource.getEmailGeneral().should(response => {                
            let payloadForDeleteEmail = response.body[0].id; 

            EmailResource.putEmail(payloadForDeleteEmail, payloadReference.success.CategoryId, payloadReference.success.body).should(res => {
                expect(res.status).to.eq(200);
                expect(res.body.nome).to.eq(payloadReference.success.body.nome);
                expect(res.body.email).to.eq(payloadReference.success.body.email);
            });
        })
    });

    after(() => {
        EmailResource.getEmailGeneral().should(response => {                
            let payloadForDeleteEmail = response.body[0].id; 

            EmailResource.putEmail(payloadForDeleteEmail, payloadUpdate.success.CategoryId, payloadUpdate.success.body).should(res => {
                expect(res.status).to.eq(200);
                expect(res.body.nome).to.eq(payloadUpdate.success.body.nome);
                expect(res.body.email).to.eq(payloadUpdate.success.body.email);
            });
        })
    });


    it("Validação de requisição post", () => {
        EmailResource.getEmailGeneral().should(response => {                
            let payloadForDeleteEmail = response.body[0].id; 
            
            EmailResource.putEmail(payloadForDeleteEmail, payloadUpdate.success.CategoryId, payloadUpdate.success.body).should(res => {
                expect(res.status).to.eq(200);
                expect(res.body.nome).to.eq(payloadUpdate.success.body.nome);
                expect(res.body.email).to.eq(payloadUpdate.success.body.email);
            });
        })
    });
});