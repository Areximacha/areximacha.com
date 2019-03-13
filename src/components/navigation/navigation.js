import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

const parseLinks = data =>
  data.allFile.edges.reduce((acc, { node: { name } }) => {
    return name === 'hero' ? acc : [...acc, name]
  }, [])

export const PureNavigation = ({ data }) => (
  <nav>
    <ul>
      {parseLinks(data).map(name => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  </nav>
)

PureNavigation.propTypes = {
  data: PropTypes.object.isRequired,
}

const Navigation = () => (
  <StaticQuery query={query} render={data => <PureNavigation data={data} />} />
)

const query = graphql`
  query {
    allFile(
      filter: { sourceInstanceName: { eq: "sections" } }
      sort: { fields: relativeDirectory }
    ) {
      edges {
        node {
          name
        }
      }
    }
  }
`

export default Navigation
