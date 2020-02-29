import React from 'react'

import SEO from '../components/SEO'
import Layout from '../components/Layout'
import About from '../components/home/About'
import SupportedDecisionMaking from '../components/home/SupportedDecisionMaking'
import Header from '../components/home/Header'
import OurActivities from '../components/OurActivities'
import Events from '../components/home/Events'

const IndexPage = () => (
  <Layout>
    <SEO title='Home' />
    <Header />
    <Events />
    <SupportedDecisionMaking />
    <About />
    <OurActivities />
  </Layout>
)

export default IndexPage
