const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl :'https://magento.softwaretestingboard.com/customer/account/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false,
    defaultCommandTimeout: 5000,
    viewportHeight: 680
  },
});
