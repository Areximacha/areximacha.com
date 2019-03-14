import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../sections/section-1/hero'

const IndexPage = () => (
  <Layout>
    <SEO title='Jay Tang' keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
  </Layout>
)

export default IndexPage
