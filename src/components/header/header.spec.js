import React from 'react'
import { render } from 'react-testing-library'

import Header from './header'

jest.mock('../navigation/navigation', () => () => <navigation />)

describe('<Header/>', () => {
  const initProps = {
    siteTitle: 'Test.com',
  }

  describe('@render', () => {
    it('renders the correct title', () => {
      const { getByText } = render(<Header {...initProps} />)

      expect(getByText('Test.com')).toHaveTextContent(initProps.siteTitle)
    })
  })
})
