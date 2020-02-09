import React from "react"
import styled from "styled-components"
import Container from "react-bootstrap/Container"
import { Location } from "@reach/router"

import StyledAnchor from "./shared/StyledAnchor"

const FooterWrapper = styled("footer")`
  background-color: rgb(236, 237, 237);
  padding: 20px;
  overflow: hidden;
`

const Grid = styled("div")`
  display: grid;
  border-top: 1px solid #979797;
`

const LeftSide = styled("div")`
  display: grid;
  grid-column: 1;
`

const RightSide = styled("div")`
  display: grid;
  grid-column: 2;
`

const FlexColumn1 = styled("div")`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column;
  max-height: fit-content;

  @media (min-width: 992px) {
    grid-column: 1;
  }
`

const FlexColumn2 = styled(FlexColumn1)`
  @media (min-width: 992px) {
    grid-column: 2;
  }
`
const FlexColumn3 = styled(FlexColumn1)`
  height: -webkit-fill-available;

  @media (min-width: 992px) {
    grid-column: 3;
  }
`

const StyledLink = styled(StyledAnchor)`
  margin: 10px 0;
  border-bottom: ${props =>
    props.location === props.href ? "2px solid black" : "none"};
  font-size: 14px;
  :hover {
        opacity: 60%;
    }
`

const BoldStyledLink = styled(StyledLink)`
  font-weight: 600;
  margin: 20px 0;
`

const LinkSection = styled("span")`
  font-weight: 600;
  font-size: 14px;
  margin: 20px 0;
`

function Footer() {
  return (
    <Location>
      {({ location }) => {
        return (
          <FooterWrapper>
            <Container>
              <Grid>
                <LeftSide>
                  <FlexColumn1>
                    <BoldStyledLink href="/" location={location.pathname}>
                      HOME
                    </BoldStyledLink>
                  </FlexColumn1>
                  <FlexColumn2>
                    <LinkSection>私たちについて</LinkSection>
                    <StyledLink href="/who-we-are/" location={location.pathname}>
                      私たちについて
                    </StyledLink>
                    <StyledLink href="/team/" location={location.pathname}>
                      チーム
                    </StyledLink>
                    <StyledLink href="/reports/" location={location.pathname}>
                      活動報告書
                    </StyledLink>
                    <StyledLink href="/publications/" location={location.pathname}>
                      メディア
                    </StyledLink>
                  </FlexColumn2>
                  <FlexColumn3>
                    <LinkSection>私たちの活動</LinkSection>
                    <StyledLink href="/what-we-do/" location={location.pathname}>
                      意思決定支援実践のための総合プログラム開発
                    </StyledLink>
                    <StyledLink href="/workshops/" location={location.pathname}>
                      研修・ワークショップ
                    </StyledLink>
                    <StyledLink href="/talking-mats/" location={location.pathname}>
                      トーキングマット
                    </StyledLink>
                    <StyledLink href="/collaboration/" location={location.pathname}>
                      他団体への協賛
                    </StyledLink>
                  </FlexColumn3>
                </LeftSide>
                <RightSide>
                  <FlexColumn1>
                    <LinkSection>あなたにできること</LinkSection>
                    <StyledLink href="/request-a-speaker/" location={location.pathname}>
                      講師を依頼する
                    </StyledLink>
                    <StyledLink href="/events/" location={location.pathname}>
                      イベント参加
                    </StyledLink>
                    <StyledLink href="/become-a-member/" location={location.pathname}>
                      会員になる
                    </StyledLink>
                    <StyledLink href="/register/" location={location.pathname}>
                      メーリングリスト登録・SNSフォローする
                    </StyledLink>
                  </FlexColumn1>
                  <FlexColumn2>
                    <BoldStyledLink href="/news/" location={location.pathname}>ニュース</BoldStyledLink>
                  </FlexColumn2>
                  <FlexColumn3>
                    <BoldStyledLink href="/contact/" location={location.pathname}>問い合わせ</BoldStyledLink>
                  </FlexColumn3>
                </RightSide>
              </Grid>
            </Container>
          </FooterWrapper>
        )
      }}
    </Location>
  )
}

export default Footer
