import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import SEO from "../components/SEO"
import Layout from "../components/Layout"
import YellowTitle from "../components/YellowTitle"
import NewsArticles from "../components/news/NewsArticles"

const News = () => {
  const { sanityNews } = useStaticQuery(graphql`
    query NewsArticlesQuery {
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
      <SEO title="ニュース" />
      <YellowTitle title="ニュース" />
      <NewsArticles
        data={sanityNews}
        border={false}
        title={false}
        link={false}
      />
    </Layout>
  )
}

export default News
