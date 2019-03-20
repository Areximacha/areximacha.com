import styled from '@emotion/styled'
import * as colours from '../../emotion/colours.style'
import { fontbeon, flicker, mediaQuery } from '../../emotion/utils.style'

import bgImg from '../../assets/images/hero-bg.jpg'

export const HeroSection = styled.section`
  position: relative;
  padding-top: 80px;
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 200px #000;
  overflow: hidden;
  background-color: ${colours.colourBackgroundDelta};

  ${mediaQuery.tablet} {
    min-height: 50vh;
  }
`

export const HeroBackground = styled.div`
  position: absolute;
  background-image: url(${bgImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 150%;
  top: 0;
  left: 0;
  opacity: 0.4;

  ${mediaQuery.tablet} {
    transform: translate3d(0, 0, 0);
  }
`

export const Neon = styled.div`
  border: 2px solid #fff;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 0 2px #fff, 0 0 5px #fff, 0 0 10px #fff,
    0 0 15px ${colours.colourPrimary}, 0 0 20px ${colours.colourPrimary},
    0 0 40px ${colours.colourPrimary}, inset 0 0 2px #fff, inset 0 0 5px #fff,
    inset 0 0 10px #fff, inset 0 0 15px ${colours.colourPrimary},
    inset 0 0 20px ${colours.colourPrimary},
    inset 0 0 40px ${colours.colourPrimary};
  animation: ${flicker} 5s linear infinite alternate;

  h4 {
    font-size: 50px;
    margin: 20px;
    color: #fff;
    padding: 7px 0;
    line-height: 16px;
    font-family: ${fontbeon};
    text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff,
      0 0 20px ${colours.colourPrimary}, 0 0 35px ${colours.colourPrimary},
      0 0 40px ${colours.colourPrimary}, 0 0 50px ${colours.colourPrimary},
      0 0 75px ${colours.colourPrimary};
  }
`
