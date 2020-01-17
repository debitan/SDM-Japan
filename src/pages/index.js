import React from 'react'

import SEO from '../components/SEO'
import Layout from '../components/Layout'
import About from '../components/home/About'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <h1>home page</h1>
    <About />
  </Layout>
)

export default IndexPage
