describe('Authentication and Navigation', () => {
  it('should navigate to the signup page, login, and redirect to the dashboard', () => {
    cy.log('Visiting the base URL');
    cy.visit('http://localhost:3000/');

    cy.log('Clicking on the authentication button');
    cy.get('#auth-button').click();

    cy.log('Clicking on the toggle to switch to the sign in form');
    cy.get('#auth-toggle').click();

    cy.log('Entering email and password');
    cy.get('#email').type('nafisrizwank@gmail.com');
    cy.get('#password').type('Lms1234!');

    cy.log('Clicking on the submit button');
    cy.get('#auth-submit').click();

    cy.log('Checking if dashboard is visible');
    cy.get('#dashboard', { timeout: 10000 }).should('be.visible');

    cy.log('Checking if dashboard exists');
    cy.get('#dashboard').should('exist');

    cy.log('Clicking on the logout button');
    cy.get('#logout-button').click();

    // ended test
  });
});
