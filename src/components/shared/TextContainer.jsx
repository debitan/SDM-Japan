import styled from 'styled-components'

import Container from './Container'

const TextContainer = styled(Container)`
    max-width: ${props => props.maxWidth ? props.maxWidth : '768px'};
    margin: 2rem 0;
`

export default TextContainer
