import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import SEO from '../components/SEO'
import Layout from '../components/Layout'
import YellowTitle from '../components/YellowTitle'
import Workshops from '../components/Workshops'
import WhiteButton from '../components/shared/WhiteButton'
import ColumnWrapper from '../components/shared/ColumnWrapper'
import StyledAnchor from '../components/shared/StyledAnchor'

const PageContainer = styled('div')`
    max-width: 1900px;
    margin-left: auto;
    margin-right: auto;
`

const ButtonWrapper = styled(ColumnWrapper)`
    margin-top: 2rem;
    margin-bottom: -1rem;
    justify-content: space-evenly;

    @media (min-width: 992px) {
        padding: 0 9rem;
        margin-top: 6rem;
        margin-bottom: -1.5rem;
        flex-direction: row;
    }

    a {
        margin: 1rem;
    }
`

const WorkshopsPage = () => {
    const { sanityWorkshops } = useStaticQuery(graphql`
        query WorkshopsPageQuery {
            sanityWorkshops {
            workshopTitle {
                ja
            }
            currentEvents {
                url
                link {
                  ja
                }
              }
            requestSpeaker {
                url
                link {
                  ja
                }
              }
            }
        }
    `)

    return (
        <Layout>
            <SEO title={sanityWorkshops.workshopTitle.ja} />
            <YellowTitle title={sanityWorkshops.workshopTitle.ja} />
            <PageContainer>
                <ButtonWrapper>
                    <StyledAnchor href={sanityWorkshops.currentEvents.url}>
                        <WhiteButton>
                            {sanityWorkshops.currentEvents.link.ja}
                        </WhiteButton>
                    </StyledAnchor>
                    <StyledAnchor href={sanityWorkshops.requestSpeaker.url}>
                        <WhiteButton>
                            {sanityWorkshops.requestSpeaker.link.ja}
                        </WhiteButton>
                    </StyledAnchor>
                </ButtonWrapper>
                <Workshops />
            </PageContainer>
        </Layout>
    )
}

export default WorkshopsPage
