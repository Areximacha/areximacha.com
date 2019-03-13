import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import * as styles from './header.style'
import Navigation from '../navigation/navigation'

const Header = ({ siteTitle }) => (
  <styles.Container>
    <styles.Column>
      <styles.Logo>
        <Link to='/' css={styles.linkStyle}>
          {siteTitle}
        </Link>
      </styles.Logo>
    </styles.Column>
    <styles.Column css={styles.linkStyle}>
      <Navigation />
    </styles.Column>
  </styles.Container>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
