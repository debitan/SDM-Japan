import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import ColumnWrapper from "../shared/ColumnWrapper"
import StyledAnchor from "../shared/StyledAnchor"

const Wrapper = styled(ColumnWrapper)`
  align-items: center;
  justify-content: flex-start;

  @media (min-width: 980px) {
    flex-direction: row;
  }
`

const LeftWrapper = styled("div")`
  width: 40rem;
  max-width: 100%;
  padding: 2rem 0;
`

const NewsImage = styled(Img)`
  width: 100%;
`

const RightWrapper = styled(ColumnWrapper)`
  width: 100%;
  align-items: flex-start;

  @media (min-width: 980px) {
    padding: 2rem 0;
    margin-left: 2rem;
  }
`

const Tag = styled("span")`
  color: #026ab9;
  margin-left: 2rem;
`

const Metadata = styled("span")`
  font-size: 0.8rem;
  margin: 0.5rem 0;
`

const NewsArticles = () => {
  const { sanityNews } = useStaticQuery(graphql`
    query NewsArticlesQuery {
      sanityNews {
        articles {
          _key
          title {
            ja
          }
          date
          tag {
            ja
          }
          headerImage {
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
            caption {
              ja
            }
          }
        }
      }
    }
  `)

  const formatDate = date => {
    const dateArray = date.split("-")
    return `${dateArray[1]}月${dateArray[2]}日`
  }

  return sanityNews.articles.map(article => (
    <StyledAnchor href={`/news/${article._key}`}>
      <Wrapper key={article._key}>
        <LeftWrapper>
          <NewsImage
            fluid={article.headerImage.image.asset.fluid}
            alt={article.headerImage.caption.ja}
          />
        </LeftWrapper>
        <RightWrapper>
          <Metadata>
            {formatDate(article.date)}
            <Tag>{article.tag.ja}</Tag>
          </Metadata>
          <p>{article.title.ja}</p>
        </RightWrapper>
      </Wrapper>
    </StyledAnchor>
  ))
}

export default NewsArticles
