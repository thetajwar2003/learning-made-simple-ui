describe("template spec", () => {
  it("fails sign up", () => {
    // for dev env
    cy.visit("http://localhost:3000/");
    cy.get("#header-login").click();
    cy.get("#email").type("rahmantajwar131@gmail.com");
    cy.get("#password").type("cdsljnjc219393");
    cy.get("#loginButton").click();
    cy.get("#signUpError").should("exist");
  });

  it("should login", () => {
    cy.visit("http://localhost:3000/");
    cy.get("#header-login").click();
    cy.get("#email").type(`${Date.now()}@aharotest.com`);
    cy.get("#password").type("cdsljnjc219393");
    cy.get("#loginButton").click();
    cy.url().should("include", "/student");
  });
});
