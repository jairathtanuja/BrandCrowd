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
    // Click on the category dropdown
    
    cy.get('div[class="data-v-17c8fea0"]').contains('div#id', category).click();
    
    // Select the specified category from the dropdown
// contains('.category-option', category).click();
    
    // Wait for the page to update with the filtered results
    cy.wait(2000); // Adjust the wait time as needed
  });
  
  // Example usage of the custom command
//   describe('Filtering by Category', () => {
//     it('should filter by a specific category', () => {
//       // Visit the webpage
//       cy.visit('https://www.brandcrowd.com/maker/mydesigns/logodrafts/b5456bd9-12ec-47c5-8b0e-e5f5984d25b0/templatetypes?searchTerm=Instagram%20story');
      
//       // Apply the category filter
//       cy.filterByCategory('Social Media');
      
//       // Assert that the page displays the filtered results
//       cy.get('.filtered-results').should('be.visible');
//     });
//   });
  