import React, { useState } from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"

import serializers from "./serializers"
import BlueButton from '../components/shared/BlueButton'
import RowWrapper from '../components/shared/RowWrapper'

const MailingListWrapper = styled(RowWrapper)`
  background-color: rgb(236, 237, 237);
  padding: 30px 30px 0 30px;
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


const Button = styled(BlueButton)`
  margin-left: 10px;
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

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  })

  const [email, setEmail] = useState()

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg }
      })
      setEmail('')
    } else {
      setStatus({
        info: { error: true, msg: msg }
      })
    }
  }

  const handleOnChange = e => {
    e.persist()
    setEmail(e.target.value)
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null }
    })
  }

  const handleOnSubmit = async e => {
    e.preventDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    const res = await fetch('/api/mailingList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: email })
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }

  return (
    <MailingListWrapper>
      <BoldH3>
        {sanityFooter.mailingListTitle.ja}
      </BoldH3>
      <p>
        <BlockContent blocks={sanityFooter._rawMailingListBody.ja} serializers={serializers} />
      </p>
      <Form id="mailingList" onSubmit={handleOnSubmit}>
        <Input type="email" id="email" name="email" required onChange={handleOnChange} />
        <Button type="submit" disabled={status.submitting}>
          {!status.submitting
            ? !status.submitted
              ? '登録'
              : status.info.msg
            : '登録中'}
        </Button>
      </Form>
    </MailingListWrapper>
  )
}

export default MailingList
