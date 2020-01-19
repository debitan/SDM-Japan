import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import BlockContent from '@sanity/block-content-to-react'

import serializers from '../serializers'
import ColumnWrapper from '../shared/ColumnWrapper'
import Container from '../shared/Container'
import TextContainer from '../shared/TextContainer'
import GreyH3 from '../shared/GreyH3'
import Text from '../shared/Text'

const ImageDiv = styled(ColumnWrapper)`
    margin: 2rem 0;
    min-height: fit-content;
    max-width: 1900px;
    margin-left: auto;
    margin-right: auto;
`

const Wrapper = styled(ColumnWrapper)`
    max-width: 35rem;
    margin: 2rem 0;
    margin-left: ${props => props.right ? 'auto' : '0'};
    margin-right: ${props => props.left ? 'auto' : '0'};
    background-color: rgb(255, 255, 255, 0.5);
    padding: 1rem;
`

const StyledImg = styled(Img)`
    width: 100%;
    min-height: 25rem;
`

const OverlayContainer = styled(Container)`
    position: absolute;
    display: none;

    @media (min-width: 1280px) {
        display: block;
    }
`

const MobileWrapper = styled(ColumnWrapper)`
    @media (min-width: 1280px) {
        display: none;
    }
`

const BackgroundImageSection = ({ image, altText, title, text, right, left }) => (
    <ImageDiv>
        <MobileWrapper>
            <TextContainer>
                <GreyH3>{title}</GreyH3>
                <Text><BlockContent blocks={text} serializers={serializers} /></Text>
            </TextContainer>
        </MobileWrapper>
        <StyledImg fluid={image} alt={altText} />
        <OverlayContainer>
            <Wrapper right={right} left={left} >
                <GreyH3>{title}</GreyH3>
                <Text><BlockContent blocks={text} serializers={serializers} /></Text>
            </Wrapper>
        </OverlayContainer>
    </ImageDiv>
)

export default BackgroundImageSection
