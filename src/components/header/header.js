import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'

import Navigation from '../navigation/navigation'

const Container = styled.header`
  background: rebeccapurple;
  margin-bottom: 20px;
`

const Logo = styled.h1`
  margin: 0;
`

const linkStyle = css`
  color: white;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <Container>
    <div>
      <Logo>
        <Link to='/' css={linkStyle}>{siteTitle}</Link>
      </Logo>
      <Navigation navItems={['home', 'test']} />
    </div>
  </Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
