const expected_base_meta_tags = [
  {
    selector: 'meta[charset]',
    charset: 'UTF-8',
  }
]
describe('Meta Tags', () => {
  before(() => {
    cy.visit('/');

  })
  // expected_base_meta_tags.forEach((attributes) => {
  //   const all_attributes = Object.keys(attributes).map(i => `[${i}]`).join('')
  //   it(`meta${all_attributes}`, () => {
  //     cy.get(`meta${all_attributes}`).should('exist');
  //   })
  // })

  it('meta[charset]', () => {
    cy.get('head meta[charset]')
      .should('exist')
      .should('have.length', 1)
      .should('have.attr', 'charset', 'UTF-8')
  })

  it('meta[viewport]', () => {
    cy.get('head meta[name="viewport"]')
      .should('exist')
      .should('have.length', 1)
      .should('have.attr', 'content', 'width=device-width, initial-scale=1.0')
  })

  it('meta[description]', () => {
    cy.get('head meta[name="description"]')
      .should('exist')
      .should('have.length', 1)
      .should('have.attr', 'content')
      .should('have.length.at.least', 10)
  })

})
