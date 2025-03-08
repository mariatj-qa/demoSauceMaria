const { defineConfig } = require("cypress");

module.exports = defineConfig({
    reporter: 'mochawesome',
    e2e: {
        setupNodeEvents(on, config) {
        },
        env:{
            baseUrl: 'https://www.saucedemo.com/',
            username: 'standard_user',
            password: 'secret_sauce'
        }
    },
});
