import React from 'react'
import { render, fireEvent } from 'react-testing-library'
import renderer from 'react-test-renderer'

import { PureWork as Work } from './work'

describe('<Work/>', () => {
  const data = {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            html: `test1`,
            frontmatter: {
              title: `arcadia`,
            },
          },
        },
        {
          node: {
            html: `test2`,
            frontmatter: {
              title: `batman`,
            },
          },
        },
      ],
    },
  }

  describe('@render', () => {
    it('renders correctly', () => {
      const tree = renderer.create(<Work data={data} />).toJSON()

      expect(tree).toMatchSnapshot()
    })

    it('renders buttons by incoming data', () => {
      const { queryByTestId } = render(<Work data={data} />)

      data.allMarkdownRemark.edges.map(({ node: { frontmatter: { title } } }) =>
        expect(queryByTestId(`test-${title}`)).toBeTruthy()
      )
    })

    it('renders the default node and not any others on initial render', () => {
      const { queryByTestId } = render(<Work data={data} />)

      expect(queryByTestId('test-description')).toHaveTextContent('test1')
      expect(queryByTestId('test-description')).not.toHaveTextContent('test2')
    })
  })

  describe('@events', () => {
    it('changes the description on work selection', () => {
      const { getByTestId, queryByTestId } = render(<Work data={data} />)

      fireEvent.click(getByTestId('test-batman'))

      expect(queryByTestId('test-description')).toHaveTextContent('test2')
    })
  })
})
