import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"

import readyFor from "../images/readyFor.svg"
import serializers from "./serializers"
import BlueButton from "./shared/BlueButton"
import ColumnWrapper from "./shared/ColumnWrapper"
import GreyH3 from "./shared/GreyH3"
import RowWrapper from "./shared/RowWrapper"
import StyledAnchor from "./shared/StyledAnchor"
import ContainerCentre from "./shared/ContainerCentre"

const ColourDiv = styled("div")`
  background-color: #fff691;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  max-width: 2560px;
  margin-left: auto;
  margin-right: auto;
`

const DonationWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 290px;
  max-width: 60rem;
  max-width: 100%;
`

const FlexWrapper = styled(RowWrapper)`
  padding: 0.5rem;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`

const StyledImg = styled("img")`
  min-width: 7.5rem;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    margin-right: 40px;
  }
`

const DonationButton = styled(BlueButton)`
  padding: 0.6rem 1.5rem;
  font-size: 1rem;
`

const Donation = () => {
  const { sanityFooter } = useStaticQuery(graphql`
    query DonationQuery {
      sanityFooter {
        donateTitle {
          ja
        }
        _rawDonateBody
      }
    }
  `)

  return (
    <ColourDiv id="donate">
      <DonationWrapper>
        <ContainerCentre>
          <GreyH3>{sanityFooter.donateTitle.ja}</GreyH3>
          <FlexWrapper>
            <StyledImg src={readyFor} alt="Ready forのロゴ" />
            <ColumnWrapper>
              <p>
                <BlockContent
                  blocks={sanityFooter._rawDonateBody.ja}
                  serializers={serializers}
                />
              </p>
              <StyledAnchor
                href="https://readyfor.jp/projects/talkingmats"
                target="_blank"
              >
                <DonationButton>
                  レディーフォーのサイトで詳しく読む
                </DonationButton>
              </StyledAnchor>
            </ColumnWrapper>
          </FlexWrapper>
        </ContainerCentre>
      </DonationWrapper>
    </ColourDiv>
  )
}

export default Donation
