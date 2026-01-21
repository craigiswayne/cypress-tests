describe('Meta Tags: Twitter', () => {

  before(() => {
    cy.visit('/');
  })

  it('meta[name="twitter:title"]', () => {
    cy.get('head meta[name="twitter:title"]')
      .should('exist')
      .should('have.length', 1)
      .should('have.attr', 'content')
    // TODO: test length of content
  })

  it('meta[name="twitter:description"]', () => {
    cy.get('head meta[name="twitter:description"]')
      .should('exist')
      .should('have.length', 1)
      .should('have.attr', 'content')
    // TODO: test length of content
  })

  it('meta[name="twitter:site"]', () => {
    cy.get('head meta[name="twitter:site"]')
      .should('exist')
      .should('have.length', 1)
      .should('have.attr', 'content')
    // TODO: if there is a twitter profile, the content should be the handle
  })

  it('meta[name="twitter:card"]', () => {
    cy.get('head meta[name="twitter:card"]')
      .should('exist')
      .should('have.length', 1)
      .should('have.attr', 'content', 'summary_large_image')
    // or: 'summary', 'app', 'player'
  })

  it('meta[name="twitter:image"]', () => {
    cy.get('head meta[name="twitter:image"]')
      .should('exist')
      .should('have.length', 1)
      .should('have.attr', 'content')
    // TODO: content should be a url
    // TODO: test that the image url exists
    // TODO: test that the mime type is an image
  })

  it('meta[name="twitter:image:width"]', () => {
    cy.get('head meta[name="twitter:image:width"]')
      .should('exist')
      .should('have.length', 1)
      .should('have.attr', 'content')
    // TODO: content should be a valid number
    // TODO: content value should match the width of the image
    // e.g. 1200
  })

  it('meta[name="twitter:image:height"]', () => {
    cy.get('head meta[name="twitter:image:height"]')
      .should('exist')
      .should('have.length', 1)
      .should('have.attr', 'content')
    // TODO: content should be a valid number
    // TODO: content value should match the height of the image
    // e.g. 630
  })

  it('meta[name="twitter:creator"]', () => {
    cy.get('head meta[name="twitter:creator"]')
      .should('exist')
      .should('have.length', 1)
      .should('have.attr', 'content')
    // TODO: content should be a valid number
    // TODO: content value should match the height of the image
    // e.g. 630
  })
})
