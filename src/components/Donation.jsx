import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'

import readyFor from '../images/readyFor.svg'
import serializers from './serializers'
import BlueButton from './shared/BlueButton'
import ColumnWrapper from './shared/ColumnWrapper'
import GreyH3 from './shared/GreyH3'
import RowWrapper from './shared/RowWrapper'
import StyledAnchor from './shared/StyledAnchor'

const ColourDiv = styled('div')`
    background-color: #FFF691;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    max-width: 1900px;
    margin-left: auto;
    margin-right: auto;
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

const FlexWrapper = styled(RowWrapper)`
    padding: 10px;
    flex-direction: column;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`

const StyledImg = styled('img')`
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
                _rawDonateBody
            }
        }
    `)

    return (
        <ColourDiv id="donate">
            <DonationWrapper>
                <GreyH3>{sanityFooter.donateTitle.ja}</GreyH3>
                <FlexWrapper>
                    <StyledImg src={readyFor} alt='Ready forのロゴ' />
                    <ColumnWrapper>
                        <p>
                            <BlockContent blocks={sanityFooter._rawDonateBody.ja} serializers={serializers} />
                        </p>
                        <StyledAnchor href='https://readyfor.jp/projects/talkingmats' target='_blank'>
                            <BlueButton>レディーフォーのサイトで詳しく読む</BlueButton>
                        </StyledAnchor>
                    </ColumnWrapper>
                </FlexWrapper>
            </DonationWrapper>
        </ColourDiv>
    )
}

export default Donation
