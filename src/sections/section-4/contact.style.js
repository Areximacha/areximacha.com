import styled from '@emotion/styled'
import { css } from '@emotion/core'

export const ContactSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  padding: 50px 40px;
`

export const ContactColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 640px;

  h2 {
    margin-bottom: 50px;
  }
`

export const ContactRow = styled.div`
  display: flex;
  justify-content: space-evenly;
`

export const contactIcon = css`
  font-size: 60px;
  opacity: 0.5;
  transition: opacity 0.4s ease-in-out;

  &:hover {
    opacity: 1;
  }
`
