const { defineConfig } = require("cypress");

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    e2e: {
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
        },
        env:{
            baseUrl: 'https://www.saucedemo.com/',
            username: 'standard_user',
            password: 'secret_sauce'
        }
    },
});
