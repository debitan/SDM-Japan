import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'
import Img from 'gatsby-image'

import serializers from './serializers'
import Container from './shared/Container'
import ColumnWrapper from './shared/ColumnWrapper'
import GreyH3 from './shared/GreyH3'
import RowWrapper from './shared/RowWrapper'

const ColourDiv = styled('div')`
    background-color: #CCF6E1;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    max-width: 1900px;
    margin-left: auto;
    margin-right: auto;
`

const Wrapper = styled(ColumnWrapper)`
    width: 42rem;
    max-width: 100%;
    margin: 2rem 0;
    margin-left: auto;
    margin-right: auto;
`

const Text = styled('p')`
    margin-top: 1rem;
`

const StyledImg = styled(Img)`
    width: 14rem;
    margin-top: 2rem;
`

const ActivitiesWrapper = styled(RowWrapper)`
    flex-wrap: wrap;
`

const ActivityWrapper = styled(ColumnWrapper)`
    flex: 1 1 400px;
    max-width: 230px;
    margin: 0 3rem;
`

const StyledAnchor = styled('a')`
    margin-top: 0.5rem;
    text-decoration: underline;
    font-weight: 600;
    color: black;

    :hover, :active, :visited, :focus {
        color: black;
    }
`

const OurActivities = () => {
    const { sanityOurActivities, sanityHomePage } = useStaticQuery(graphql`
        query OurActivitiesQuery {
            sanityOurActivities {
                activities {
                  link
                  ourActivity {
                    ja
                  }
                  ourActivityImage {
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
                _rawCanpanLink
            }
            sanityHomePage {
                activityTitle {
                    ja
                }
            }
        }
    `)

    return (
        <ColourDiv>
            <Container>
                <Wrapper>
                    <GreyH3>{sanityHomePage.activityTitle.ja}</GreyH3>
                </Wrapper>
                <ActivitiesWrapper>
                    {sanityOurActivities.activities.map(activity =>
                        <ActivityWrapper key={activity.ourActivity.ja}>
                            <StyledImg fluid={activity.ourActivityImage.image.asset.fluid} alt={activity.ourActivityImage.caption.ja} key={activity.ourActivityImage.caption.ja} />
                            <StyledAnchor>{activity.ourActivity.ja}</StyledAnchor>
                        </ActivityWrapper>
                    )}
                </ActivitiesWrapper>
                <Wrapper>
                    <Text><BlockContent blocks={sanityOurActivities._rawCanpanLink.ja} serializers={serializers} /></Text>
                </Wrapper>
            </Container>
        </ColourDiv>
    )
}

export default OurActivities
