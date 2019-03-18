import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { colourBackgroundNeg } from '../emotion/colours.style'

import Layout from '../components/layout'
import SEO from '../components/seo'

const fourOhFour = css`
  position: relative;
  padding: 100px 20px 100px;
  height: calc(100vh - 56px);
`

const Heading = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: ${colourBackgroundNeg};
`

const NotFoundPage = () => (
  <Layout>
    <SEO title='404: Not found' />
    <section css={fourOhFour}>
      <Heading />
      <h1>FOUR OH FOUR</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </section>
  </Layout>
)

export default NotFoundPage
