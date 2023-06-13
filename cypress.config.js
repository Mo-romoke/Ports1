module.exports = {
  projectId: "e2k1ti",
  e2e: {
    watchForFileChanges: false,
    //"defaultCommandTimeout":6000
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.js",
  },
};
