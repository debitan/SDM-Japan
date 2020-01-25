import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'

import facebook from '../images/facebook.svg'
import instagram from '../images/instagram.svg'
import serializers from '../components/serializers'
import SEO from '../components/SEO'
import Layout from '../components/Layout'
import Link from '../components/shared/Link'
import ColumnWrapper from '../components/shared/ColumnWrapper'
import ContainerCentre from '../components/shared/ContainerCentre'
import BlueText from '../components/shared/BlueText'
import RowWrapper from '../components/shared/RowWrapper'

const MapImage = styled(Img)`
    min-width: 100%;
`

const Wrapper = styled(ColumnWrapper)`
    width: 100%;
    align-items: flex-start;
    padding: 2rem;
    border-bottom: 1px solid #979797;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
    }
`

const MapLink = styled(Link)`
    width: 90%;
    margin: 2rem 0;

    @media (min-width: 768px) {
        margin: 2rem;
    }
`

const Logo = styled('img')`
    min-width: 3rem;
    margin: 1rem;
`

const ContactPage = () => {
    const { sanityContact, staticMap } = useStaticQuery(graphql`
        query ContactQuery {
            sanityContact {
                _rawContactBody
                follow {
                  ja
                }
                instagramUrl
                facebookUrl
            }
            staticMap {
                mapUrl
                childFile {
                  childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                  }
                }
            }
        }
    `)

    return (
        <Layout>
            <SEO title='Contact' />
            <ContainerCentre>
                <Wrapper>
                    <p>
                        <BlockContent blocks={sanityContact._rawContactBody.ja} serializers={serializers} />
                    </p>
                    <MapLink href={staticMap.mapUrl} target='_blank'>
                        <MapImage fluid={staticMap.childFile.childImageSharp.fluid} />
                    </MapLink>
                </Wrapper>
                <ColumnWrapper>
                    <BlueText>{sanityContact.follow.ja}</BlueText>
                    <RowWrapper>
                        <Link href={sanityContact.instagramUrl} target='_blank'>
                            <Logo src={instagram} alt='インストグラムのロゴ' />
                        </Link>
                        <Link href={sanityContact.facebookUrl} target='_blank'>
                            <Logo src={facebook} alt='フェイスブックのロゴ' />
                        </Link>
                    </RowWrapper>
                </ColumnWrapper>
            </ContainerCentre>
        </Layout>
    )
}

export default ContactPage
