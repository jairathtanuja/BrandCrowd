This `README.md` file provides instructions for installing and using the Cypress project, explains the folder structure

Title - This project is used to search templates from Tech Challenge page

1. To install this project, you'll need [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your computer.

2. Clone this repository on your local:
gh repo clone jairathtanuja/BrandCrowd

3. Navigate to the project directory 
cd BrandCrowd

4. Install npm dependencies
npm install

5. To open cypress runner and execute the spec file 
npx cypress open

6. Select E2E folder and click on find_template.spec.cy.js file

7. To run test in headless mode using Cypress CLI
npx cypress run

Folder structure
- cypress/e2e/: Contains test files (spec files)
- cypress/support: Contains methods/functions/custom commands
- cypress/fixtures: Contains test data file 
- package.json: Contains all the metadata & define scripts path 





