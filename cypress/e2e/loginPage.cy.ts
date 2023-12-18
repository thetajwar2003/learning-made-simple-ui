describe("Login Page", () => {
  it("should render login and let student access dashboard", () => {
    cy.visit("/login");
    cy.get("#title-section").should("exist");
    cy.get("#email").type("nafisrizwank@gmail.com");
    cy.get("#password").type("Lms1234!");
    cy.get("#loginButton")
      .click()
      .then(() => {
        cy.url().should("include", "/student", { setTimeout: 6000 });
      });
  });

  it("should render login and let teacher access dashboard", () => {
    cy.visit("/login");
    cy.get("#title-section").should("exist");
    cy.get("#login-teacher-tab").should("exist").click();
    cy.get("#email").type("nafisrizwank@gmail.com");
    cy.get("#password").type("Lms1234!");
    cy.get("#loginButton")
      .click()
      .then(() => {
        cy.url().should("include", "/teacher", { setTimeout: 6000 });
      });
  });
});
