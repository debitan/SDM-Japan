import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BlockContent from "@sanity/block-content-to-react"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import YellowTitle from "../components/YellowTitle"
import ContainerCentre from "../components/shared/ContainerCentre"
import serializers from "../components/serializers"
import WhiteButton from "../components/shared/WhiteButton"
import RowWrapper from "../components/shared/RowWrapper"
import StyledAnchor from "../components/shared/StyledAnchor"
import ImageGallery from "../components/ImageGallery"

const RequestASpeaker = () => {
  const { sanityRequestASpeaker } = useStaticQuery(graphql`
    query RequestASpeakerQuery {
      sanityRequestASpeaker {
        title {
          ja
        }
        _rawBody
        button {
          ja
        }
        image {
          caption {
            ja
          }
          image {
            asset {
              fluid {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="What we do" />
      <YellowTitle title={sanityRequestASpeaker.title.ja} />
      <ContainerCentre>
        <BlockContent
          blocks={sanityRequestASpeaker._rawBody.ja}
          serializers={serializers}
        />
        <RowWrapper>
          <StyledAnchor href="/contact">
            <WhiteButton>{sanityRequestASpeaker.button.ja}</WhiteButton>
          </StyledAnchor>
        </RowWrapper>
      </ContainerCentre>
      <ImageGallery
        itemsPerRow={2}
        images={sanityRequestASpeaker.image.map(image => image)}
      />
    </Layout>
  )
}

export default RequestASpeaker
