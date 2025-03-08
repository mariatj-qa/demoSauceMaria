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
        cy.visit("https://www.saucedemo.com/")
    })

    it.only('Login Positive - from Commands File',()=>{
        cy.login()
    })


    it('Login Positive - Data from test_data',()=>{
        loginPage.getLoginLogo().should('be.visible')
        loginPage.getLoginUsername().should('be.visible').type(standard_user)
        loginPage.getLoginPassword().should('be.visible').type(password)
        loginPage.getLoginBtn().should('be.visible').click()
        cy.url().should('include','/inventory.html')
        mainPage.getShoppingCart().should('be.visible')
        mainPage.getProductsTitle().should('be.visible').should('contain','Products')
    })


    const invalidPassword=
    [{password:"worng",},{ password:"very wrong"}]
    invalidPassword.forEach((passwords)=>{
        it('Login with wrong password',()=>{
            loginPage.getLoginLogo().should('be.visible')
            loginPage.getLoginUsername().should('be.visible').type("standard_user")
            loginPage.getLoginPassword().should('be.visible').type(passwords.password)
            loginPage.getLoginBtn().should('be.visible').click()
            loginPage.getErrorMessage().should('be.visible').and('exist')
        })
    })

})