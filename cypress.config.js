const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'hy2kdd',
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
