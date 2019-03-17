import styled from '@emotion/styled'
import { mediaQuery } from '../../emotion/utils.style'

export const ProfileSection = styled.section`
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;

  ${mediaQuery.tablet} {
    padding: 50px 50px 75px;
    min-height: 50vh;
  }
`

export const ProfileContent = styled.div`
  flex: 1;
  max-width: 640px;

  h2 {
    margin-bottom: 70px;
  }

  ${mediaQuery.tablet} {
    width: 100%;

    h2 {
      margin-bottom: 35px;
      font-size: 25px;
      text-align: center;
    }
  }
`
