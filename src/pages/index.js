import React from 'react'

import SEO from '../components/SEO'
import Layout from '../components/Layout'
import About from '../components/home/About'
import SupportedDecisionMaking from '../components/home/SupportedDecisionMaking'
import Header from '../components/home/Header'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Header />
    <SupportedDecisionMaking />
    <About />
  </Layout>
)

export default IndexPage
