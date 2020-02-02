import styled from 'styled-components'

const BlueButton = styled("button")`
  background-color: #3c4dc1;
  color: white;
  width: 30%;
  border-radius: 25px;
  font-size: 1.1rem;
  font-weight: 600;
  height: 50px;
  min-height: fit-content;
  min-width: fit-content;
  min-inline-size: max-content;
  padding: 0.6rem 3.2rem;

  @media (max-width: 480px) {
    width: 60%;
  }

  :hover {
    opacity: 80%;
  }
`

export default BlueButton
