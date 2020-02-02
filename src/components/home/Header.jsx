import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'
import Img from 'gatsby-image'

import nipponFoundation from '../../images/nipponFoundation.svg'
import serializers from '../serializers'
import Container from '../shared/Container'
import ColumnWrapper from '../shared/ColumnWrapper'
import RowWrapper from '../shared/RowWrapper'

const HeaderTopDiv = styled('div')`
    display: flex;
    justify-content: center;
    align-items: top;
    min-height: fit-content;
    max-width: 1900px;
    margin-left: auto;
    margin-right: auto;
`

const TopDiv = styled('div')`
    display: flex;
    justify-content: center;
    align-items: top;
    margin-bottom: 1rem;
    min-height: fit-content;
    max-width: 1900px;
    margin-left: auto;
    margin-right: auto;
    background-color: #FFF691;
`

const GreenText = styled('h5')`
    margin: 2rem 0;
    color: #2CADAD;
    max-width: 35rem;
    h5 {font-size: 1.1rem;}
`

const BlackText = styled('p')`
    color: black;
    max-width: 100%;
    line-height: 1.5rem;
    margin: 2rem;
`

const StyledImg = styled(Img)`
    width: 100%;

    @media (min-width: 1280px) {
        width: 50%;
    }
`

const FoundationLogo = styled('img')`
    width: 10rem;
`

const InnerContainer = styled(Container)`
    margin-left: auto;
    margin-right: auto;
`

const Wrapper = styled(ColumnWrapper)`
    width: 100%;
    justify-content: space-between;

    @media (min-width: 1280px) {
        flex-direction: row;
    }
`

const WrapperReverse = styled(Wrapper)`
    margin: 1rem 0;
    border-bottom: dashed 3px black;
    @media (min-width: 1280px) {
        flex-direction: row-reverse;
    }
`

const SkillsWrapper = styled(Wrapper)`
    padding: 1rem 0;
    justify-content: center;

    @media (min-width: 1280px) {
    justify-content: flex-start;
    align-items: flex-start;
    }
`

const WhiteCircle = styled('div')`
    width: 12rem;
    background-color: white;
    border-radius: 50%;
    height: 12rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SkillLogo = styled('img')`
    width: 3rem;
    margin: 0 1rem;
`

const ListWrapper = styled(ColumnWrapper)`
    align-items: flex-start;
`

const SkillWrapper = styled(RowWrapper)`
    margin: 1rem 0;
`

const SkillText = styled('span')`
    color: black;
`

const CartoonText = styled('span')`
    font-size: 0.8rem;
    margin: 0.5rem 0;
    font-weight: 600;
`

const Header = () => {
    const { sanityHomePage } = useStaticQuery(graphql`
        query HeaderQuery {
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
                        url
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

    return (
        <>
            <HeaderTopDiv>
                <InnerContainer>
                    <Wrapper>
                        <StyledImg fluid={sanityHomePage.headerImage.image.asset.fluid} alt={sanityHomePage.headerImage.caption.ja} />
                        <ColumnWrapper>
                            <GreenText><BlockContent blocks={sanityHomePage._rawHeader.ja} serializers={serializers} /></GreenText>
                            <StyledImg fluid={sanityHomePage.cartoonImage.image.asset.fluid} alt={sanityHomePage.cartoonImage.caption.ja} />
                            <CartoonText>{sanityHomePage.cartoonBody.ja}</CartoonText>
                        </ColumnWrapper>
                    </Wrapper>
                </InnerContainer>
            </HeaderTopDiv>
            <TopDiv>
                <InnerContainer>
                    <WrapperReverse>
                        <FoundationLogo src={nipponFoundation} alt='日本財団のロゴ' />
                        <BlackText><BlockContent blocks={sanityHomePage._rawIntro.ja} serializers={serializers} /></BlackText>
                    </WrapperReverse>
                    <SkillsWrapper>
                        <WhiteCircle>
                            <BlackText>{sanityHomePage.skillTitle.ja}</BlackText>
                        </WhiteCircle>
                        <ListWrapper>
                            {sanityHomePage.skill.map(skill =>
                                <SkillWrapper key={skill.skillImage.caption.ja}>
                                    <SkillLogo src={skill.skillImage.image.asset.url} alt={skill.skillImage.caption.ja} />
                                    <SkillText>{skill.skill.ja}</SkillText>
                                </SkillWrapper>
                            )}
                        </ListWrapper>
                    </SkillsWrapper>
                </InnerContainer>
            </TopDiv>
        </>
    )
}

export default Header
