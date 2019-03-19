import React from 'react'
import { render } from 'react-testing-library'

import { PureNavigation as Navigation } from './navigation'

// const scrollToSpy = jest.fn()

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
  //   beforeEach(() => {
  //     Object.defineProperty(global.window, 'scrollTo', { value: scrollToSpy })
  //     scrollToSpy.mockClear()
  //   })

  //   it('nav item calls scrollTo method on click', () => {
  //     const { getByText } = render(<Navigation data={data} />)

  //     fireEvent.click(getByText('batman'))

  //     expect(scrollToSpy).toHaveBeenCalledTimes(1)
  //   })
  // })
})
