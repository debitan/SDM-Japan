import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'
import Img from 'gatsby-image'

import Container from '../shared/Container'
import GreyH3 from '../shared/GreyH3'
import ColumnWrapper from '../shared/ColumnWrapper'
import serializers from '../serializers'

const ColourDiv = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    max-width: 1900px;
    margin-left: auto;
    margin-right: auto;
`

const TitleWrapper = styled(ColumnWrapper)`
    justify-content: flex-start;
    align-items: flex-start;
`

const TeamPhoto = styled(Img)`
    max-width: 750px;
    width: 100%;
    margin: 2rem 0;
`

const PhotoWrapper = styled(ColumnWrapper)`
    text-align: center;
`

const Team = () => {
    const { sanityTeam } = useStaticQuery(graphql`
        query TeamQuery {
            sanityTeam {
            teamTitle {
                ja
            }
            _rawTeamIntro
            teamPhoto {
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
            _rawTeamBody
            }
        }
    `)

    return (
        <ColourDiv>
            <Container>
                <TitleWrapper>
                    <GreyH3>{sanityTeam.teamTitle.ja}</GreyH3>
                </TitleWrapper>
                <p><BlockContent blocks={sanityTeam._rawTeamIntro.ja} serializers={serializers} /></p>
                <PhotoWrapper>
                    <TeamPhoto fluid={sanityTeam.teamPhoto.image.asset.fluid} alt={sanityTeam.teamPhoto.caption.ja} />
                    <p><BlockContent blocks={sanityTeam._rawTeamBody.ja} serializers={serializers} /></p>
                </PhotoWrapper>
            </Container>
        </ColourDiv>
    )
}

export default Team
