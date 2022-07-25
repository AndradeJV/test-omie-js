Cypress.Commands.add("goToApplication", () => {
    cy.visit('/');
});


Cypress.Commands.add("waitForTime", time => {
    const result = time * 1000

    cy.wait(result);
});


Cypress.Commands.add("validationMessageVisible", (css, msg) => {
    cy.contains(css, msg).should('be.visible');
    cy.waitForTime(2);
});


Cypress.Commands.add("validationCssPerValue", (css, value) => {
    cy.get(css).should('have.value', value);
});


Cypress.Commands.add("requestText", (css, text) => {
    const textVariable = cy.wrap(css);


    if(textVariable == text) return;

    else return "Text incorrect";
});