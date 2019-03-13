import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from '@emotion/styled'

import Header from './header/header'
import './layout.css'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Container>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          <main>{children}</main>
          <footer>
            {`© ${new Date().getFullYear()}, Built with `}
            <a href='https://www.gatsbyjs.org'>Gatsby</a>
          </footer>
        </div>
      </Container>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
