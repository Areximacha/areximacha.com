import React, { useState, useEffect } from 'react'
import { css } from '@emotion/core'

import * as styles from './hero.style'

const Hero = () => {
  const [scrollPos, setScrollPos] = useState(0)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    setScrollPos(window.scrollY / 3)
  }

  const backgroundPos = css`
    transform: translate3d(0, -${scrollPos}px, 0);
  `

  return (
    <styles.HeroSection id='hero'>
      <styles.HeroBackground css={backgroundPos} />
      <styles.Neon>
        <h4>JAY</h4>
        <h4>TANG</h4>
      </styles.Neon>
    </styles.HeroSection>
  )
}

export default Hero
