import LoginPage from "/Users/mashaqa/Desktop/Frameworks/demoMariaTJ/cypress/support/pages/loginPage.cy.js"
import MainPage from "/Users/mashaqa/Desktop/Frameworks/demoMariaTJ/cypress/support/pages/mainPage.cy.js"
describe('Login Functionality',{tags:['@demo']},()=>{
    const loginPage = new LoginPage()
    const mainPage = new MainPage()
    let standard_user = ''
    let password = ''
    before(()=>{
        cy.fixture("test_data.json").then((data)=>{
            const conf = data.demo
            standard_user = conf.login.users.standard_user
            password = conf.login.password
        })
    })
    beforeEach(()=>{
        cy.visit(Cypress.env('baseUrl'))
    })

    it.only('Add Item to Cart',()=>{
        cy.login()
        mainPage.getShoppingCart().should('be.visible')
        mainPage.getAddItemBtn().should('be.visible').click()
        mainPage.getNumberInCart().should('be.visible').invoke('text').then((value)=>{
            cy.log("value - "+ value)
            expect(value).eq('1')
        })
        mainPage.getRemoveItemBtn().should('be.visible').click()
        mainPage.getNumberInCart().should('not.be.exist')
    })


})