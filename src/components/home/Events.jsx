import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import moment from "moment"

import RowWrapper from "../shared/RowWrapper"
import ColumnWrapper from "../shared/ColumnWrapper"
import ContainerCentre from "../shared/ContainerCentre"
import StyledAnchor from "../shared/StyledAnchor"
import GreyH3 from "../shared/GreyH3"
import { WideCoverImage, NarrowCoverImage } from "../shared/Images"
import UnderlinedLink from "../shared/UnderlinedLink"
import serializers from "../serializers"

const EventsWrapper = styled(RowWrapper)`
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: flex-start;
`

const ImageWrapper = styled("div")`
  height: fit-content;
  width: 100%;
  justify-content: center;
  height: 354px;
  display: flex;
`

const EventWrapper = styled(ColumnWrapper)`
  margin: 2rem 2rem 0 2rem;
  max-width: 18rem;
  align-items: flex-start;
  text-align: left;
`

const BoldText = styled("p")`
  font-weight: 600;
  margin: 0.2rem;
`

const NormalText = styled("p")`
  font-weight: 300;
  margin: 0.2rem;
`

const TextAlignedContainer = styled(ContainerCentre)`
  text-align: center;
  max-width: 1080px;
`

const Events = () => {
  const { sanityEventsPage } = useStaticQuery(graphql`
    query HomeEventsQuery {
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
    <TextAlignedContainer>
      <GreyH3>{sanityEventsPage.eventPageTitle.ja}</GreyH3>
      <EventsWrapper>
        {sanityEventsPage.event
          .filter(event => Date.parse(event.startDate) < Date.now())
          .sort((a, b) => {
            a = moment(a.startDate).format()
            b = moment(b.startDate).format()
            return a > b ? -1 : a < b ? 1 : 0
          })
          .slice(0, 6)
          .map(event => (
            <StyledAnchor href="/events/" key={event.title.ja}>
              {console.log(`${event.title.ja} - ${event.startDate}`)}
              <EventWrapper>
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
                <BoldText>{event.title.ja}</BoldText>
                {event.date.map(date => (
                  <NormalText key={date.ja}>{date.ja}</NormalText>
                ))}
                <NormalText>
                  <BlockContent
                    blocks={event._rawLocation.ja}
                    serializers={serializers}
                  />
                </NormalText>
              </EventWrapper>
            </StyledAnchor>
          ))}
      </EventsWrapper>
      <br />
      <p>
        <ColumnWrapper>
          <UnderlinedLink href="/events">イベント一覧</UnderlinedLink>
          <br />
        </ColumnWrapper>
        <BlockContent
          blocks={sanityEventsPage._rawEventBody.ja}
          serializers={serializers}
        />
      </p>
    </TextAlignedContainer>
  )
}

export default Events
