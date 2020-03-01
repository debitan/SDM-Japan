import React from 'react'
import styled from 'styled-components'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'
import Img from 'gatsby-image'
import { getFluidGatsbyImage } from 'gatsby-source-sanity'
import BlockContent from '@sanity/block-content-to-react'

import ColumnWrapper from './shared/ColumnWrapper'

const StyledImg = styled(Img)`
    margin: 2rem 0;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`

const StyledYouTube = styled(YouTube)`
    margin: 2rem 0;
    max-width: 100%;
`

const H1 = styled('h1')`
    text-align: center;
    display: block;
    width: 100%;
`

const H2 = styled('h2')`
    text-align: center;
    display: block;
    width: 100%;
`

const H3 = styled('h3')`
    text-align: center;
    display: block;
    width: 100%;
`

const H4 = styled('h4')`
    text-align: center;
    display: block;
    width: 100%;
`

const H5 = styled('h5')`
    text-align: center;
    display: block;
    width: 100%;
`

const H6 = styled('h6')`
    text-align: center;
    display: block;
    width: 100%;
`

const serializers = {
    types: {
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
        block: (props) => {
            switch (props.node.style) {
                case 'h1':
                    return <><br/><H1>{props.children}</H1></>
                case 'h2':
                    return <><br/><H2>{props.children}</H2></>
                case 'h3':
                    return <><br/><H3>{props.children}</H3></>
                case 'h4':
                    return <><br/><H4>{props.children}</H4></>
                case 'h5':
                    return <><br/><H5>{props.children}</H5></>
                case 'h6':
                    return <><br/><H6>{props.children}</H6></>
                default:
                    return BlockContent.defaultSerializers.types.block(props)
            }
        }
    },
}

export default serializers
