import { useState } from 'react';

import type { ListboxItems } from './Listbox';
import { ListBox } from './Listbox';

const people: ListboxItems[] = [
  {
    id: '1',
    value: 'Wade Cooper',
    displayValue: 'Wade Cooper',
    unavailable: false,
  },
  {
    id: '2',
    value: 'Arlene Mccoy',
    displayValue: 'Arlene Mccoy',
    unavailable: false,
  },
  {
    id: '3',
    value: 'Devon Webb',
    displayValue: 'Devon Webb',
    unavailable: false,
  },
  {
    id: '4',
    value: 'Tom Cook',
    displayValue: 'Tom Cook',
    unavailable: true,
  },
  {
    id: '5',
    value: 'Tanya Fox',
    displayValue: 'Tanya Fox',
    unavailable: false,
  },
  {
    id: '6',
    value: 'Hellen Schmidt',
    displayValue: 'Hellen Schmidt',
    Icon: null,
    unavailable: false,
  },
];

const Listbox = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0].value);

  return (
    <ListBox
      selected={selectedPerson}
      setSelected={setSelectedPerson}
      label="label"
      items={people}
    />
  );
};

it('Should possible to disable listBox button', () => {
  const DisabledListbox = () => {
    const [selectedPerson, setSelectedPerson] = useState(people[0].value);

    return (
      <ListBox
        selected={selectedPerson}
        setSelected={setSelectedPerson}
        disabled
        label="label"
        items={people}
      />
    );
  };
  cy.render(<DisabledListbox />);

  cy.findByText('Wade Cooper');
  cy.findByRole('button')
    .should('exist')
    .click({ force: true }) // forced because cypress prevents clicking on disabled element
    .should('be.disabled');
  cy.findByRole('listbox').should('not.exist');
});

it('Should possible to disable listBox option', () => {
  cy.render(<Listbox />);

  cy.findByText('Wade Cooper').should('exist').click();

  people
    .filter((person) => person.unavailable)
    .forEach((item) => {
      cy.findByRole('listbox')
        .should('exist')
        .within(() => {
          cy.findByRole('option', { name: item.value }).should(
            'have.attr',
            'aria-disabled',
          );
        });
    });
});

it('Should possible to select element', () => {
  cy.render(<Listbox />);

  cy.findByText('Wade Cooper').should('exist').click();
  cy.findByRole('option', { name: 'Arlene Mccoy' }).click();
  cy.findByRole('button').should('have.attr', 'aria-expanded', 'false');
  cy.findByText('Arlene Mccoy').should('exist');
});

it('Should possible to render listbox button and options', () => {
  cy.render(<Listbox />);

  cy.findByText('Wade Cooper').should('exist').click();

  people.forEach((item) => {
    cy.findByRole('listbox')
      .should('exist')
      .within(() => {
        cy.findByRole('option', { name: item.value }).should('be.exist');
      });
  });
});
