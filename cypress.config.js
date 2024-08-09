const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", browserify.default(config));
  return config;
}

module.exports = defineConfig({
  video: true,
  projectId: "n8w5i7",
  defaultCommandTimeout: 3000,
  env: {
    url: "https://rahulshettyacademy.com",
  },
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reporterEnabled: "mochawesome",
    mochawesomeReporterOptions: {
      reportDir: "cypress/reports/mocha",
      quite: true,
      overwrite: true,
      html: true,
      json: false,
    },
  },

  retries: {
    runMode: 1,
  },
  e2e: {
    setupNodeEvents,
    specPattern: "cypress/integration/examples/BDD/*.feature",
  },
});
