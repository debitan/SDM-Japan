import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import ContainerCenter from "./shared/ContainerCentre"
import GreyH3 from "./shared/GreyH3"
import ColumnWrapper from "./shared/ColumnWrapper"

const ReviewWrapper = styled(ColumnWrapper)`
  padding: 1rem;
`

const EventReviews = () => {
  const { sanityEventsPage } = useStaticQuery(graphql`
    query EventReviewsQuery {
      sanityEventsPage {
        reviewTitle {
          ja
        }
        review {
          review {
            ja
          }
          reviewer {
            ja
          }
        }
      }
    }
  `)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  }

  return (
    <ContainerCenter>
      <GreyH3>{sanityEventsPage.reviewTitle.ja}</GreyH3>
      <Slider {...settings}>
        {sanityEventsPage.review.map(review => (
          <ReviewWrapper>
            <p>{review.review.ja}</p>
            <p>{review.reviewer.ja}</p>
          </ReviewWrapper>
        ))}
      </Slider>
    </ContainerCenter>
  )
}

export default EventReviews
