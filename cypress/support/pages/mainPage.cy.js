class MainPage{

    getShoppingCart(){
        return cy.get("a[data-test='shopping-cart-link']")
    }
    getProductsTitle(){
        return cy.get("span[data-test='title']")
    }

    getNumberInCart(){
        return cy.get("span[data-test='shopping-cart-badge']")
    }
    getAddItemBtn(){
        return cy.get("#add-to-cart-sauce-labs-backpack")
    }
    getRemoveItemBtn(){
        return cy.get("#remove-sauce-labs-backpack")
    }
}
export default MainPage