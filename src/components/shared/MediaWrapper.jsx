import styled from "styled-components"

import ColumnWrapper from "./ColumnWrapper"

const MediaWrapper = styled(ColumnWrapper)`
  width: 100%;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }
`

export default MediaWrapper
