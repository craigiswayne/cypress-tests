const properties_to_look_for = [
  'image',
  'image:width',
  'image:height',
  'image:alt',
  'url',
  'locale'
]
describe('Meta Tags: OpenGraph', () => {
  before(() => {
    cy.visit('/');
  })

  properties_to_look_for.forEach(property => {
    it(`meta[property="og:${property}"]`, () => {
      cy.get(`head meta[property="og:${property}"]`)
        .should('exist')
        .should('have.length', 1)
        .should('have.attr', 'content')
    })
  })
})
