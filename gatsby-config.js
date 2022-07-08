module.exports = {
  siteMetadata: {
    title: `Object Press`,
    description: `Object Press is an open source headless content management system.`,
    author: `Object Press`,
    siteUrl: `https://blog.objectpress.io`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a page view event will be fired for all of them.
        trackingIds: [
          "G-ANALYTICS_ID", // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: `OPT_CONTAINER_ID`,
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Object Press`,
        short_name: `Object Press`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `@chakra-ui/gatsby-plugin`,
      options: {
        resetCSS: true,
        isUsingColorMode: true,
      },
    },
    // loads the source-plugin and adds credentials
    {
      resolve: `gatsby-plugin-objectpress`,
      options: {
        appSecret: `r4FHszB0vG4cx/RyxhkzqcJkqB5H/3wF31AVhjv0xkM=`,
        userSecret: `D7m5yEAJwqvQIq50xfUGBU8VZH3AXNy1eJJqBXwy1tE=`,
      },
    },
  ],
}
