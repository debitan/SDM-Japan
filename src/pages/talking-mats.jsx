import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import YellowTitle from "../components/YellowTitle"
import ContainerCentre from "../components/shared/ContainerCentre"
import GreyH3 from "../components/shared/GreyH3"
import serializers from "../components/serializers"

const TalkingMats = () => {
  const { sanityTalkingMats } = useStaticQuery(graphql`
    query TalkingMatsQuery {
      sanityTalkingMats {
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
      <SEO title={sanityTalkingMats.title.ja} />
      <YellowTitle title={sanityTalkingMats.title.ja} />
      <ContainerCentre>
        <GreyH3>{sanityTalkingMats.subTitle.ja}</GreyH3>
        <br />
        <BlockContent
          blocks={sanityTalkingMats._rawBody.ja}
          serializers={serializers}
        />
      </ContainerCentre>
    </Layout>
  )
}

export default TalkingMats
