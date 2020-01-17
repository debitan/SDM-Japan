import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import BlockContent from '@sanity/block-content-to-react'

import serializers from './serializers'
import BlueButton from '../components/shared/BlueButton'

const ColourDiv = styled('div')`
    background-color: #FFF691;
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
`

const DonationWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 290px;
    padding: 30px;
    max-width: 60rem;
`

const GreyH3 = styled('h3')`
    color: #5E5C5C;
    font-weight: 600;
    text-align: center;
`

const FlexWrapper = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`

const ColumnWrapper = styled('div')`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: fit-content;
`

const StyledImg = styled(Img)`
    min-width: 7.5rem;
    margin-bottom: 20px;

    @media (min-width: 768px) {
        margin-right: 40px;
    }
`

const Donation = () => {
    const { sanityFooter } = useStaticQuery(graphql`
        query DonationQuery {
            sanityFooter {
                donateTitle {
                    ja
                }
                donateImage {
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
                _rawDonateBody
            }
        }
    `)

    console.log(sanityFooter._rawDonateBody)

    return (
        <ColourDiv>
            <DonationWrapper>
                <GreyH3>{sanityFooter.donateTitle.ja}</GreyH3>
                <FlexWrapper>
                    <StyledImg fluid={sanityFooter.donateImage.image.asset.fluid} alt={sanityFooter.donateImage.caption.ja} />
                    <ColumnWrapper>
                        <p>
                            <BlockContent blocks={sanityFooter._rawDonateBody.ja} serializers={serializers} />
                        </p>
                        <BlueButton>レディーフォーのサイトで詳しく読む</BlueButton>
                    </ColumnWrapper>
                </FlexWrapper>
            </DonationWrapper>
        </ColourDiv>
    )
}

export default Donation
