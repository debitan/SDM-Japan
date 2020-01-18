import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'
import Img from 'gatsby-image'

import serializers from '../serializers'
import Container from '../shared/Container'
import ColumnWrapper from '../shared/ColumnWrapper'
import GreyH3 from '../shared/GreyH3'
import BlueButton from '../shared/BlueButton'
import RowWrapper from '../shared/RowWrapper'

const ColourDiv = styled('div')`
    background-color: #CCF6E1;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
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
    justify-content: space-around;
    flex-wrap: wrap;
`

const ActivityWrapper = styled(ColumnWrapper)`
    flex: 1 1 400px;
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

const About = () => {
    const { sanityOurActivities, sanityHomePage } = useStaticQuery(graphql`
        query HomeAboutQuery {
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
                aboutSDMTitle {
                    ja
                }
                activityTitle {
                    ja
                }
                _rawAboutSdm
            }
        }
    `)

    return (
        <ColourDiv>
            <Container>
                <Wrapper>
                    <GreyH3>{sanityHomePage.aboutSDMTitle.ja}</GreyH3>
                    <Text><BlockContent blocks={sanityHomePage._rawAboutSdm.ja} serializers={serializers} /></Text>
                    <BlueButton>もっと知る</BlueButton>
                </Wrapper>
                <GreyH3>{sanityHomePage.activityTitle.ja}</GreyH3>
                <ActivitiesWrapper>
                    {sanityOurActivities.activities.map(activity =>
                        <ActivityWrapper>
                            <StyledImg fluid={activity.ourActivityImage.image.asset.fluid} alt={activity.ourActivityImage.caption.ja} key={activity.ourActivityImage.caption.ja} />
                            <StyledAnchor href={activity.link} >{activity.ourActivity.ja}</StyledAnchor>
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

export default About
