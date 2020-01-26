import React from 'react'
import styled from 'styled-components'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Location } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'

import logo from '../images/logo.svg'
import StyledAnchor from './shared/StyledAnchor'
import RowWrapper from './shared/RowWrapper'
import Link from './shared/Link'

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
        border-bottom: ${props => props.links.includes(props.location) ? '2px solid black' : 'none'};
    }

    > div {
        text-align: center;
        background-color: rgb(137, 234, 234);
        border: none;
        font-size: 18px;
        margin: 0;
        border-radius: 0;
        width: 80%;
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

const StyledImage = styled('img')`
    width: 30rem;
`

const Phone = styled('span')`
    font-size: 1.2rem;
    display: none;

    @media (min-width: 768px) {
        display: block;
    }
`

const DropdownItem = styled(NavDropdown.Item)`
    background-color: ${props => props.location === props.href ? 'white' : 'none'} !important;
`

function NavBar() {
    const { sanityHeader } = useStaticQuery(graphql`
        query headerQuery {
            sanityHeader {
                phone
            }
        }
    `)

    const aboutUsLinks = ["/who-we-are/", "/team/", "/reports/", "/publications/"]
    const activitiesLinks = ["/programme/", "/workshops/", "/talking-mat/", "/collaboration/"]
    const whatYouCanDoLinks = ["/request-a-speaker/", "/events/", "/become-a-member/", "/stay-in-touch/"]

    return (
        // <MyContext.Consumer>
        //     {context =>
        <Location>
            {({ location }) => {
                return (
                    <>
                        <Container>
                            <LogoWrapper>
                                <Link href='/'>
                                    <StyledImage src={logo} alt='SDMーJapanのロゴ' />
                                </Link>
                                <Phone>{sanityHeader.phone}</Phone>
                            </LogoWrapper>
                        </Container>
                        <StyledNavbar expand="lg">
                            <Container>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="collapsible-navbar-nav">
                                    <Nav className="mr-auto ml-auto">
                                        <StyledLink href="/" location={location.pathname}>Home</StyledLink>
                                        <StyledNavDropdown title="私たちについて" id="basic-nav-dropdown" location={location.pathname} links={aboutUsLinks}>
                                            <DropdownItem href="/who-we-are/" location={location.pathname}>私たちについて</DropdownItem>
                                            <DropdownItem href="/team/" location={location.pathname}>チーム</DropdownItem>
                                            <DropdownItem href="/reports/" location={location.pathname}>活動報告書</DropdownItem>
                                            <DropdownItem href="/publications/" location={location.pathname}>出版・メディア</DropdownItem>
                                        </StyledNavDropdown>
                                        <StyledNavDropdown title="私たちの活動" id="basic-nav-dropdown" location={location.pathname} links={activitiesLinks}>
                                            <DropdownItem href="#action/3.1" location={location.pathname}>意思決定支援実践のための総合プログラム開発</DropdownItem>
                                            <DropdownItem href="#action/3.2" location={location.pathname}>研修 ・ ワークショップ</DropdownItem>
                                            <DropdownItem href="#action/3.3" location={location.pathname}>トーキングマット</DropdownItem>
                                            <DropdownItem href="#action/3.3" location={location.pathname}>他団体への協賛</DropdownItem>
                                        </StyledNavDropdown>
                                        <StyledNavDropdown title="あなたにできること" id="basic-nav-dropdown" location={location.pathname} links={whatYouCanDoLinks}>
                                            <DropdownItem href="#action/3.1" location={location.pathname}>講師を依頼する</DropdownItem>
                                            <DropdownItem href="#action/3.2" location={location.pathname}>イベント参加</DropdownItem>
                                            <DropdownItem href="#action/3.3" location={location.pathname}>会員になる</DropdownItem>
                                            <DropdownItem href="#action/3.3" location={location.pathname}>メーリングリスト登録・SNSフォローする</DropdownItem>
                                        </StyledNavDropdown>
                                        <StyledLink href="/news/" location={location.pathname}>ニュース</StyledLink>
                                        <StyledLink href="/contact/" location={location.pathname}>問い合わせ</StyledLink>
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
