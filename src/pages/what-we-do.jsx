import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import YellowTitle from "../components/YellowTitle"
import serializers from "../components/serializers"
import ContainerCentre from "../components/shared/ContainerCentre"

const WhatWeDo = () => {
  const { sanityWhatWeDo } = useStaticQuery(graphql`
    query WhatWeDoQuery {
      sanityWhatWeDo {
        _rawBody
      }
    }
  `)

  return (
    <Layout>
      <SEO title="What we do" />
      <YellowTitle
        title={
          <span>
            意思決定支援実践のための
            <br />
            総合プログラム開発
          </span>
        }
      />
      <ContainerCentre>
        <BlockContent
          blocks={sanityWhatWeDo._rawBody.ja}
          serializers={serializers}
        />
      </ContainerCentre>
    </Layout>
  )
}

export default WhatWeDo
