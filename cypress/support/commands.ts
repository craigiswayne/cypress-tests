const loginToOkta = (username: string, password: string): void => {
  Cypress.log({
    displayName: 'OKTA LOGIN',
    message: [`🔐 Authenticating | ${username}`],
    autoEnd: false,
  });

  cy.visit('http://localhost:4200');
  cy.origin(
    Cypress.env('okta_domain') as string,
    { args: { username, password } },
    (args: { username: string; password: string }) => {
      cy.get('input[name="username"]').type(args.username);
      cy.get('input[name="password"]').type(args.password);
      cy.get('[type="submit"]').click();
    }
  );

  cy.get('p').contains('Coming soon...');
};

Cypress.Commands.add('loginByOkta', (username: string, password: string) => {
  loginToOkta(username, password);
});

declare global {
  namespace Cypress {
    interface Chainable {
      loginByOkta(username: string, password: string): Chainable<void>;
    }
  }
}

export {};
