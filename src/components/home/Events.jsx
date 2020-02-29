import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import BlockContent from '@sanity/block-content-to-react'

import RowWrapper from '../shared/RowWrapper'
import ColumnWrapper from '../shared/ColumnWrapper'
import ContainerCentre from '../shared/ContainerCentre'
import StyledAnchor from '../shared/StyledAnchor'
import GreyH3 from '../shared/GreyH3'
import serializers from '../serializers'


const EventsWrapper = styled(RowWrapper)`
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;

    /* @media (min-width: 666px) {
        justify-content: flex-start;
    } */
`

const StyledImage = styled(Img)`
    min-width: 25rem;
    max-height: 35rem;
    margin-bottom: 1rem;
`

const ImageWrapper = styled('div')`
    height: 35rem;
`

const EventWrapper = styled(ColumnWrapper)`
    margin: 2rem 5rem 0 5rem;
    max-width: 20rem;
    align-items: flex-start;
    text-align: left;
`

const BoldText = styled('p')`
    font-weight: 600;
    margin: 0.2rem;
`

const NormalText = styled('p')`
    font-weight: 300;
    margin: 0.2rem;
`

const TextAlignedContainer = styled(ContainerCentre)`
    text-align: center;
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

    console.log(sanityEventsPage.event.map(event => event.startDate))

    return (
        <TextAlignedContainer>
            <GreyH3>{sanityEventsPage.eventPageTitle.ja}</GreyH3>
            <EventsWrapper>
                {sanityEventsPage.event.filter(event => Date.parse(event.startDate) < Date.now()).map(event =>
                    <StyledAnchor href='/events/' key={event.title.ja}>
                        <EventWrapper>
                            <ImageWrapper>
                                <StyledImage fluid={event.image.image.asset.fluid} alt={event.image.caption.ja} />
                            </ImageWrapper>
                            <BoldText>{event.title.ja}</BoldText>
                            {event.date.map(date =>
                                <NormalText key={date.ja}>{date.ja}</NormalText>
                            )}
                            <NormalText><BlockContent blocks={event._rawLocation.ja} serializers={serializers} /></NormalText>
                        </EventWrapper>
                    </StyledAnchor>
                )}
            </EventsWrapper>
            <br />
            <p><BlockContent blocks={sanityEventsPage._rawEventBody.ja} serializers={serializers} /></p>
        </TextAlignedContainer>
    )
}

export default Events
