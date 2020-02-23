import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'

import ContainerCentre from './shared/ContainerCentre'
import GreyH3 from './shared/GreyH3'
import ColumnWrapper from './shared/ColumnWrapper'
import BlueText from './shared/BlueText'
import RowWrapper from './shared/RowWrapper'
import ImageGallery from './ImageGallery'

import Check from '../images/check-solid.svg'

const LeftWrapper = styled('div')`
    width: 19rem;
    max-width: 100%;
    border-top: 0.5rem solid rgb(137, 234, 234);
    padding: 2rem 0;
`

const Tag = styled('span')`
    color: ${props => props.color};
    padding-right: 2rem;
`

const WorkshopWrapper = styled(ColumnWrapper)`
    align-items: flex-start;
`

const AudienceWrapper = styled(RowWrapper)`
    align-items: flex-start;
    max-width: 100%;
    justify-content: flex-start;
    flex-flow: wrap;
    margin: 2rem 0;
`

const ContentsWrapper = styled(RowWrapper)`
    align-items: flex-start;
    max-width: 100%;
    justify-content: flex-start;
    flex-flow: initial;
`

const AudienceText = styled('span')`
    min-width: fit-content;
`

const GreenCheck = styled('img')`
    width: 1rem;
    margin: 0.5rem;
`

const Workshops = () => {
    const { sanityWorkshops } = useStaticQuery(graphql`
    query WorkshopsQuery {
        sanityWorkshops {
          workshop {
            audience {
              ja
            }
            audienceTitle {
              ja
            }
            contents {
              ja
            }
            image {
              caption {
                ja
              }
              image {
                asset {
                id
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
            subTitle {
              ja
            }
            tag {
              colour {
                hex
              }
              tag {
                ja
              }
            }
            title {
              ja
            }
          }
        }
      }
    `)

    return (
        <>
            {sanityWorkshops.workshop.map(item =>
                <div key={item.title.ja}>
                    <ContainerCentre>
                        <WorkshopWrapper>
                            <LeftWrapper>
                                {item.tag.map(tag =>
                                    <Tag color={tag.colour.hex} key={tag.tag.ja}>{tag.tag.ja}</Tag>
                                )}
                            </LeftWrapper>
                            <GreyH3>{item.title.ja}</GreyH3>
                            <BlueText>{item.subTitle.ja}</BlueText>
                            <AudienceWrapper>
                                <AudienceText>{item.audienceTitle.ja}</AudienceText>
                                <AudienceText>{item.audience.ja}</AudienceText>
                            </AudienceWrapper>
                            {item.contents.map(content =>
                                <ContentsWrapper key={content.ja}>
                                    <GreenCheck src={Check} />
                                    <span>{content.ja}</span>
                                </ContentsWrapper>
                            )}
                        </WorkshopWrapper>
                    </ContainerCentre>
                    <ImageGallery
                        itemsPerRow={3}
                        images={item.image.map(image => image)}
                    />
                </div>
            )}
        </>
    )
}

export default Workshops
