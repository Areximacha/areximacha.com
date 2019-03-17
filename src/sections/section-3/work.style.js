import styled from '@emotion/styled'
import * as colours from '../../emotion/colours.style'

import dulux from '../../assets/images/logos/dulux.png'
import pandora from '../../assets/images/logos/pandora.png'
import sainsburys from '../../assets/images/logos/sainsburys.png'
import seat from '../../assets/images/logos/seat.png'
import chivas from '../../assets/images/logos/chivas.png'

import duluxBg from '../../assets/images/work-dulux.jpg'
import pandoraBg from '../../assets/images/work-pandora.jpg'
import sainsburysBg from '../../assets/images/work-sainsburys.jpg'
import seatBg from '../../assets/images/work-seat.jpg'
import chivasBg from '../../assets/images/work-venture.jpg'

export const WorkSection = styled.section`
  position: relative;
  display: flex;
  min-height: 90vh;
  justify-content: center;
  box-shadow: inset 0 0 200px #000;
  background-color: ${colours.colourBackgroundDelta};
`

export const WorkBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  background-attachment: fixed;
  transition: opacity 0.4s ease-in-out;
  opacity: 0.4;

  &.dulux {
    background-image: url(${duluxBg});
  }

  &.pandora {
    background-image: url(${pandoraBg});
  }

  &.sainsburys {
    background-image: url(${sainsburysBg});
  }

  &.seat {
    background-image: url(${seatBg});
  }

  &.chivas {
    background-image: url(${chivasBg});
  }
`

export const WorkContent = styled.div`
  display: flex;
  width: 1366px;
  z-index: 1;
`

export const WorkSelector = styled.div`
  flex: 1;
  background-color: ${colours.colourBackgroundBeta};
  padding: 20px;
  text-align: center;
`

export const WorkButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  button {
    display: inline-block;
    border: none;
    margin: 0 10px;
    height: 100px;
    width: 104px;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.5;
    transition: opacity 0.4s ease-in-out;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }

    &:focus {
      outline: none;
    }
  }

  .work-dulux {
    background-image: url(${dulux});
  }

  .work-chivas {
    background-image: url(${chivas});
  }

  .work-pandora {
    background-image: url(${pandora});
  }

  .work-sainsburys {
    background-image: url(${sainsburys});
  }

  .work-seat {
    background-image: url(${seat});
  }

  .active {
    opacity: 1;
  }
`

export const WorkDescription = styled.div`
  flex: 1;
  padding: 10px 10px 10px 100px;
  color: ${colours.colourCopyNeg};
  text-align: right;

  h3 {
    color: ${colours.colourCopyNeg};
  }
`
