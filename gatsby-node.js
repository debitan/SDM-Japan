exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
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
          _rawBody
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

  if (result.errors) {
    throw result.errors
  }

  const articles = result.data.sanityNews.articles || []
  articles.forEach(article => {
    const path = `/news/${article._key}`

    createPage({
      path,
      component: require.resolve("./src/templates/NewsArticle.jsx"),
      context: article,
    })
  })
}
