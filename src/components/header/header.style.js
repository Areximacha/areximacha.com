import styled from '@emotion/styled'

export const HeaderContainer = styled.header`
  position: absolute;
  width: 100%;
  top: 0;
  left:0;
  display: flex;
  height: 60px;
  padding: 0 40px;
  z-index: 2;
`

export const Column = styled.div`
  flex: 1;
`

export const Logo = styled.div`
  text-align: left;
  padding: 20px 0;

  a {
    font-weight: 600;
    font-size: 20px;
    opacity: 0.4;
    transition: opacity 0.4s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }
`
