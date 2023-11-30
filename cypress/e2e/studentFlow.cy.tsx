describe("Student Flow", () => {
  it("should render student course list", () => {
    // TODO: fix login
    cy.visit("/student");
    cy.get("#sidebar").should("exist");
    cy.get("#sidebar-title").should("exist");
    cy.get("#dashboard").should("exist").click();
    cy.get("#all-courses").should("exist").click();

    cy.get("#course-banner").should("exist");
    cy.get("#course-name").should("exist");
    cy.get("#course-teacher").should("exist");

    cy.get("#course-list-card-0").should("exist").click();

    // go thru all the components in posts
    cy.get("#posts-tab").should("exist").click();
    cy.get("#class-code-card").should("exist");
    cy.get("#copy-button").should("exist");
    cy.get("#create-announcement-card").should("exist").click();
    cy.get("#create-announcement-form").should("exist");
    cy.get("#create-announcement-card").should("not.exist");
    cy.get("#announcement-body").should("exist").type("this is a sample body");
    cy.get("#post-button").should("exist").click();
    cy.get("#create-announcement-form").should("not.exist");

    // go thru all the components in assignments
    cy.get("#assignments-tab").should("exist").click();

    // go thru all the components in students
    cy.get("#students-tab").should("exist").click();

    // go thru all the components in grades
    cy.get("#grades-tab").should("exist").click();
  });
});
