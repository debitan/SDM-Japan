require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `SDM-Japan`,
    description: `SDM-Japanは、障害のあるなしにかかわらず、誰もが自信と誇りをもって、自分の思いを述べ、心からの希望に基づいて意思決定することができる社会を目指しています。`,
    author: `@ThisisDMatthews`,
    url: 'https://sdm-japan.net',
    image: '/images/icon.png'
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
        overlayDrafts: true,
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
  `gatsby-plugin-smoothscroll`,
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-158625944-1",
    },
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: "SDM-Japan",
      short_name: "SDM-Japan",
      start_url: "/",
      background_color: "#FFF691",
      theme_color: "#FFF691",
      // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
      // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
      display: "standalone",
      icon: "src/images/icon.png", // This path is relative to the root of the site.
      // An optional attribute which provides support for CORS check.
      // If you do not provide a crossOrigin option, it will skip CORS for manifest.
      // Any invalid keyword or empty string defaults to `anonymous`
      crossOrigin: `use-credentials`,
    },
  },
  ],
}
