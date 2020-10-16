import React, { useState } from "react"
import styled from "styled-components"
import moment from "moment"

import ColumnWrapper from "../shared/ColumnWrapper"
import StyledAnchor from "../shared/StyledAnchor"
import ContainerCentre from "../shared/ContainerCentre"
import GreyH3 from "../shared/GreyH3"
import UnderlinedLink from "../shared/UnderlinedLink"
import { NarrowCoverImage, WideCoverImage } from "../shared/Images"
import BlueButton from "../shared/BlueButton"
import WhiteButton from "../shared/WhiteButton"
import scrollTo from "gatsby-plugin-smoothscroll"

const Wrapper = styled(ColumnWrapper)`
  align-items: center;
  justify-content: flex-start;

  div:nth-child(odd) {
    margin: 0 1rem 1rem 0;
  }

  @media (min-width: 480px) {
    flex-direction: row;
  }
`

const LeftWrapper = styled(ColumnWrapper)`
  max-width: 20rem;

  @media (min-width: 768px) {
    width: 30rem;
  }
`

const RightWrapper = styled(ColumnWrapper)`
  width: 100%;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-start;
    margin-left: 2rem;
    padding: 2rem 0;
  }
`

const Tag = styled("span")`
  color: #026ab9;
  margin-left: 2rem;
`

const Metadata = styled("span")`
  font-size: 0.8rem;
  align-self: flex-start;
`

const ButtonWrapper = styled("div")`
  min-width: 100%;
  padding: 2rem;
  display: grid;
  grid-auto-flow: row;
  grid-gap: 2rem;
  justify-items: center;

  @media (min-width: 768px) {
    grid-auto-flow: column;
  }
`

const NewsArticles = ({ data, title, link, limit = 10 }) => {
  const [offset, setOffset] = useState(0)

  const total = data.articles.length
  const max = offset + limit

  const formatDate = date => {
    const dateArray = date.split("-")
    return `${dateArray[0]}年${dateArray[1]}月${dateArray[2]}日`
  }

  const sortedData = data.articles.sort((a, b) => {
    a = moment(a.date).format()
    b = moment(b.date).format()
    return a > b ? -1 : a < b ? 1 : 0
  })

  const slicedData = sortedData.slice(offset, max)

  return (
    <ContainerCentre id="#top">
      {!link && (
        <ButtonWrapper>
          {offset !== 0 && (
            <WhiteButton
              onClick={() => {
                setOffset(offset - 5)
              }}
            >
              前のページへ
            </WhiteButton>
          )}
          {total > max && (
            <BlueButton
              onClick={() => {
                setOffset(offset + 5)
              }}
            >
              次のページへ
            </BlueButton>
          )}
        </ButtonWrapper>
      )}
      {title && <GreyH3>ニュース</GreyH3>}
      {slicedData.map(article => (
        <StyledAnchor href={`/news/${article._key}`}>
          <Wrapper key={article._key}>
            <LeftWrapper>
              {article.headerImage.image.asset._rawMetadata.dimensions
                .aspectRatio > 1 ? (
                <WideCoverImage
                  fluid={article.headerImage.image.asset.fluid}
                  alt={article.headerImage.caption.ja}
                />
              ) : (
                <NarrowCoverImage
                  fluid={article.headerImage.image.asset.fluid}
                  alt={article.headerImage.caption.ja}
                />
              )}
            </LeftWrapper>
            <RightWrapper>
              <Metadata>
                <span>{formatDate(article.date)}</span>
                {article.tag ? <Tag>{article.tag.ja}</Tag> : null}
              </Metadata>
              <p>{article.title.ja}</p>
            </RightWrapper>
          </Wrapper>
        </StyledAnchor>
      ))}
      {!link && (
        <ButtonWrapper>
          {offset !== 0 && (
            <WhiteButton
              onClick={() => {
                scrollTo("#top")
                setOffset(offset - 5)
              }}
            >
              前のページへ
            </WhiteButton>
          )}
          {total > max && (
            <BlueButton
              onClick={() => {
                scrollTo("#top")
                setOffset(offset + 5)
              }}
            >
              次のページへ
            </BlueButton>
          )}
        </ButtonWrapper>
      )}
      <ColumnWrapper>
        {link && <UnderlinedLink href="/news">ニュース一覧</UnderlinedLink>}
      </ColumnWrapper>
    </ContainerCentre>
  )
}

export default NewsArticles
