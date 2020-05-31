import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"

import serializers from "../components/serializers"
import SEO from "../components/SEO"
import Layout from "../components/Layout"
import YellowTitle from "../components/YellowTitle"
import Link from "../components/shared/Link"
import ColumnWrapper from "../components/shared/ColumnWrapper"
import ContainerCentre from "../components/shared/ContainerCentre"
import BlueText from "../components/shared/BlueText"
import RowWrapper from "../components/shared/RowWrapper"
import ContentWrapper from "../components/shared/ContentWrapper"

const MapImage = styled(Img)`
  min-width: 100%;
`

const Wrapper = styled(ColumnWrapper)`
  width: 100%;
  padding: 2rem;
  border-bottom: 1px solid #979797;

  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

const MapLink = styled(Link)`
  width: 90%;
  margin: 2rem 0;

  @media (min-width: 768px) {
    margin: 2rem;
  }
`

const Logo = styled("img")`
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
        twitterUrl
        instagramLogo {
          caption {
            ja
          }
          image {
            asset {
              url
            }
          }
        }
        facebookLogo {
          caption {
            ja
          }
          image {
            asset {
              url
            }
          }
        }
        twitterLogo {
          caption {
            ja
          }
          image {
            asset {
              url
            }
          }
        }
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
      <SEO title="Contact" />
      <YellowTitle title="問い合わせ" />
      <ContentWrapper>
        <ContainerCentre>
          <Wrapper>
            <p>
              <BlockContent
                blocks={sanityContact._rawContactBody.ja}
                serializers={serializers}
              />
            </p>
            <MapLink href={staticMap.mapUrl} target="_blank">
              <MapImage fluid={staticMap.childFile.childImageSharp.fluid} />
            </MapLink>
          </Wrapper>
          <ColumnWrapper>
            <BlueText>{sanityContact.follow.ja}</BlueText>
            <RowWrapper>
              {sanityContact.instagramUrl && sanityContact.instagramLogo && (
                <Link href={sanityContact.instagramUrl} target="_blank">
                  <Logo
                    src={sanityContact.instagramLogo.image.asset.url}
                    alt={sanityContact.instagramLogo.caption.ja}
                  />
                </Link>
              )}
              {sanityContact.facebookUrl && sanityContact.facebookLogo && (
                <Link href={sanityContact.facebookUrl} target="_blank">
                  <Logo
                    src={sanityContact.facebookLogo.image.asset.url}
                    alt={sanityContact.facebookLogo.caption.ja}
                  />
                </Link>
              )}
              {sanityContact.twitterUrl && sanityContact.twitterLogo && (
                <Link href={sanityContact.twitterUrl} target="_blank">
                  <Logo
                    src={sanityContact.twitterLogo.image.asset.url}
                    alt={sanityContact.twitterLogo.caption.ja}
                  />
                </Link>
              )}
            </RowWrapper>
          </ColumnWrapper>
        </ContainerCentre>
      </ContentWrapper>
    </Layout>
  )
}

export default ContactPage
