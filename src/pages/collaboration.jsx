import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import moment from "moment"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import YellowTitle from "../components/YellowTitle"
import ColumnWrapper from "../components/shared/ColumnWrapper"
import GreyH3 from "../components/shared/GreyH3"
import MediaContainer from "../components/shared/MediaContainer"
import serializers from "../components/serializers"
import BlueText from "../components/shared/BlueText"
import Link from "../components/shared/Link"
import { NarrowCoverImage, WideCoverImage } from "../components/shared/Images"

const PaddedContainer = styled(ColumnWrapper)`
  padding: 3rem 2rem;
`

const PublicationWrapper = styled(ColumnWrapper)`
  margin: 2rem 0;
  align-items: flex-start;
`

const ContentWrapper = styled(ColumnWrapper)`
  width: 100%;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`

const Description = styled("p")`
  margin: 2rem 0;
`

const Date = styled("p")`
  text-align: end;
  font-weight: 600;
`

const Collaboration = () => {
  const { sanityResourcesPage } = useStaticQuery(graphql`
    query MyQuery {
      sanityResourcesPage {
        intro {
          ja
        }
        title {
          ja
        }
        imageResources {
          publisher {
            ja
          }
          title {
            ja
          }
          link
          date
          _rawDescription
          image {
            caption {
              ja
            }
            image {
              asset {
                _rawMetadata
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
    }
  `)

  const media = sanityResourcesPage.imageResources.sort((a, b) => {
    a = moment(a.date).format()
    b = moment(b.date).format()
    return a > b ? -1 : a < b ? 1 : 0
  })

  const formatDate = date => {
    const dateArray = date.split("-")
    return `${dateArray[0]}年${dateArray[1]}月`
  }

  return (
    <Layout>
      <SEO title="他団体への協賛" />
      <YellowTitle title="他団体への協賛" />
      <PaddedContainer>
        <p>{sanityResourcesPage.intro.ja}</p>
        <br />
        <GreyH3>{sanityResourcesPage.title.ja}</GreyH3>
        <MediaContainer>
          {media.map(publication => (
            <PublicationWrapper key={publication.title.ja}>
              <Link href={publication.link} target="_blank">
                <BlueText>
                  {publication.publisher.ja}
                  <br />
                  {publication.title.ja}
                </BlueText>
              </Link>
              <ContentWrapper>
                {publication.image.image.asset._rawMetadata.dimensions
                  .aspectRatio > 1 ? (
                  <Link href={publication.link} target="_blank">
                    <WideCoverImage
                      fluid={publication.image.image.asset.fluid}
                      alt={publication.image.caption.ja}
                    />
                  </Link>
                ) : (
                  <Link href={publication.link} target="_blank">
                    <NarrowCoverImage
                      fluid={publication.image.image.asset.fluid}
                      alt={publication.image.caption.ja}
                    />
                  </Link>
                )}
                <div>
                  <Date>{formatDate(publication.date)}</Date>
                  <Description>
                    <BlockContent
                      blocks={publication._rawDescription.ja}
                      serializers={serializers}
                    />
                  </Description>
                </div>
              </ContentWrapper>
            </PublicationWrapper>
          ))}
        </MediaContainer>
      </PaddedContainer>
    </Layout>
  )
}

export default Collaboration
