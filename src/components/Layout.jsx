import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import Helmet from 'react-helmet'

import SEO from "./SEO"
import NavBar from "./NavBar"
import Footer from "./Footer"
import MailingList from "./MailingList"
import Donation from "./Donation"

const MobileNoOverflowWrapper = styled("body")`
  overflow-x: hidden;
  font-family: "M PLUS Rounded 1c", sans-serif;
  @media (min-width: 992px) {
    overflow-x: visible;
  }
`

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 90%;

    @media (min-width: 480px) {
        font-size: 93%;
      }
      @media (min-width: 768px) {
        font-size: 97%;
      }
      @media (min-width: 992px) {
        font-size: 100%;
      }
  }
`

function Layout({ children }) {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </Helmet>
      <SEO lang="ja" />
      <GlobalStyle />
      <MobileNoOverflowWrapper>
        <NavBar />
        {children}
        <Donation />
        <MailingList />
        <Footer />
      </MobileNoOverflowWrapper>
    </>
  )
}
export default Layout
