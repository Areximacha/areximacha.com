import React from 'react'

import FooterContainer from './footer.style'

const Footer = () => (
  <FooterContainer>
    © 2019 Jay Tang | Powered by
    {` `}
    <a
      href='https://www.gatsbyjs.org/'
      target='_blank'
      rel=' noreferrer noopener'
    >
      GatsbyJS
    </a>
  </FooterContainer>
)

export default Footer
