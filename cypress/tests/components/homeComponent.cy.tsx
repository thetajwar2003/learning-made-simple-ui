import React from "react";
import Home from "../../../src/app/page";

describe("<Home />", () => {
  it("renders components", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Home />);
    cy.get("#login-button").should("exist");
    cy.get("#header-login").should("exist");
    cy.get("#login-header").should("exist");
    cy.get("#logo").should("exist");
  });
});
