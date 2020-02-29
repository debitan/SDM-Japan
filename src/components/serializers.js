import React from 'react'
import styled from 'styled-components'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'

import ColumnWrapper from './shared/ColumnWrapper'

const StyledImg = styled(Img)`
    margin: 2rem 0;
    width: 75%;
    margin-left: auto;
    margin-right: auto;
`

const StyledYouTube = styled(YouTube)`
    margin: 2rem 0;
    max-width: 100%;
`

const serializers = {
    types: {
        code: props => (
            <pre data-language={props.node.language}>
                <code>{props.node.code}</code>
            </pre>
        ),
        localeString: props => (
            <pre data-language={props.node.language}>
                <code>{props.node.code}</code>
            </pre>
        ),
        youtube: ({node}) => {
            const { url } = node
            const id = getYouTubeId(url)
            return (
                <ColumnWrapper>
                    <StyledYouTube videoId={id} />
                </ColumnWrapper>
            )
        },
        captionImage: ({node}) => {
            const sanityConfig = {
                projectId: "3xourkaf",
                dataset: "production",
            }

            return (<StyledImg fluid={getFluidGatsbyImage(node.image.asset, {maxWidth: 1024}, sanityConfig)} alt={node.caption.ja} />)
        },
    }
}

export default serializers
