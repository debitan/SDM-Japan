import React from "react"
import styled from "styled-components"

import PageHeader from "../images/pageHeader.svg"

const ColourDiv = styled("div")`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  max-width: 1900px;
  margin-left: auto;
  margin-right: auto;
  height: 230px;
  margin-bottom: -1rem;

  @media (min-width: 992px) {
    margin-bottom: 5.5rem;
  }
`

const Title = styled("h5")`
  padding-top: 6rem;
  text-align: center;
`

const StyledImg = styled("img")`
  @media (min-width: 992px) {
    min-width: 1900px;
    min-height: 10rem;
  }
`

const OverlayContainer = styled("div")`
  position: absolute;
  display: block;
  max-width: 1900px;
  padding: 0 2rem;
`

const YellowTitle = ({ title }) => {
  return (
    <ColourDiv id="top">
      <StyledImg src={PageHeader} />
      <OverlayContainer>
        <Title>{title}</Title>
      </OverlayContainer>
    </ColourDiv>
  )
}

export default YellowTitle
