import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import YellowTitle from "../components/YellowTitle"
import ContainerCentre from "../components/shared/ContainerCentre"
import serializers from "../components/serializersGrey"

const Border = styled("div")`
  border-top: 0.5rem solid rgb(137, 234, 234);
  width: 33%;
  margin: 2rem 0 1rem 0;
`

const BecomeAMember = () => {
  const { sanityBecomeAMember } = useStaticQuery(graphql`
    query BecomeAMemberQuery {
      sanityBecomeAMember {
        _rawBody1
        _rawBody2
      }
    }
  `)

  return (
    <Layout>
      <SEO title="会員になる" />
      <YellowTitle title="会員になる" />
      <ContainerCentre>
        <br />
        <br />
        <BlockContent
          blocks={sanityBecomeAMember._rawBody1.ja}
          serializers={serializers}
        />
        <Border />
        <BlockContent
          blocks={sanityBecomeAMember._rawBody2.ja}
          serializers={serializers}
        />
      </ContainerCentre>
    </Layout>
  )
}

export default BecomeAMember
