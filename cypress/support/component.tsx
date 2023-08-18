import { mount } from 'cypress/react18'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import './commands'
import { store } from '../../src/app/store'

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Mount a React component in a blank document; register it as an alias
       * To access: use an alias or original component reference
       * @function   mount
       * @param      {React.ReactElement}  jsx - component to mount
       * @param      {MountOptions}  [options] - options, like alias, styles
       * @see https://github.com/bahmutov/@cypress/react
       * @see https://glebbahmutov.com/blog/my-vision-for-component-tests/
       * @example
       ```
       import Hello from './hello.jsx'
       import { mount } from '@cypress/react'

       it('works', () => {
         cy.render(<Hello onClick={cy.stub()} />)
         cy.contains('Hello').click()
       })
       ```
       * */
      render: typeof mount

      // TODO: Remove these after migrating all component tests to use GraphQL API
      enableInterceptor(name: string): Chainable<null>
    }
  }
}

Cypress.Commands.add('render', (jsx, options) =>
  mount(
    <Provider store={store}>
      <BrowserRouter>{jsx}</BrowserRouter>
    </Provider>,
    options,
  ),
)
