import React from 'react'
// import { render } from 'react-testing-library'
import renderer from 'react-test-renderer'

import Hero from './hero'

describe('<Hero/>', () => {
  describe('@render', () => {
    it('renders correctly', () => {
      const tree = renderer.create(<Hero />).toJSON()

      expect(tree).toMatchSnapshot()
    })
  })

  // describe('@events', () => {
  //   it('updates background translation on scroll', () => {
  //     const { getByTestId } = render(<Hero />)
  //   })
  // })
})
