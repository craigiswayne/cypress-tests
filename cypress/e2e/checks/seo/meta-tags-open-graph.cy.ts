
describe('Meta Tags: OpenGraph', () => {
  const property_prefix = 'og'
  const properties_to_look_for = [
    'image',
    'image:width',
    'image:height',
    'image:alt',
    'url',
    'locale'
  ]

  before(() => {
    cy.visit('/');
  })

  properties_to_look_for.forEach(property => {
    it(`meta[property="${property_prefix}:${property}"]`, () => {
      cy.get(`head meta[property="${property_prefix}:${property}"]`)
        .should('exist')
        .should('have.length', 1)
        .should('have.attr', 'content')
    })
  })

  it('meta[property="og:title"]', () => {
    cy.get('head meta[property="og:title"]')
      .should('exist')
      .should('have.length', 1)
      .should('have.attr', 'content')
    // 30-60 characters, with a maximum of 90
  })

  it('meta[property="og:image"]', () => {
    cy.get('head meta[property="og:image"]')
      .should('exist')
      .should('have.length', 1)
      .should('have.attr', 'content')
    //  The length of your description (185 characters) is great

    // Image
    // og:image can't be found at the defined URL
    // The ratio of your og:image isn't optimal
    // Image size is optimal (<8mb)

    // https://socialsharepreview.com/?url=https://craigiswayne.com/
  })

})
