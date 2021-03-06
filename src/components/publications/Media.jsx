import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import moment from "moment"

import serializers from "../serializers"
import GreyH3 from "../shared/GreyH3"
import ColumnWrapper from "../shared/ColumnWrapper"
import RowWrapper from "../shared/RowWrapper"
import BlueText from "../shared/BlueText"
import Link from "../shared/Link"
import { NarrowCoverImage, WideCoverImage } from "../shared/Images"
import MediaContainer from "../shared/MediaContainer"
import MediaWrapper from "../shared/MediaWrapper"

const PublicationWrapper = styled(ColumnWrapper)`
  margin: 2rem 0;
  align-items: flex-start;
`

const Description = styled("p")`
  margin: 2rem 0;
`

const Date = styled("p")`
  text-align: end;
  font-weight: 600;
`

const Media = () => {
  const { sanityPublications } = useStaticQuery(graphql`
    query MediaQuery {
      sanityPublications {
        mediaTitle {
          ja
        }
        internalMedia {
          _rawDescription
          date
          file {
            asset {
              url
            }
          }
          image {
            caption {
              ja
            }
            image {
              asset {
                _rawMetadata
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
          publisher {
            ja
          }
          title {
            ja
          }
        }
        externalMedia {
          _rawDescription
          date
          image {
            caption {
              ja
            }
            image {
              asset {
                _rawMetadata
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
          }
          link
          publisher {
            ja
          }
          title {
            ja
          }
        }
      }
    }
  `)

  const media = [
    ...sanityPublications.internalMedia,
    ...sanityPublications.externalMedia,
  ].sort((a, b) => {
    a = moment(a.date).format()
    b = moment(b.date).format()
    return a > b ? -1 : a < b ? 1 : 0
  })

  const formatDate = date => {
    const dateArray = date.split("-")
    return `${dateArray[0]}年${dateArray[1]}月`
  }

  return (
    <MediaContainer>
      <GreyH3>{sanityPublications.mediaTitle.ja}</GreyH3>
      {media.map(publication =>
        publication.link ? (
          <PublicationWrapper key={publication.title.ja}>
            <Link href={publication.link} target="_blank">
              <BlueText>
                {publication.publisher.ja}
                <br />
                {publication.title.ja}
              </BlueText>
            </Link>
            <MediaWrapper>
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
            </MediaWrapper>
          </PublicationWrapper>
        ) : (
          <PublicationWrapper key={publication.title.ja}>
            <Link href={publication.file.asset.url} target="_blank">
              <BlueText>
                {publication.publisher.ja}
                <br />
                {publication.title.ja}
              </BlueText>
            </Link>
            <MediaWrapper>
              <RowWrapper>
                {publication.image.image.asset._rawMetadata.dimensions
                  .aspectRatio > 1 ? (
                  <Link href={publication.file.asset.url} target="_blank">
                    <WideCoverImage
                      fluid={publication.image.image.asset.fluid}
                      alt={publication.image.caption.ja}
                    />
                  </Link>
                ) : (
                  <Link href={publication.file.asset.url} target="_blank">
                    <NarrowCoverImage
                      fluid={publication.image.image.asset.fluid}
                      alt={publication.image.caption.ja}
                    />
                  </Link>
                )}
              </RowWrapper>
              <div>
                <Date>{formatDate(publication.date)}</Date>
                <Description>
                  <BlockContent
                    blocks={publication._rawDescription.ja}
                    serializers={serializers}
                  />
                </Description>
              </div>
            </MediaWrapper>
          </PublicationWrapper>
        )
      )}
    </MediaContainer>
  )
}

export default Media
