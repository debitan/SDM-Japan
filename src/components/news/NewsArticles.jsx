import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import moment from "moment"

import ColumnWrapper from "../shared/ColumnWrapper"
import StyledAnchor from "../shared/StyledAnchor"
import ContainerCentre from "../shared/ContainerCentre"
import GreyH3 from "../shared/GreyH3"
import Link from "../shared/Link"

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

const BorderContainer = styled(ContainerCentre)`
  border-top: ${props =>
    props.border ? "0.4rem solid rgb(137, 234, 234)" : "none"};
`

const UnderlinedLink = styled(Link)`
  text-decoration: underline;
`

const NewsArticles = ({ data, border, title, link, limit }) => {
  const formatDate = date => {
    const dateArray = date.split("-")
    return `${dateArray[0]}年${dateArray[1]}月${dateArray[2]}日`
  }

  const sortedData = data.articles.sort((a, b) => {
    a = moment(a.date).format()
    b = moment(b.date).format()
    return a > b ? -1 : a < b ? 1 : 0
  })

  const slicedData = limit ? sortedData.slice(0, 2) : sortedData

  return (
    <BorderContainer border={border}>
      {title && <GreyH3>ニュース</GreyH3>}
      {slicedData.map(article => (
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
                {article.tag ? <Tag>{article.tag.ja}</Tag> : null}
              </Metadata>
              <p>{article.title.ja}</p>
            </RightWrapper>
          </Wrapper>
        </StyledAnchor>
      ))}
      <ColumnWrapper>
        {link && <UnderlinedLink href="/news">ニュース一覧</UnderlinedLink>}
      </ColumnWrapper>
    </BorderContainer>
  )
}

export default NewsArticles
