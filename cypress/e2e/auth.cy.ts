describe('Authentication and Navigation', () => {
  it('should navigate to the signup page, login, and redirect to the dashboard', () => {
    // Visit the base URL (you should configure this in your cypress.json file)
    cy.visit('http://localhost:3000/');

    // Click on the authentication button
    cy.get('#auth-button').click();

    // Click on the toggle to switch to the sign in form
    cy.get('#auth-toggle').click();

    // Enter email and password
    cy.get('#email').type('nafisrizwank@gmail.com');
    cy.get('#password').type('Lms1234!');

    // Click on the submit button
    cy.get('#auth-submit').click();

    // Check if an element with id 'dashboard' exists
    cy.get('#dashboard').should('exist');

    // Click on the logout button
    cy.get('#logout-button').click();
  });
});
