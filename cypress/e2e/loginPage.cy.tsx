describe('Login Page', () => {
  // it('should render all student attributes and fail login', () => {
  //   cy.visit('/login');
  //   cy.get('#name').should('exist').type('Rahman');
  //   cy.get('#email').should('exist').type('rahmantajwar131@gmail.com');
  //   cy.get('#password').should('exist').type('randoPassword123');
  //   cy.get('#school').should('exist').type('CCNY');
  //   cy.get('#dob').should('exist').type('1999-01-01');
  //   cy.get('#school').should('exist').type('CCNY');
  //   cy.get('#loginButton').click();
  // });

  // it('should render all student attributes and login', () => {
  //   cy.visit('/login');
  //   cy.get('#name').should('exist').type('Rahman');
  //   cy.get('#email').should('exist').type(`${Date.now()}@gmail.com`);
  //   cy.get('#password').should('exist').type('randoPassword123');
  //   cy.get('#school').should('exist').type('CCNY');
  //   cy.get('#dob').should('exist').type('1999-01-01');
  //   cy.get('#school').should('exist').type('CCNY');
  //   cy.get('#loginButton')
  //     .click()
  //     .then(() => {
  //       cy.wait(1000);
  //       cy.url().should('include', '/student');
  //     });
  // });

  // it('should render all teacher attributes and fail login', () => {
  //   cy.visit('/login');
  //   cy.get('#login-teacher-tab').should('exist').click();
  //   cy.get('#email').should('exist').type('rahmantajwar131@gmail.com');
  //   cy.get('#password').should('exist').type('randoPassword123');
  //   cy.get('#school').should('exist').type('CCNY');
  //   cy.get('#department').should('exist').type('Computer Science');
  //   cy.get('#loginButton').click();
  //   cy.get('#signUpError').should('exist');
  // });

  // it('should render all teacher attributes and login', () => {
  //   cy.visit('/login');
  //   cy.get('#login-teacher-tab').should('exist').click();
  //   cy.get('#email').should('exist').type(`${Date.now()}@gmail.com`);
  //   cy.get('#password').should('exist').type('randoPassword123');
  //   cy.get('#school').should('exist').type('CCNY');
  //   cy.get('#department').should('exist').type('Computer Science');
  //   cy.get('#loginButton')
  //     .click()
  //     .then(() => {
  //       cy.wait(1000);
  //       cy.url().should('include', '/teacher');
  //     });
  // });
});
