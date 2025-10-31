import {defineConfig} from 'cypress';

/**
 * @see https://docs.cypress.io/guides/references/configuration
 */
export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    baseUrl: 'https://craigiswayne.com/',
    trashAssetsBeforeRuns: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
