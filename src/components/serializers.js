import React from 'react'
import getYouTubeId from 'get-youtube-id'
import YouTube from 'react-youtube'

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
            return (<YouTube videoId={id} />)
        }
    }
}

export default serializers
