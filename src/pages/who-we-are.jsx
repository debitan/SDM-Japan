import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'
import Img from 'gatsby-image'

import SEO from '../components/SEO'
import Layout from '../components/Layout'
import OurActivities from '../components/OurActivities'
import BackgroundImageSection from '../components/shared/BackgroundImageSection'
import GreyH3 from '../components/shared/GreyH3'
import Text from '../components/shared/Text'
import RowWrapper from '../components/shared/RowWrapper'
import TextContainer from '../components/shared/TextContainer'
import serializers from '../components/serializers'
import ColumnWrapper from '../components/shared/ColumnWrapper'

const ColourDiv = styled('div')`
    background-color: #E4FBEF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
    max-width: 1900px;
    margin-left: auto;
    margin-right: auto;
`

const LogoWrapper = styled('div')`
    display: flex;
    flex-direction: column;
    padding: 30px;
    width: 100%;
    max-width: 980px;
`

const FlexWrapper = styled(RowWrapper)`
    padding: 10px;
    flex-direction: column;
    justify-content: space-around;

    @media (min-width: 768px) {
        flex-direction: row;
    }
`

const StyledImg = styled(Img)`
    min-width: 7.5rem;
    margin-bottom: 20px;

    @media (min-width: 768px) {
        margin-right: 40px;
    }
`

const CenterTextContainer = styled(TextContainer)`
    margin-left: auto;
    margin-right: auto;
`

const Cartoon = styled(Img)`
    width: 30rem;
    margin: 2rem 0;
    max-width: 100%;
    max-height: fit-content;
`

const SectionFiveCartoon = styled(Cartoon)`
    @media (min-width: 728px) {
        width: 80%;
    }
`

const CartoonWrapper = styled(ColumnWrapper)`
    @media (min-width: 768px) {
        flex-direction: row;
    }
`

const WhoWeArePage = () => {
    const { sanityWhoWeAre } = useStaticQuery(graphql`
        query WhoWeAreQuery {
            sanityWhoWeAre {
                _rawSectionFiveBody
                _rawSectionFourBody
                _rawSectionFourBodyCont
                _rawSectionOneBody
                _rawSectionSixBody
                _rawSectionSixBodyCont
                _rawSectionThreeBody
                _rawSectionTwoBody
                sectionFiveTitle {
                    ja
                }
                sectionFourTitle {
                    ja
                }
                sectionOneTitle {
                    ja
                }
                sectionSixTitle {
                    ja
                }
                sectionThreeTitle {
                    ja
                }
                sectionTwoTitle {
                    ja
                }
                sectionFiveImage {
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
                sectionFourBackgroundImage {
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
                sectionFourImage {
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
                sectionOneBackgroundImage {
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
                sectionSixBackgroundImage {
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
                sectionThreeImage {
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
        }
    `)

    return (
        <Layout>
            <SEO title='Who we are' />
            <BackgroundImageSection
                right
                image={sanityWhoWeAre.sectionOneBackgroundImage.image.asset.fluid}
                altText={sanityWhoWeAre.sectionOneBackgroundImage.caption.ja}
                title={sanityWhoWeAre.sectionOneTitle.ja}
                text={sanityWhoWeAre._rawSectionOneBody.ja}
            />
            <CenterTextContainer>
                <GreyH3>{sanityWhoWeAre.sectionTwoTitle.ja}</GreyH3>
                <Text><BlockContent blocks={sanityWhoWeAre._rawSectionTwoBody.ja} serializers={serializers} /></Text>
            </CenterTextContainer>
            <ColourDiv>
                <LogoWrapper>
                    <GreyH3>{sanityWhoWeAre.sectionThreeTitle.ja}</GreyH3>
                    <FlexWrapper>
                        <StyledImg fluid={sanityWhoWeAre.sectionThreeImage.image.asset.fluid} alt={sanityWhoWeAre.sectionThreeImage.caption.ja} />
                        <TextContainer maxWidth='30rem'>
                            <p>
                                <BlockContent blocks={sanityWhoWeAre._rawSectionThreeBody.ja} serializers={serializers} />
                            </p>
                        </TextContainer>
                    </FlexWrapper>
                </LogoWrapper>
            </ColourDiv>
            <BackgroundImageSection
                right
                image={sanityWhoWeAre.sectionFourBackgroundImage.image.asset.fluid}
                altText={sanityWhoWeAre.sectionFourBackgroundImage.caption.ja}
                title={sanityWhoWeAre.sectionFourTitle.ja}
                text={sanityWhoWeAre._rawSectionFourBody.ja}
            />
            <ColumnWrapper>
                <TextContainer>
                    <p>
                        <BlockContent blocks={sanityWhoWeAre._rawSectionFourBodyCont.ja} serializers={serializers} />
                    </p>
                    <CartoonWrapper>
                        <Cartoon fluid={sanityWhoWeAre.sectionFourImage[0].image.asset.fluid} alt={sanityWhoWeAre.sectionFourImage[0].caption.ja} />
                        <Cartoon fluid={sanityWhoWeAre.sectionFourImage[1].image.asset.fluid} alt={sanityWhoWeAre.sectionFourImage[1].caption.ja} />
                    </CartoonWrapper>
                </TextContainer>
            </ColumnWrapper>
            <CenterTextContainer>
                <GreyH3>{sanityWhoWeAre.sectionFiveTitle.ja}</GreyH3>
                <Text><BlockContent blocks={sanityWhoWeAre._rawSectionFiveBody.ja} serializers={serializers} /></Text>
                <div>
                    <SectionFiveCartoon fluid={sanityWhoWeAre.sectionFiveImage.image.asset.fluid} alt={sanityWhoWeAre.sectionFiveImage.caption.ja} />
                </div>
            </CenterTextContainer>
            <BackgroundImageSection
                left
                image={sanityWhoWeAre.sectionSixBackgroundImage.image.asset.fluid}
                altText={sanityWhoWeAre.sectionSixBackgroundImage.caption.ja}
                title={sanityWhoWeAre.sectionSixTitle.ja}
                text={sanityWhoWeAre._rawSectionSixBody.ja}
            />
            <CenterTextContainer>
                <p>
                    <BlockContent blocks={sanityWhoWeAre._rawSectionSixBodyCont.ja} serializers={serializers} />
                </p>
            </CenterTextContainer>
            <OurActivities />
        </Layout>
    )
}

export default WhoWeArePage
