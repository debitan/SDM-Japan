import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'
import Img from 'gatsby-image'

import serializers from '../serializers'
import Container from '../shared/Container'
import ColumnWrapper from '../shared/ColumnWrapper'

import HomeWavyLine from '../../images/HomeWavyLine.svg'

const ImageDiv = styled('div')`
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: top;
    margin-bottom: 2rem;
    min-height: fit-content;
    position: relative;
    max-width: 1900px;
    margin-left: auto;
    margin-right: auto;
`

const GreenText = styled('p')`
    margin: 2rem;
    color: #2CADAD;
    line-height: 1rem;
    z-index: 1;
    max-width: 495px;

    @media (min-width: 1280px) {
        margin-right: 31rem;
    }
`

const BlackText = styled('p')`
    color: black;
    max-width: 100%;
    line-height: 1.5rem;
    margin: 2rem;
    z-index: 1;
`

const StyledImg = styled(Img)`
    width: 100vw;
    max-width: 612px;
    z-index: 0;

    @media (min-width: 768px) {
        min-height: 25rem;
    }

    @media (min-width: 1280px) {
        min-width: 41rem;
        max-height: 35rem;
    }

    @media (min-width: 1680px) {
        min-width: 50rem;
        max-height: 100%;
    }
`

const StyledSvg = styled('img')`
    z-index: 1;

    @media (min-width: 480px) {
        margin-top: 10rem;
    }

    @media (min-width: 768px) {
        margin-top: 15rem;
    }

    @media (min-width: 992px) {
        margin-top: 20rem;
    }

    @media (min-width: 1280px) {
        width: 100%;
        margin-top: 20px;
    }
`

const FoundationLogo = styled(Img)`
    z-index: 1;
    width: 10rem;
`

const OverlayContainer = styled(Container)`
    position: absolute;
    min-width: 1900px;
`

const InnerContainer = styled(Container)`
    margin-left: auto;
    margin-right: auto;
    z-index: 1;
`

const HeaderWrapper = styled(ColumnWrapper)`
    width: 100%;
    justify-content: space-between;

    @media (min-width: 1280px) {
        flex-direction: row;
    }
`

const IntroWrapper = styled(HeaderWrapper)`
    margin-top: 0rem;
    margin-bottom: 2rem;

    @media (min-width: 992px) {
        margin-top: 5rem;
    }

    @media (min-width: 1280px) {
        margin-top: -2rem;
    }
`

const SkillsWrapper = styled(IntroWrapper)`
    border-top: 1px dashed black;
    background-color: #FFF691;
    min-height: fit-content;
`

const WhiteCircle = styled('div')`
    z-index: 1;
    width: 15rem;
    background-color: white;
    border-radius: 50%;
    height: 15rem;
`

const HeaderOriginal = () => {
    const { sanityFooter, sanityHomePage } = useStaticQuery(graphql`
        query HeaderOriginalQuery {
            sanityFooter {
                nipponFoundationLogo {
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
            }
            sanityHomePage {
                headerImage {
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
                _rawHeader
                cartoonImage {
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
                cartoonBody {
                  ja
                }
                _rawIntro
                skillTitle {
                  ja
                }
                skill {
                  skill {
                    ja
                  }
                  skillImage {
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
              }
        }
    `)

    console.log(sanityFooter)

    return (
        <ImageDiv>
            <StyledSvg src={HomeWavyLine} alt='黄色い背景' />
            <OverlayContainer>
                <HeaderWrapper>
                    <StyledImg fluid={sanityHomePage.headerImage.image.asset.fluid} alt={sanityHomePage.headerImage.caption} />
                    <GreenText><BlockContent blocks={sanityHomePage._rawHeader.ja} serializers={serializers} /></GreenText>
                </HeaderWrapper>
                <InnerContainer>
                    <IntroWrapper>
                        <BlackText><BlockContent blocks={sanityHomePage._rawIntro.ja} serializers={serializers} /></BlackText>
                        <FoundationLogo fluid={sanityFooter.nipponFoundationLogo.image.asset.fluid} alt={sanityFooter.nipponFoundationLogo.caption.ja} />
                    </IntroWrapper>
                </InnerContainer>
            </OverlayContainer>
        </ImageDiv>
    )
}

export default HeaderOriginal
