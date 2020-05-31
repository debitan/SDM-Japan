import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import Img from "gatsby-image"

import serializers from "../serializers"
import Container from "../shared/Container"
import ColumnWrapper from "../shared/ColumnWrapper"
import GreyH3 from "../shared/GreyH3"

const ImageDiv = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  min-height: fit-content;
  position: relative;
  max-width: 1900px;
  margin-left: auto;
  margin-right: auto;
`

const Wrapper = styled(ColumnWrapper)`
  max-width: 42rem;
  margin: 2rem 0;
  margin-left: auto;
  margin-right: auto;
`

const Text = styled("p")`
  margin-top: 1rem;
  color: white;
`

const StyledImg = styled(Img)`
  width: 100%;
  min-height: 25rem;
`

const OverlayContainer = styled(Container)`
  position: absolute;
`

const WhiteH3 = styled(GreyH3)`
  color: white;
`

const About = () => {
  const { sanityHomePage } = useStaticQuery(graphql`
    query SDMQuery {
      sanityHomePage {
        supportedDecisionMakingTitle {
          ja
        }
        _rawSupportedDecisionMaking
        supportedDecisionMakingImage {
          image {
            asset {
              fluid {
                ...GatsbySanityImageFluid
              }
            }
          }
          caption {
            ja
          }
        }
      }
    }
  `)

  return (
    <ImageDiv>
      <StyledImg
        fluid={sanityHomePage.supportedDecisionMakingImage.image.asset.fluid}
        alt={sanityHomePage.supportedDecisionMakingImage.caption.ja}
      />
      <OverlayContainer>
        <Wrapper>
          <WhiteH3>{sanityHomePage.supportedDecisionMakingTitle.ja}</WhiteH3>
          <Text>
            <BlockContent
              blocks={sanityHomePage._rawSupportedDecisionMaking.ja}
              serializers={serializers}
            />
          </Text>
        </Wrapper>
      </OverlayContainer>
    </ImageDiv>
  )
}

export default About
