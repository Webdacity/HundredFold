module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`${__dirname}/src/layouts/index.js`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "HundredFold",
        short_name: "HundredFold",
        start_url: "/",
        background_color: "#151614",
        theme_color: "#151614",
        display: "standalone",
        icon: "src/assets/images/logos/hundredfold/favicon.png",
        crossOrigin: `use-credentials`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'material icons',
        ],
      },
    }
  ],
  siteMetadata: {
    title: "Hundredfold",
    author: "Webdacity",
    siteUrl: `https://www.hundredfold.co.za`,
  },
}
