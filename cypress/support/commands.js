// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// custom command to filter by category
Cypress.Commands.add('filterByCategory', (category) => {

  cy.get('div[class="tw-container tw-px-0 tw-mx-auto"]').each(($element) => {
    cy.wrap($element).within(() => {
 
    cy.get('label').each(($element) => {
    // Use cy.wrap() to access the jQuery object and perform assertions
    cy.wrap($element).should('have.attr', 'for').then((forAttr) => {
      if (forAttr === category) {
        // Perform actions if the attribute value matches the category
        // For example, you can log a message or interact with the element
        cy.wait(3000);
        cy.wrap($element).click({force:true});
      }
    });
  });
});
  });

  

  
  
  });
  