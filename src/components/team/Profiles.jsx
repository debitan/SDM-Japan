import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'
import Img from 'gatsby-image'

import serializers from '../serializers'
import Container from '../shared/Container'
import ColumnWrapper from '../shared/ColumnWrapper'
import RowWrapper from '../shared/RowWrapper'
import GreyH3 from '../shared/GreyH3'

const ColourDiv = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    max-width: 1900px;
    margin-left: auto;
    margin-right: auto;
`

const Wrapper = styled(ColumnWrapper)`
    margin: 2rem 0;
    margin-left: auto;
    margin-right: auto;
    justify-content: space-between;

    @media (min-width: 980px) {
        flex-direction: row;
    }
`

const Text = styled('p')`
    margin-top: 1rem;
`

const LeftWrapper = styled('div')`
    width: 19rem;
    max-width: 100%;
    border-top: 0.5rem solid rgb(137, 234, 234);
    padding: 2.5rem 0;
`

const RightWrapper = styled(ColumnWrapper)`
    max-width: 100%;
    width: 42rem;
    justify-content: flex-start;

    @media (min-width: 980px) {
        padding: 2.5rem 0;
        margin-left: 2rem;
    }
`

const NameWrapper = styled(RowWrapper)`
    justify-content: flex-start;
`

const NameH3 = styled(GreyH3)`
    margin-left: 2rem;
`

const BlueText = styled('p')`
    color: #026AB9;
    margin: 1rem 0;
    font-weight: 600;
    font-size: 1.1rem;
`

const Profiles = () => {
    const { sanityTeam } = useStaticQuery(graphql`
        query ProfilesQuery {
            sanityTeam {
            profiles {
                role {
                ja
                }
                name {
                ja
                }
                furigana
                photo {
                    caption {
                        ja
                    }
                    image {
                        asset {
                        fluid {
                            ...GatsbySanityImageFluid
                        }
                        }
                    }
                }
                dayJob {
                ja
                }
                _rawDuties
                _rawAboutSdm
            }
            }
        }
    `)

    return (
        <ColourDiv>
            <Container>
                {sanityTeam.profiles.map(profile => (
                    <Wrapper key={profile.name.ja}>
                        <LeftWrapper>
                            <NameWrapper>
                                <GreyH3>{profile.role.ja}</GreyH3>
                                <NameH3>  {profile.name.ja}</NameH3>
                            </NameWrapper>
                            <BlueText>
                                {profile.dayJob.ja}
                            </BlueText>
                            <Img fluid={profile.photo.image.asset.fluid} alt={profile.photo.caption.ja} />
                        </LeftWrapper>
                        <RightWrapper>
                            <Text>
                                <BlockContent blocks={profile._rawDuties.ja} serializers={serializers} />
                            </Text>
                            <Text>
                                <BlockContent blocks={profile._rawAboutSdm.ja} serializers={serializers} />
                            </Text>
                        </RightWrapper>
                    </Wrapper>
                ))}
            </Container>
        </ColourDiv>
    )
}

export default Profiles
