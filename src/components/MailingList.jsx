import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"

import serializers from "./serializers"

const MailingListWrapper = styled("div")`
  background-color: rgb(236, 237, 237);
  padding: 30px 30px 0 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const BoldH3 = styled("h3")`
  font-weight: 600;
  margin-bottom: 20px;
`

const Form = styled("form")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 720px;
  margin-top: 10px;
  height: 50px;

  @media (max-width: 480px) {
    flex-direction: column;
    height: 120px;
    justify-content: space-between;
  }
`

const Input = styled("input")`
  width: 60%;
  border: 1px solid #979797;
  padding: 10px;
  font-size: 18px;

  @media (max-width: 480px) {
    width: 100%;
  }
`

const Submit = styled("button")`
  margin-left: 10px;
  background-color: #3c4dc1;
  color: white;
  width: 30%;
  border-radius: 25px;
  font-size: 18px;
  font-weight: 600;
  height: 50px;

  @media (max-width: 480px) {
    width: 60%;
  }
`

const MailingList = () => {
  const { sanityFooter } = useStaticQuery(graphql`
    query mailingListQuery {
      sanityFooter {
        _rawMailingListBody
        _rawMailingListTitle
      }
    }
  `)

  return (
    <MailingListWrapper>
      <BoldH3>
        {sanityFooter._rawMailingListTitle.ja}
      </BoldH3>
      <p>
        <BlockContent blocks={sanityFooter._rawMailingListBody.ja} serializers={serializers} />
      </p>
      <Form id="mailingList">
        <Input type="email" id="email" name="email" required />
        <Submit type="submit">登録</Submit>
      </Form>
    </MailingListWrapper>
  )
}

export default MailingList
