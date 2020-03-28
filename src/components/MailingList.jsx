import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"

import serializers from "./serializers"
import RowWrapper from "../components/shared/RowWrapper"
import MailingListForm from "../components/shared/MailingListForm"

const MailingListWrapper = styled(RowWrapper)`
  background-color: rgb(236, 237, 237);
  padding: 30px 30px 0 30px;
  flex-direction: column;
`

const BoldH3 = styled("h3")`
  margin-bottom: 20px;
`

const MailingList = () => {
  const { sanityFooter } = useStaticQuery(graphql`
    query mailingListQuery {
      sanityFooter {
        _rawMailingListBody
        mailingListTitle {
          ja
        }
      }
    }
  `)

  return (
    <MailingListWrapper>
      <BoldH3>{sanityFooter.mailingListTitle.ja}</BoldH3>
      <p>
        <BlockContent
          blocks={sanityFooter._rawMailingListBody.ja}
          serializers={serializers}
        />
      </p>
      <MailingListForm />
    </MailingListWrapper>
  )
}

export default MailingList
