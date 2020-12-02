/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Julie Jarzemsky`,
    description: `Julie's website`,
    author: `Julie Jarzemsky`,
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    // },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-transition-link`,
    { 
      resolve: `gatsby-source-filesystem`, 
      options: { 
        path: `./src/data/` 
      } 
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `JulesJarz`,
        short_name: `JJ`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ff6b6b`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/logo.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
  ],
}
