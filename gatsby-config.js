require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "3xourkaf",
        dataset: "production",
      },
    },
    {
      resolve: `gatsby-source-googlemaps-static`,
      options: {
          key: process.env.GOOGLE_MAPS_STATIC_API_KEY,
          center: `2C79+VH Sado, 新潟県 Japan`,
          zoom: '13',
          markers: [
              {
                  location: `2C79+VH Sado, 新潟県 Japan`,
                  color: `red`,
              },
          ]
      },
  },
  {
    resolve: `gatsby-plugin-prefetch-google-fonts`,
    options: {
      fonts: [
        {
          family: `M PLUS Rounded 1c`,
          variants: [`400`, `500`, `600`, `700`]
        }
      ],
    },
  },
  `gatsby-plugin-smoothscroll`
  ],
}
