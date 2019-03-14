import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'

import * as styles from './navigation.style'

const parseLinks = data =>
  data.allFile.edges.reduce((acc, { node: { name } }) => {
    return name === 'hero' || name.includes('style') || name.includes('spec')
      ? acc
      : [...acc, name]
  }, [])

export const PureNavigation = ({ data }) => (
  <styles.Nav>
    <ul>
      {parseLinks(data).map(name => (
        <li key={name}>
          <a href={`#${name}`}>{name}</a>
        </li>
      ))}
    </ul>
  </styles.Nav>
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
