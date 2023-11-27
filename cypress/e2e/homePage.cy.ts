describe("Home Page to login feature", () => {
  it("contains all home page components", () => {
    cy.visit("/");
    cy.get("#landing-title").should("exist");
    cy.get("#brief-bio").should("exist");
    cy.get("#login-button").should("exist");
    cy.get("#large-logo").should("exist").click();
    cy.get("#header > .container").should("exist");
    cy.get("#clickable-logo").should("exist").click();
    cy.get("#header-login")
      .should("exist")
      .click()
      .then(() => {
        cy.url().should("include", "/login");
      });
  });
});
