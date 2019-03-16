import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import smoothscroll from 'smoothscroll-polyfill'

import Nav from './navigation.style'

const parseLinks = data =>
  data.allFile.edges.reduce((acc, { node: { name } }) => {
    return name === 'hero' || name.includes('style') || name.includes('spec')
      ? acc
      : [...acc, name]
  }, [])

const handleClick = (e, name) => {
  e.preventDefault()
  const target = document.getElementById(name)

  if (target) scrollTo(target)
}

const scrollTo = target => {
  const targetPos = target.getBoundingClientRect().top

  window.scrollTo({ top: targetPos, behavior: 'smooth' })
}

export const PureNavigation = ({ data }) => {
  useEffect(() => {
    smoothscroll.polyfill()
  }, [])

  return (
    <Nav>
      <ul>
        {parseLinks(data).map(name => (
          <li key={name}>
            <a href={`#${name}`} onClick={e => handleClick(e, name)}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    </Nav>
  )
}

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
