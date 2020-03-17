import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import About from "../components/home/About"
import SupportedDecisionMaking from "../components/home/SupportedDecisionMaking"
import Header from "../components/home/Header"
import OurActivities from "../components/OurActivities"
import Events from "../components/home/Events"
import NewsArticles from "../components/news/NewsArticles"

const IndexPage = () => {
  const { sanityNews } = useStaticQuery(graphql`
    query NewsArticlesHomeQuery {
      sanityNews {
        articles {
          _key
          title {
            ja
          }
          date
          tag {
            ja
          }
          headerImage {
            image {
              asset {
                fluid {
                  base64
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                }
              }
            }
            caption {
              ja
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <Header />
      <Events />
      <NewsArticles
        data={sanityNews}
        border={true}
        title={true}
        link={true}
        limit={true}
      />
      <SupportedDecisionMaking />
      <About />
      <OurActivities />
    </Layout>
  )
}

export default IndexPage
