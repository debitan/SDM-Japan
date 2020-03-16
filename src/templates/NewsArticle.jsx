import React from "react"
import styled from "styled-components"
import BlockContent from "@sanity/block-content-to-react"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/SEO"
import serializers from "../components/serializers"
import ContainerCentre from "../components/shared/ContainerCentre"
import YellowTitle from "../components/YellowTitle"
import ColumnWrapper from "../components/shared/ColumnWrapper"
import GreyH3 from "../components/shared/GreyH3"

const Wrapper = styled(ColumnWrapper)`
  align-items: flex-start;
  justify-content: flex-start;
`

const Metadata = styled("span")`
  font-size: 0.8rem;
  margin: 0.5rem 0;
`

const Tag = styled("span")`
  color: #026ab9;
`

const Title = styled(GreyH3)`
  text-align: left;
`

const Image = styled(Img)`
  width: 100%;
  margin: 1rem 0;
`

const formatDate = date => {
  const dateArray = date.split("-")
  return `${dateArray[0]}年${dateArray[1]}月${dateArray[2]}日`
}

const NewsArticle = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.title.ja} />
      <YellowTitle title="ニュース" />
      <ContainerCentre>
        <Wrapper>
          <Metadata>
            <Tag>{pageContext.tag.ja}</Tag>
          </Metadata>
          <Metadata>{formatDate(pageContext.date)}</Metadata>
          <Title>{pageContext.title.ja}</Title>
          <Image
            fluid={pageContext.headerImage.image.asset.fluid}
            alt={pageContext.headerImage.caption.ja}
          />
          <BlockContent
            blocks={pageContext._rawBody.ja}
            serializers={serializers}
          />
        </Wrapper>
      </ContainerCentre>
    </Layout>
  )
}

export default NewsArticle
