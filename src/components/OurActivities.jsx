import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import BlockContent from "@sanity/block-content-to-react"
import Img from "gatsby-image"

import serializers from "./serializers"
import ColumnWrapper from "./shared/ColumnWrapper"
import GreyH3 from "./shared/GreyH3"
import RowWrapper from "./shared/RowWrapper"
import StyledAnchor from "./shared/StyledAnchor"

const ColourDiv = styled("div")`
  background-color: #ccf6e1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
  max-width: 1900px;
  margin-left: auto;
  margin-right: auto;
`

const Wrapper = styled(ColumnWrapper)`
  margin-top: 2rem;
`

const Text = styled("p")`
  margin-top: 1rem;
`

const StyledImg = styled(Img)`
  width: 14rem;
  margin: auto;
`

const ActivitiesWrapper = styled(RowWrapper)`
  flex-wrap: wrap;
`

const ActivityWrapper = styled(ColumnWrapper)`
  flex: 1 1 400px;
  max-width: 230px;
  margin: 0 3rem;
`

const UnderlinedText = styled("p")`
  margin-top: 0.5rem;
  text-decoration: underline;
  color: black;
  text-align: center;
`

const OurActivities = () => {
  const { sanityOurActivities, sanityHomePage } = useStaticQuery(graphql`
    query OurActivitiesQuery {
      sanityOurActivities {
        activities {
          link
          ourActivity {
            ja
          }
          ourActivityImage {
            image {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
            caption {
              ja
            }
          }
        }
        _rawCanpanLink
      }
      sanityHomePage {
        activityTitle {
          ja
        }
      }
    }
  `)

  return (
    <ColourDiv>
      <Wrapper>
        <GreyH3>{sanityHomePage.activityTitle.ja}</GreyH3>
        <ActivitiesWrapper>
          {sanityOurActivities.activities.map(activity => (
            <ActivityWrapper key={activity.ourActivity.ja}>
              <StyledAnchor href={activity.link}>
                <StyledImg
                  fluid={activity.ourActivityImage.image.asset.fluid}
                  alt={activity.ourActivityImage.caption.ja}
                  key={activity.ourActivityImage.caption.ja}
                />
                <UnderlinedText href={activity.link}>
                  {activity.ourActivity.ja}
                </UnderlinedText>
              </StyledAnchor>
            </ActivityWrapper>
          ))}
        </ActivitiesWrapper>
        <Wrapper>
          <Text>
            <BlockContent
              blocks={sanityOurActivities._rawCanpanLink.ja}
              serializers={serializers}
            />
          </Text>
        </Wrapper>
      </Wrapper>
    </ColourDiv>
  )
}

export default OurActivities
