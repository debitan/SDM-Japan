import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PublishedMedia from '../components/publications/PublishedMedia'
import Media from '../components/publications/Media'

const Publication = () => {
    return (
        <Layout>
            <SEO title='Publications' />
            <PublishedMedia />
            <Media />
        </Layout>
    )
}

export default Publication
