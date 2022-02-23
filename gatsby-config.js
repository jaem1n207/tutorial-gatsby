module.exports = {
  siteMetadata: {
    title: `Tutorial Gatsby`,
    author: 'Jaemin Lee',
    description: 'This site is test gatsby tutorial page',
    siteUrl: `https://tutorialgatsbymain57482.gatsbyjs.io/`,
  },
  plugins: [
    'gatsby-plugin-emotion',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    'gatsby-plugin-mdx',
    `gatsby-plugin-sitemap`,
  ],
};
