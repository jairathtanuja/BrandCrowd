describe('Search Template', () => {
  beforeEach(() => {
    cy.visit('https://www.brandcrowd.com/maker/mydesigns/logodrafts/b5456bd9-12ec-47c5-8b0e-e5f5984d25b0/templatetypes?searchTerm=Tech%20Challenge');


  })
    it('should search template without filter', () => {
      cy.get('input#searchTerm').should('be.visible').clear().type('Instagram Post');
      cy.get('span').contains('search').click();
    });

    it('should search template with filter', () => {
     
    });
  });