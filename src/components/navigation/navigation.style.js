import styled from '@emotion/styled'
import {
  colourCopyNeg,
  colourBackgroundDelta,
} from '../../emotion/colours.style'
import { mediaQuery } from '../../emotion/utils.style'

export const Nav = styled.nav`
  padding: 30px 50px 30px 0;

  ul {
    display: flex;
    justify-content: flex-end;
  }

  li {
    margin-left: 20px;

    a {
      color: ${colourCopyNeg};
      opacity: 0.7;
      transition: opacity 0.4s ease-in-out;
      text-transform: capitalize;
      font-size: 20px;
      font-weight: 600;

      &:hover {
        opacity 1;
      }
    }
  }

  ${mediaQuery.tablet} {
    padding: 0;

    ul {
      position: fixed;
      top: 0;
      left: calc(-100% + 60px);
      height: 100vh;
      width: calc(100% - 60px);
      padding-top: 20px;
      background-color: ${colourBackgroundDelta};
      opacity: 0.9;
      transform: translate(0, 0);
      transition: all 0.4s ease-in-out;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
    }

    li {
      margin: 40px 0;

      a{
        opacity: 1;
      }
    }

    &.active {
      ul {
        transform: translate(100%, 0);
      }
    }
  }
`

export const NavButton = styled.div`
  display: none;

  ${mediaQuery.tablet} {
    display: inline-block;
    position: absolute;
    top: 0;
    right: 0;
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 10px;
    padding: 10px;
    cursor: pointer;

    .active & {
      position: fixed;

      .bun-top {
        transform: rotate(45deg);
      }

      .bun-bottom {
        transform: rotate(-45deg);
      }

      .patty {
        opacity: 0;
      }
    }
  }
`

export const Burger = styled.div`
  display: inline-block;
  width: 30px;
  height: 3px;
  background-color: ${colourCopyNeg};
  transition: all 0.3s ease-in-out;
  transform-origin: 0 50%;
`
