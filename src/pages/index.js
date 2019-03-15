import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../sections/section-1/hero'
import Profile from '../sections/section-2/profile'
import Work from '../sections/section-3/work'
import Contact from '../sections/section-4/contact'

const IndexPage = () => (
  <Layout>
    <SEO title='Jay Tang' keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <Profile />
    <Work />
    <Contact />
  </Layout>
)

export default IndexPage
