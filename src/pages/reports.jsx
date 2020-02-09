import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import YellowTitle from '../components/YellowTitle'
import Reports from '../components/Reports'

const Report = () => {


    return (
        <Layout>
            <SEO title='Reports' />
            <YellowTitle title='活動報告書' />
            <Reports />
        </Layout>
    )
}

export default Report
