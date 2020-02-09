import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import YellowTitle from '../components/YellowTitle'
import Events from '../components/Events'
import EventReviews from '../components/EventReviews'

const Report = () => {


    return (
        <Layout>
            <SEO title='Events' />
            <YellowTitle title='開催予定イベント' />
            <Events />
            <EventReviews />
        </Layout>
    )
}

export default Report
