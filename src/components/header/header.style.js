import styled from '@emotion/styled'
import { colourCopyNeg } from '../../emotion/colours.style'

export const HeaderContainer = styled.header`
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  height: 80px;
  padding: 0 40px;
  z-index: 2;
`

export const Column = styled.div`
  flex: 1;
`

export const Logo = styled.div`
  text-align: left;
  padding: 30px 0;

  a {
    font-weight: 600;
    font-size: 26px;
    transition: opacity 0.4s ease-in-out;
    color: ${colourCopyNeg};
  }
`
