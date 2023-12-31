import { Link } from 'react-router-dom';

import { Button } from './Button';

it('should render button', () => {
  cy.render(<Button>Button</Button>);
  cy.findByRole('button', { name: 'Button' }).should('exist');
});

it('should clicked on button', () => {
  const clickHandler = cy.stub().as('clickHandler');
  cy.render(<Button onClick={clickHandler}>Button</Button>);

  cy.findByRole('button', { name: 'Button' }).click();
  cy.get('@clickHandler').should('have.been.called');
});

it('should disable button', () => {
  const clickHandler = cy.stub().as('clickHandler');
  cy.render(
    <Button disabled onClick={clickHandler}>
      Button
    </Button>,
  );
  cy.findByRole('button', { name: 'Button' }).should('be.disabled');
  cy.get('@clickHandler').should('not.be.called');
});

it('should render link', () => {
  cy.render(
    <Button asChild>
      <Link to="/test">Link</Link>
    </Button>,
  );

  cy.findByRole('link', { name: 'Link' }).should('have.attr', 'href', '/test');
  cy.findByRole('button').should('not.exist');
});
