import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Events from '../components/Events'
import EventReviews from '../components/EventReviews'

const Report = () => {


    return (
        <Layout>
            <SEO title='Events' />
            <Events />
            <EventReviews />
        </Layout>
    )
}

export default Report
