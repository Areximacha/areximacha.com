import styled from '@emotion/styled'

export const Nav = styled.nav`
  padding: 20px 0;

  ul {
    display: flex;
    justify-content: flex-end;
  }

  li {
    margin-left: 20px;

    a {
      opacity: 0.7;
      transition: opacity 0.4s ease-in-out;

      &:hover {
        opacity 1;
      }
    }
  }
`
