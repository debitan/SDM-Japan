import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BlockContent from "@sanity/block-content-to-react"
import snsSerializers from "../components/snsSerializers"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import YellowTitle from "../components/YellowTitle"
import ContainerCentre from "../components/shared/ContainerCentre"
import ColumnWrapper from "../components/shared/ColumnWrapper"
import StyledAnchor from "../components/shared/StyledAnchor"
import MailingListForm from "../components/shared/MailingListForm"

const BottomBorderContainer = styled(ContainerCentre)`
  border-bottom: 1px solid #5e5c5c;
`

const Grid = styled("section")`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;

  > div {
    margin: 1rem 0;
  }

  > div:nth-child(even) {
    margin-left: 1rem;
  }
`

const StyledColumn = styled(ColumnWrapper)`
  width: 100%;

  @media (min-width: 768px) {
    width: 48%;
  }
`

const StyledImg = styled(Img)`
  width: 100%;
`

const StyledSvg = styled("img")`
  margin: 2rem 0;
`

const StyledLink = styled(StyledAnchor)`
  width: 100%;
  text-align: center;
`

const YellowBox = styled("section")`
  background-color: #fff691;
  padding: 2rem;
`

const Register = () => {
  const { sanityContact, sanitySns } = useStaticQuery(graphql`
    query SNSQuery {
      sanityContact {
        facebookUrl
        instagramUrl
        twitterUrl
      }
      sanitySns {
        title {
          ja
        }
        _rawMailingList
        _rawSns
        facebookImage {
          caption {
            ja
          }
          image {
            asset {
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
        instagramImage {
          caption {
            ja
          }
          image {
            asset {
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
        twitterImage {
          caption {
            ja
          }
          image {
            asset {
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
        facebookLink {
          asset {
            url
          }
        }
        instagramLink {
          asset {
            url
          }
        }
        twitterLink {
          asset {
            url
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="What we do" />
      <YellowTitle title={sanitySns.title.ja} />
      <BottomBorderContainer>
        <BlockContent
          blocks={sanitySns._rawMailingList.ja}
          serializers={snsSerializers}
        />
        <YellowBox>
          <MailingListForm />
        </YellowBox>
      </BottomBorderContainer>
      <ContainerCentre>
        <BlockContent
          blocks={sanitySns._rawSns.ja}
          serializers={snsSerializers}
        />
        <Grid>
          {sanityContact.facebookUrl &&
            sanitySns.facebookImage &&
            sanitySns.facebookLink && (
              <StyledColumn>
                <StyledLink href={sanityContact.facebookUrl}>
                  <StyledImg
                    fluid={sanitySns.facebookImage.image.asset.fluid}
                    alt={sanitySns.facebookImage.caption.ja}
                  />
                </StyledLink>
                <StyledLink href={sanityContact.facebookUrl}>
                  <StyledSvg src={sanitySns.facebookLink.asset.url} />
                </StyledLink>
              </StyledColumn>
            )}
          {sanityContact.instagramUrl &&
            sanitySns.instagramImage &&
            sanitySns.instagramLink && (
              <StyledColumn>
                <StyledLink href={sanityContact.instagramUrl}>
                  <StyledImg
                    fluid={sanitySns.instagramImage.image.asset.fluid}
                    alt={sanitySns.instagramImage.caption.ja}
                  />
                </StyledLink>
                <StyledLink href={sanityContact.instagramUrl}>
                  <StyledSvg src={sanitySns.instagramLink.asset.url} />
                </StyledLink>
              </StyledColumn>
            )}
          {sanityContact.twitterUrl &&
            sanitySns.twitterImage &&
            sanitySns.twitterLink && (
              <StyledColumn>
                <StyledLink href={sanityContact.twitterUrl}>
                  <StyledImg
                    fluid={sanitySns.twitterImage.image.asset.fluid}
                    alt={sanitySns.twitterImage.caption.ja}
                  />
                </StyledLink>
                <StyledLink href={sanityContact.twitterUrl}>
                  <StyledSvg src={sanitySns.twitterLink.asset.url} />
                </StyledLink>
              </StyledColumn>
            )}
        </Grid>
      </ContainerCentre>
    </Layout>
  )
}

export default Register
