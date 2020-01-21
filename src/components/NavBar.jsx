import React from 'react'
import styled from 'styled-components'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Location } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import StyledAnchor from './shared/StyledAnchor'
import RowWrapper from './shared/RowWrapper'

// import MyContext from './MyContext'

const StyledNavbar = styled(Navbar)`
    background-color: rgb(137, 234, 234);
    padding: 0 !important;
    button {
        border: none;
        :focus {
            outline: none;
        }
    }
`

const StyledNavDropdown = styled(NavDropdown)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 18px;

    > a:first-child {
        color: black !important;
        padding: 0 !important;
        margin: 15px 10px;
    }

    > div {
        text-align: center;
        background-color: rgb(137, 234, 234);
        border: none;
        font-size: 18px;
        margin: 0;
        border-radius: 0;
        width: 8gi0%;
        min-width: 240px;
        left: auto;
    }

    & div > a {
        white-space: normal !important;
        font-size: 16px;
        min-width: fit-content;
    }
`

const StyledLink = styled(StyledAnchor)`
    align-self: center;
    font-size: 18px;
    margin: 10px 15px;
    border-bottom: ${props => props.location === props.href ? '2px solid black' : 'none'};
`

const DonationLink = styled(RowWrapper)`
    background-color: blue;
`

const LogoWrapper = styled(RowWrapper)`
    justify-content: space-between;
`

const StyledImage = styled(Img)`
    width: 30rem;
`

const Phone = styled('span')`
    font-size: 1.2rem;
    display: none;

    @media (min-width: 768px) {
        display: block;
    }
`

function NavBar() {
    const { sanityHeader } = useStaticQuery(graphql`
        query headerQuery {
            sanityHeader {
                logo {
                  caption {
                    ja
                    en
                  }
                  image {
                    asset {
                      fluid {
                        ...GatsbySanityImageFluid
                      }
                    }
                  }
                }
                phone
            }
        }
    `)

    return (
        // <MyContext.Consumer>
        //     {context =>
        <Location>
            {({ location }) => {
                return (
                    <>
                        <Container>
                            <LogoWrapper>
                                <StyledImage fluid={sanityHeader.logo.image.asset.fluid} alt={sanityHeader.logo.caption.ja} />
                                <Phone>{sanityHeader.phone}</Phone>
                            </LogoWrapper>
                        </Container>
                        <StyledNavbar expand="lg">
                            <Container>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="collapsible-navbar-nav">
                                    <Nav className="mr-auto ml-auto">
                                        <StyledLink href="/" location={location.pathname}>Home</StyledLink>
                                        <StyledNavDropdown title="私たちのついて" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="/who-we-are">私たちについて</NavDropdown.Item>
                                            <NavDropdown.Item href="/team">チーム</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">活動報告書</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">出版・メディア</NavDropdown.Item>
                                        </StyledNavDropdown>
                                        <StyledNavDropdown title="私たちの活動" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">意思決定支援実践のための総合プログラム開発</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">研修 ・ ワークショップ</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">トーキングマット</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">他団体への協賛</NavDropdown.Item>
                                        </StyledNavDropdown>
                                        <StyledNavDropdown title="あなたにできること" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">講師を依頼する</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">イベント参加</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">会員になる</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">メーリングリスト登録・SNSフォローする</NavDropdown.Item>
                                        </StyledNavDropdown>
                                        <StyledLink href="/news" location={location.pathname}>ニューズ</StyledLink>
                                        <StyledLink href="/contact" location={location.pathname}>問い合わせ</StyledLink>
                                        <DonationLink>
                                            <StyledLink style={{ "color": "white", "borderColor": "white" }} href="/donate" location={location.pathname}>寄付する</StyledLink>
                                        </DonationLink>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </StyledNavbar>
                    </>
                )
            }}
        </Location>
        // }
        // </MyContext.Consumer>
    )
}

export default NavBar
