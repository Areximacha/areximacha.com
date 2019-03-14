import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import * as styles from './header.style'
import Navigation from '../navigation/navigation'

const Header = ({ siteTitle }) => (
  <styles.HeaderContainer>
    <styles.Column>
      <styles.Logo>
        <Link to='/'>{siteTitle}</Link>
      </styles.Logo>
    </styles.Column>
    <styles.Column>
      <Navigation />
    </styles.Column>
  </styles.HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
