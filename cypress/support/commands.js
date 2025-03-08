import LoginPage from "/Users/mashaqa/Desktop/Frameworks/demoMariaTJ/cypress/support/pages/loginPage.cy.js"
import MainPage from "/Users/mashaqa/Desktop/Frameworks/demoMariaTJ/cypress/support/pages/mainPage.cy.js"


Cypress.Commands.add('login', function (){
    const loginPage = new LoginPage()
    const mainPage = new MainPage()
    loginPage.getLoginLogo().should('be.visible')
    loginPage.getLoginUsername().should('be.visible').type(Cypress.env('username'))
    loginPage.getLoginPassword().should('be.visible').type(Cypress.env('password'))
    loginPage.getLoginBtn().should('be.visible').click()
    cy.url().should('include','/inventory.html')
    mainPage.getShoppingCart().should('be.visible')
    mainPage.getProductsTitle().should('be.visible').should('contain','Products')
})