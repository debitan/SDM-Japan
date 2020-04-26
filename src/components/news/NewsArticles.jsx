import React, { useState } from "react"
import styled from "styled-components"
import moment from "moment"

import ColumnWrapper from "../shared/ColumnWrapper"
import StyledAnchor from "../shared/StyledAnchor"
import ContainerCentre from "../shared/ContainerCentre"
import GreyH3 from "../shared/GreyH3"
import Link from "../shared/Link"
import { NarrowCoverImage, WideCoverImage } from "../shared/Images"
import BlueButton from "../shared/BlueButton"
import WhiteButton from "../shared/WhiteButton"
import scrollTo from "gatsby-plugin-smoothscroll"

const Wrapper = styled(ColumnWrapper)`
  align-items: center;
  justify-content: flex-start;

  @media (min-width: 980px) {
    flex-direction: row;
  }
`

const LeftWrapper = styled(ColumnWrapper)`
  width: 40rem;
  max-width: 100%;
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

const BorderContainer = styled(ContainerCentre)`
  border-top: ${props =>
    props.border ? "0.4rem solid rgb(137, 234, 234)" : "none"};
`

const UnderlinedLink = styled(Link)`
  text-decoration: underline;
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

const NewsArticles = ({ data, border, title, link, limit = 10 }) => {
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
    <BorderContainer border={border} id="#top">
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
                {formatDate(article.date)}
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
    </BorderContainer>
  )
}

export default NewsArticles
