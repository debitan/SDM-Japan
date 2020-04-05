import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import YellowTitle from "../components/YellowTitle"
import ContainerCentre from "../components/shared/ContainerCentre"
import serializersBlue from "../components/serializersBlue"

const Video = () => {
  const { sanityVideo } = useStaticQuery(graphql`
    query VideosQuery {
      sanityVideo {
        title {
          ja
        }
        subTitle {
          ja
        }
        _rawBody
      }
    }
  `)

  return (
    <Layout>
      <SEO title={sanityVideo.title.ja} />
      <YellowTitle title={sanityVideo.title.ja} />
      <ContainerCentre>
        <BlockContent
          blocks={sanityVideo._rawBody.ja}
          serializers={serializersBlue}
        />
      </ContainerCentre>
    </Layout>
  )
}

export default Video
