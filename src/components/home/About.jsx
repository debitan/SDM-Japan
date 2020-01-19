import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'

import serializers from '../serializers'
import Container from '../shared/Container'
import ColumnWrapper from '../shared/ColumnWrapper'
import GreyH3 from '../shared/GreyH3'
import BlueButton from '../shared/BlueButton'

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
    max-width: 42rem;
    margin: 2rem 0;
    margin-left: auto;
    margin-right: auto;
`

const Text = styled('p')`
    margin-top: 1rem;
`

const About = () => {
    const { sanityHomePage } = useStaticQuery(graphql`
        query HomeAboutQuery {
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
            </Container>
        </ColourDiv>
    )
}

export default About
