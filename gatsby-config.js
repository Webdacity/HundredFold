module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
  ],
  siteMetadata: {
    title: "Hundredfold",
    author: "Webdacity"
  },
}
