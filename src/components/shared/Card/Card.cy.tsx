import { Card } from './Card'

const title = "Card Title"
const description = "Card description just"
const id = "1"

it('should render card', () => {
    cy.render(<Card title={title} description={description} id={id} />)

    cy.findByRole("heading", { name: title, level: 2 }).should("exist")
    cy.findByText(description).should("exist")
    cy.findByRole("link", { name: "Show Task Detail" }).should("exist")
})