import styled from "styled-components"
import Img from "gatsby-image"

const NarrowCoverImage = styled(Img)`
  width: 13rem;
  margin: 2rem 0;
`

const WideCoverImage = styled(Img)`
  min-height: 13rem;
  min-width: 80vw;
  margin: 2rem 0;

  @media (min-width: 992px) {
    min-width: 100%;
    max-width: 20rem;
  }
`

export { NarrowCoverImage, WideCoverImage }
