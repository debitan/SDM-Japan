import styled from 'styled-components'

const BlueButton = styled("button")`
  margin-left: 10px;
  background-color: #3c4dc1;
  color: white;
  width: 30%;
  border-radius: 25px;
  font-size: 18px;
  font-weight: 600;
  height: 50px;
  min-height: fit-content;
  min-width: fit-content;
  padding: 10px 50px;

  @media (max-width: 480px) {
    width: 60%;
  }
`

export default BlueButton
