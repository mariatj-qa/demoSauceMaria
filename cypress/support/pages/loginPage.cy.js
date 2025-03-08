class LoginPage{

    getLoginLogo(){
        return cy.get("div[class='login_logo']")
    }

    getLoginUsername(){
        return cy.get("input[data-test='username']")
    }
    getLoginPassword(){
        return cy.get("input[data-test='password']")
    }
    getLoginBtn(){
        return cy.get("input[data-test='login-button']")
    }
    getErrorMessage(){
        return cy.get("h3[data-test='error']")
    }

}
export default LoginPage