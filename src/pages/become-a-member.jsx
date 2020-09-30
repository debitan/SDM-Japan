import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import YellowTitle from "../components/YellowTitle"
import ContainerCentre from "../components/shared/ContainerCentre"
import serializers from "../components/serializersGrey"

const BecomeAMember = () => {
  const { sanityBecomeAMember } = useStaticQuery(graphql`
    query BecomeAMemberQuery {
      sanityBecomeAMember {
        _rawBody1
      }
    }
  `)

  return (
    <Layout>
      <SEO title="賛助会員になる" />
      <YellowTitle title="賛助会員になる" />
      <ContainerCentre>
        <br />
        <br />
        <BlockContent
          blocks={sanityBecomeAMember._rawBody1.ja}
          serializers={serializers}
        />
      </ContainerCentre>
    </Layout>
  )
}

export default BecomeAMember
