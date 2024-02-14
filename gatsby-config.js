/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [ 
    'gatsby-transformer-remark',
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `projects`,
      path: `${__dirname}/src/projects/`, // Path to your images directory
    },
  },
  {
  resolve: `gatsby-source-filesystem`,
  options: {
    name: `images`,
    path: `${__dirname}/src/images/`, // Path to your images directory
  },
},
],
siteMetadata:{
  title:"website portfolio",
  description:"this is website for my portfolio",
  copyright:"copy write in 2024"
  },
}
