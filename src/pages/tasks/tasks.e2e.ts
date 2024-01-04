beforeEach(() => {
  //   cy.login()
});

it('should be reachable through navigation', () => {
  cy.intercept(
    {
      method: 'GET',
      url: 'http://localhost:3000/api/tasks*',
    },
    (req) => {
      console.log(req);
    },
  );
  cy.visit('/');
});
