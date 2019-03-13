import React from 'react'
import { render } from 'react-testing-library'
// import renderer from 'react-test-renderer'

import { PureNavigation as Navigation } from './navigation'

describe('<Navigation/>', () => {
  const data = {
    allFile: {
      edges: [
        {
          node: {
            name: 'batman',
          },
        },
        {
          node: {
            name: 'superman',
          },
        },
      ],
    },
  }

  describe('@render', () => {
    it('renders the supplied navigation items', () => {
      const { getByText } = render(<Navigation data={data} />)

      data.allFile.edges.map(({ node: { name } }) =>
        expect(getByText(name)).toHaveTextContent(name)
      )
    })

    it('does not render hero item', () => {
      const heroData = {
        allFile: {
          edges: [
            {
              node: {
                name: 'hero',
              },
            },
          ],
        },
      }
      const { queryByText } = render(<Navigation data={heroData} />)

      expect(queryByText('hero')).toBeNull()
    })
  })

  // describe('@events', () => {
  //   it('nav item calls scrollTo method on click', () => {
  //     const { getByText } = render(<Navigation {...initProps} />)

  //     fireEvent.click(getByText('home'))
  //   })
  // })
})
