import styled from '@emotion/styled'
import { colourCopyNeg } from '../../emotion/colours.style'

export default styled.nav`
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
`
