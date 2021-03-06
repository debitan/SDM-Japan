import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import moment from "moment"

import serializers from "./serializers"
import ContainerCentre from "./shared/ContainerCentre"
import ColumnWrapper from "./shared/ColumnWrapper"
import BlueText from "./shared/BlueText"
import BlueButton from "./shared/BlueButton"
import RowWrapper from "./shared/RowWrapper"
import Link from "./shared/Link"
import { NarrowCoverImage, WideCoverImage } from "./shared/Images"
import Check from "../images/check-solid.svg"

const GreenCheck = styled("img")`
  width: 1rem;
  margin: 0.5rem;
`

const PublicationsContainer = styled(ContainerCentre)`
  border-bottom: 1px solid #979797;
`

const PublicationWrapper = styled(ColumnWrapper)`
  margin-bottom: 2rem;
  align-items: flex-start;
`

const ContentWrapper = styled(ColumnWrapper)`
  width: 100%;
  align-items: flex-start;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }
`

const DescriptionWrapper = styled(ColumnWrapper)`
  align-items: center;
  width: 100%;

  @media (min-width: 992px) {
    max-width: 666px;
    align-items: flex-start;
  }
`

const BlueTitles = styled(BlueText)`
  margin: 0;
`

const DescriptionGrid = styled("div")`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 7fr;
  }
`

const ContentsWrapper = styled(RowWrapper)`
  justify-content: flex-start;
  align-items: flex-start;
`

const EventLink = styled(Link)`
  align-self: center;
  margin: 1rem;
`

const ImageWrapper = styled(RowWrapper)`
  justify-content: center;
  width: 100%;
`

const BodyText = styled("p")`
  text-align: center;
`

const PublishedMedia = () => {
  const { sanityEventsPage } = useStaticQuery(graphql`
    query EventsQuery {
      sanityEventsPage {
        eventPageTitle {
          ja
        }
        _rawEventBody
        event {
          date {
            ja
          }
          _rawAudience
          _rawCapacity
          contents {
            ja
          }
          _rawLocation
          _rawPrice
          audienceTitle {
            ja
          }
          capacityTitle {
            ja
          }
          contentsTitle {
            ja
          }
          locationTitle {
            ja
          }
          priceTitle {
            ja
          }
          startDate
          title {
            ja
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
          link {
            url
            link {
              ja
            }
          }
        }
      }
    }
  `)

  return (
    <PublicationsContainer>
      {sanityEventsPage.event
        .sort((a, b) => {
          a = moment(a.startDate).format()
          b = moment(b.startDate).format()
          return a > b ? -1 : a < b ? 1 : 0
        })
        .map(event => (
          <PublicationWrapper key={event.title.ja}>
            <ContentWrapper>
              <ImageWrapper>
                {event.image.image.asset._rawMetadata.dimensions.aspectRatio >
                1 ? (
                  <WideCoverImage
                    fluid={event.image.image.asset.fluid}
                    alt={event.image.caption.ja}
                  />
                ) : (
                  <NarrowCoverImage
                    fluid={event.image.image.asset.fluid}
                    alt={event.image.caption.ja}
                  />
                )}
              </ImageWrapper>
              <DescriptionWrapper>
                <BlueTitles>{event.title.ja}</BlueTitles>
                {event.date.map(date => (
                  <BlueTitles key={date.ja}>{date.ja}</BlueTitles>
                ))}
                <DescriptionGrid>
                  <span>{event.locationTitle.ja}</span>
                  <p>
                    <BlockContent
                      blocks={event._rawLocation.ja}
                      serializers={serializers}
                    />
                  </p>
                  <span>{event.priceTitle.ja}</span>
                  <p>
                    <BlockContent
                      blocks={event._rawPrice.ja}
                      serializers={serializers}
                    />
                  </p>
                  <span>{event.audienceTitle.ja}</span>
                  <p>
                    <BlockContent
                      blocks={event._rawAudience.ja}
                      serializers={serializers}
                    />
                  </p>
                  <span>{event.capacityTitle.ja}</span>
                  <p>
                    <BlockContent
                      blocks={event._rawCapacity.ja}
                      serializers={serializers}
                    />
                  </p>
                </DescriptionGrid>
                <div>
                  <span>{event.contentsTitle.ja}</span>
                  {event.contents.map(item => (
                    <ContentsWrapper key={item.ja}>
                      <GreenCheck src={Check} />
                      <p>{item.ja}</p>
                    </ContentsWrapper>
                  ))}
                </div>
                <EventLink
                  href={event.link.url}
                  target="_blank"
                  key={event.link.url}
                >
                  <BlueButton>{event.link.link.ja}</BlueButton>
                </EventLink>
              </DescriptionWrapper>
            </ContentWrapper>
          </PublicationWrapper>
        ))}
      <BodyText>
        <BlockContent
          blocks={sanityEventsPage._rawEventBody.ja}
          serializers={serializers}
        />
      </BodyText>
    </PublicationsContainer>
  )
}

export default PublishedMedia
