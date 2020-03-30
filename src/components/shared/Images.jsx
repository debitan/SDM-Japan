import styled from "styled-components"
import Img from "gatsby-image"

const NarrowCoverImage = styled(Img)`
  width: 13rem;

  @media (max-width: 992px) {
    width: 100%;
    max-width: 20rem;
    min-width: 12rem;
    margin: 2rem 0 0 0;
  }
`

const WideCoverImage = styled(Img)`
  min-height: 13rem;
  min-width: 30rem;
  max-width: 100%;
  margin: 2rem 0 0 0;
  max-height: 190px;

  @media (min-width: 992px) {
    width: 100%;
    max-width: 20rem;
    min-width: 12rem;
    margin: 1rem 0;
  }
`

export { NarrowCoverImage, WideCoverImage }
