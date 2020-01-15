import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Container from 'react-bootstrap/Container'

import SEO from './SEO'
import NavBar from './NavBar'
import Footer from './Footer'
import MailingList from './MailingList'

const MobileNoOverflowWrapper = styled('body')`
  overflow-x: hidden;
  font-family: 'Hepta Slab', serif;
  @media (min-width: 992px) {
      overflow-x: visible;
  }
`

function Layout ({children}) {
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
      <MobileNoOverflowWrapper>
        <NavBar />
        <Container>
          {children}
        </Container>
        <MailingList />
        <Footer />
      </MobileNoOverflowWrapper>
    </>
  )
}
export default Layout
