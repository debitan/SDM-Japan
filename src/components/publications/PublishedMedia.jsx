import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import BlockContent from '@sanity/block-content-to-react'

import serializers from '../serializers'
import ContainerCentre from '../shared/ContainerCentre'
import GreyH3 from '../shared/GreyH3'
import ColumnWrapper from '../shared/ColumnWrapper'
import BlueText from '../shared/BlueText'
import BlueButton from '../shared/BlueButton'
import RowWrapper from '../shared/RowWrapper'
import Link from '../shared/Link'
import { NarrowCoverImage, WideCoverImage } from '../shared/Images'

const PublicationsContainer = styled(ContainerCentre)`
    border-bottom: 1px solid #979797;
`

const PublicationWrapper = styled(ColumnWrapper)`
    margin: 2rem 0;
    align-items: flex-start;
`

const ContentWrapper = styled(ColumnWrapper)`
    width: 100%;

    @media (min-width: 992px) {
        display: grid;
        grid-template-columns: 1fr 2fr;
    }
`

const LinkWrapper = styled(ContentWrapper)`
    flex-wrap: wrap;
    max-width: 100%;

    button {
        margin: 0.5rem 0.5rem;
    }

    @media (min-width: 992px) {
        justify-content: flex-start;
    }
`

const Description = styled('p')`
    margin: 2rem;
`

const DescriptionWrapper = styled('div')`
    max-width: 666px;
`

const PublishedMedia = () => {
    const { sanityPublications } = useStaticQuery(graphql`
        query PublishedMediaQuery {
            sanityPublications {
            publicationsTitle {
                ja
            }
            publications {
                _rawDescription
                title {
                ja
                }
                image {
                caption {
                    ja
                }
                image {
                    asset {
                        _rawMetadata
                        fluid {
                            ...GatsbySanityImageFluid
                        }
                    }
                }
                }
                publicationDate
                link {
                link {
                    ja
                }
                url
                }
            }
            }
        }

    `)

    return (
        <PublicationsContainer>
            <GreyH3>{sanityPublications.publicationsTitle.ja}</GreyH3>
            {sanityPublications.publications.map(publication =>
                <PublicationWrapper key={publication.title.ja}>
                    <BlueText>
                        {publication.title.ja}
                    </BlueText>
                    <ContentWrapper>
                        <RowWrapper>
                            {publication.image.image.asset._rawMetadata.dimensions.aspectRatio > 1 ?
                                <WideCoverImage fluid={publication.image.image.asset.fluid} alt={publication.image.caption.ja} />
                                :
                                <NarrowCoverImage fluid={publication.image.image.asset.fluid} alt={publication.image.caption.ja} />
                            }
                        </RowWrapper>
                        <DescriptionWrapper>
                            <Description>
                                <BlockContent blocks={publication._rawDescription.ja} serializers={serializers} />
                            </Description>
                            <LinkWrapper>
                                {publication.link.map(link =>
                                    <Link href={link.url} target='_blank' key={link.url}>
                                        <BlueButton>{link.link.ja}</BlueButton>
                                    </Link>
                                )}
                            </LinkWrapper>
                        </DescriptionWrapper>
                    </ContentWrapper>
                </PublicationWrapper>
            )}
        </PublicationsContainer>
    )
}

export default PublishedMedia
