require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `SDM-Japan`,
    description: `SDM-Japanは、障害のあるなしにかかわらず、誰もが自信と誇りをもって、自分の思いを述べ、心からの希望に基づいて意思決定することができる社会を目指しています。`,
    author: `@ThisisDMatthews`,
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
  `gatsby-plugin-smoothscroll`,
  {
    resolve: `gatsby-plugin-google-analytics`,
    options: {
      trackingId: "UA-158625944-1",
    },
  },
  ],
}
