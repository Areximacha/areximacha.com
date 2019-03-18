import React from 'react'
import renderer from 'react-test-renderer'

import Profile from './profile'

describe('<Profile/>', () => {
  describe('@render', () => {
    it('renders correctly', () => {
      const tree = renderer.create(<Profile />).toJSON()

      expect(tree).toMatchSnapshot()
    })
  })
})
