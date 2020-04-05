import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import YellowTitle from "../components/YellowTitle"
import ContainerCentre from "../components/shared/ContainerCentre"
import serializersGrey from "../components/serializersGrey"

const PFT = () => {
  const { sanityPft } = useStaticQuery(graphql`
    query PFTsQuery {
      sanityPft {
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
      <SEO title={sanityPft.title.ja} />
      <YellowTitle title={sanityPft.title.ja} />
      <ContainerCentre>
        <BlockContent
          blocks={sanityPft._rawBody.ja}
          serializers={serializersGrey}
        />
      </ContainerCentre>
    </Layout>
  )
}

export default PFT
