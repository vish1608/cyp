const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7z2r4f',
  chromeWebSecurity: false,
  integrationFolder: 'cypress/e2e',
  experimentalShadowDomSupport: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
