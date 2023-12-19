describe("signup Page", () => {
  it("should render all student attributes and fail signup", () => {
    cy.visit("/signup");
    cy.get("#name").should("exist").type("Tajwar Rahman");
    cy.get("#email").should("exist").type("rahmantajwar131@gmail.com");
    cy.get("#password").should("exist").type("randoPassword123");
    cy.get("#school").should("exist").type("CCNY");
    cy.get("#dob").should("exist").type("1999-01-01");
    cy.get("#profile-pic").should("exist");
    cy.get("#signup-button").click();
    cy.get("#signUpError").should("exist");
  });

  it("should render all student attributes and signup", () => {
    cy.visit("/signup");
    cy.get("#name").should("exist").type("Tajwar Rahman");
    cy.get("#email").should("exist").type(`${Date.now()}@gmail.com`);
    cy.get("#password").should("exist").type("randoPassword123");
    cy.get("#dob").should("exist").type("1999-01-01");
    cy.get("#school").should("exist").type("CCNY");
    cy.get("#profile-pic").should("exist");
    cy.get("#signup-button")
      .click()
      .then(() => {
        // cy.wait(10000);
        cy.url().should("include", "/student");
      });
  });

  it("should render all teacher attributes and fail signup", () => {
    cy.visit("/signup");
    cy.get("#signup-teacher-tab").should("exist").click();
    cy.get("#email").should("exist").type("rahmantajwar131@gmail.com");
    cy.get("#password").should("exist").type("randoPassword123");
    cy.get("#school").should("exist").type("CCNY");
    cy.get("#department").should("exist").type("Computer Science");
    cy.get("#profile-pic").should("exist");
    cy.get("#signup-button").click();
    cy.get("#signUpError").should("exist");
  });

  it("should render all teacher attributes and signup", () => {
    cy.visit("/signup");
    cy.get("#signup-teacher-tab").should("exist").click();
    cy.get("#email").should("exist").type(`${Date.now()}@gmail.com`);
    cy.get("#password").should("exist").type("randoPassword123");
    cy.get("#school").should("exist").type("CCNY");
    cy.get("#department").should("exist").type("Computer Science");
    cy.get("#profile-pic").should("exist");
    cy.get("#signup-button")
      .click()
      .then(() => {
        // cy.wait(10000);
        cy.url().should("include", "/teacher");
      });
  });
});
