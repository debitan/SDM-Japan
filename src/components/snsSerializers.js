import React from "react"
import styled from "styled-components"
import getYouTubeId from "get-youtube-id"
import YouTube from "react-youtube"
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import BlockContent from "@sanity/block-content-to-react"

import ColumnWrapper from "./shared/ColumnWrapper"

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

const H1 = styled("h1")`
  text-align: center;
  display: block;
  width: 100%;
  color: #5e5c5c;
`

const H2 = styled("h2")`
  text-align: center;
  display: block;
  width: 100%;
  color: #5e5c5c;
`

const H3 = styled("h3")`
  text-align: center;
  display: block;
  width: 100%;
  color: #5e5c5c;
`

const H4 = styled("h4")`
  text-align: center;
  display: block;
  width: 100%;
  color: #5e5c5c;
`

const H5 = styled("h5")`
  text-align: center;
  display: block;
  width: 100%;
  color: #5e5c5c;
`

const H6 = styled("h6")`
  text-align: center;
  display: block;
  width: 100%;
  color: #5e5c5c;
`

const serializers = {
  types: {
    youtube: ({ node }) => {
      const { url } = node
      const id = getYouTubeId(url)
      return (
        <ColumnWrapper>
          <StyledYouTube videoId={id} />
        </ColumnWrapper>
      )
    },
    captionImage: ({ node }) => {
      const sanityConfig = {
        projectId: "3xourkaf",
        dataset: "production",
      }

      return (
        <StyledImg
          fluid={getFluidGatsbyImage(
            node.image.asset,
            { maxWidth: 1024 },
            sanityConfig
          )}
          alt={node.caption.ja}
        />
      )
    },
    block: props => {
      const color = props.node.children[0].marks.includes("blue")
        ? "#026AB9"
        : null

      const alignment = props.node.children[0].marks.includes("leftAlign")
        ? "left"
        : null
      switch (props.node.style) {
        case "h1":
          return (
            <>
              <br />
              <H1 style={{ color: color, textAlign: alignment }}>
                {props.children}
              </H1>
              <br />
            </>
          )
        case "h2":
          return (
            <>
              <br />
              <H2 style={{ color: color, textAlign: alignment }}>
                {props.children}
              </H2>
              <br />
            </>
          )
        case "h3":
          return (
            <>
              <br />
              <H3 style={{ color: color, textAlign: alignment }}>
                {props.children}
              </H3>
              <br />
            </>
          )
        case "h4":
          return (
            <>
              <br />
              <H4 style={{ color: color, textAlign: alignment }}>
                {props.children}
              </H4>
              <br />
            </>
          )
        case "h5":
          return (
            <>
              <br />
              <H5 style={{ color: color, textAlign: alignment }}>
                {props.children}
              </H5>
              <br />
            </>
          )
        case "h6":
          return (
            <>
              <br />
              <H6 style={{ color: color, textAlign: alignment }}>
                {props.children}
              </H6>
              <br />
            </>
          )
        default:
          return BlockContent.defaultSerializers.types.block(props)
      }
    },
  },
  marks: {
    blue: props => props.children,
    leftAlign: props => props.children,
    link: ({ mark, children }) => {
      // Read https://css-tricks.com/use-target_blank/
      const { blank, href } = mark
      return blank ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      ) : (
        <a href={href}>{children}</a>
      )
    },
  },
}

export default serializers
