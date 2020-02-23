import styled from 'styled-components'

const WhiteButton = styled("button")`
  background-color: white;
  color: #3c4dc1;
  width: 30%;
  border-radius: 25px;
  border: 2px solid #3c4dc1;
  font-size: 1.1rem;
  height: 50px;
  min-height: fit-content;
  min-width: fit-content;
  min-inline-size: max-content;
  padding: 0.6rem 3.2rem;
  max-width: 100%;

  @media (max-width: 480px) {
    width: 60%;
  }

  :hover {
    opacity: 80%;
  }
`

export default WhiteButton
