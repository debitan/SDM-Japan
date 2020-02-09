import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import YellowTitle from '../components/YellowTitle'
import PublishedMedia from '../components/publications/PublishedMedia'
import Media from '../components/publications/Media'
import ContentWrapper from '../components/shared/ContentWrapper'

const Publication = () => {
    return (
        <Layout>
            <SEO title='Publications' />
            <YellowTitle title='出版・メディア' />
            <ContentWrapper>
                <PublishedMedia />
                <Media />
            </ContentWrapper>
        </Layout>
    )
}

export default Publication
