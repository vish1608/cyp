const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // projectId: 'hy2kdd',
  chromeWebSecurity: false,
  "video": true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
