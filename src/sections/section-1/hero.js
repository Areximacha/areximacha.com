import React, { useState, useEffect, useRef } from 'react'
import { css } from '@emotion/core'

import * as styles from './hero.style'
import bgImg from '../../assets/images/hero-bg.jpg'

const Hero = () => {
  const [scrollPos, setScrollPos] = useState(0)
  const heroBox = useRef(null)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    if (heroBox.current.getBoundingClientRect().bottom > 0)
      setScrollPos(window.scrollY / 3)
  }

  const backgroundImageStyle = css`
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 150%;
    opacity: 0.4;
    object-fit: cover;
    object-position: center;
    transform: translate3d(0, -${scrollPos}px, 0);
  `

  return (
    <styles.HeroSection id='hero' ref={heroBox}>
      <img src={bgImg} css={backgroundImageStyle} alt='' />
      <styles.Neon>
        <h4>JAY</h4>
        <h4>TANG</h4>
      </styles.Neon>
    </styles.HeroSection>
  )
}

export default Hero
