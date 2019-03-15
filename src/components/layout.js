import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import styled from '@emotion/styled'
import { Global } from '@emotion/core'

import Header from './header/header'
import Footer from './footer/footer'

import reset from '../emotion/reset.style'
import base from '../emotion/base.style'

const Container = styled.div`
  position: relative;
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
      <>
        <Global styles={reset} />
        <Global styles={base} />
        <Container>
          <Header siteTitle={data.site.siteMetadata.title} />
          <main>{children}</main>
          <Footer />
        </Container>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
