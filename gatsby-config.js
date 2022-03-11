const esmRequire = require('./esmRequire')
module.exports = {
    siteMetadata: {
        siteUrl: `https://lukespacewalker.github.io`,
        title: `Out of box : Suttisak's Portfolio`,
        subtitle: ``,
        description: `Suttisak Profile and Portfolio`,
        author: `นพ. สุทธิศักดิ์ เด่นดวงใจ`,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    "G-DJJ9LVQ57W", // Google Analytics / GA
                    //"AW-CONVERSION_ID", // Google Ads / Adwords / AW
                    //"DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
                ],
                // This object gets passed directly to the gtag config command
                // This config will be shared across all trackingIds
                //gtagConfig: {
                //  optimize_id: "OPT_CONTAINER_ID",
                //  anonymize_ip: true,
                // cookie_expires: 0,
                //},
                // This object is used for configuration specific to this plugin
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: false,
                    // Setting this parameter is also optional
                    respectDNT: true,
                    // Avoids sending pageview hits from custom paths
                    exclude: ["/preview/**", "/do-not-track/me/too/"],
                },
            },
        },
        {
            resolve: "gatsby-plugin-sass",
            options: {
                sassOptions: {
                    includePaths: ["src/styles"],
                },
                implementation: require('sass'),
            },
        },
        `gatsby-plugin-no-sourcemaps`,
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
              // Defaults used for gatsbyImageData and StaticImage
              defaults: {},
              // Set to false to allow builds to continue on image errors
              failOnError: true,
              // deprecated options and their defaults:
              base64Width: 20,
              useMozJpeg: process.env.GATSBY_JPEG_ENCODER === `MOZJPEG`,
              stripMetadata: true,
              defaultQuality: 50,
            },
          },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sitemap`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `markdowns`,
                path: `${__dirname}/src/contents`,
            },
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [".mdx", ".md"],
                remarkPlugins: [
                    esmRequire("remark-toc").default,
                    esmRequire("remark-slug").default,
                    esmRequire("remark-math").default,
                ],
                rehypePlugins: [esmRequire("rehype-katex").default],
            },
        },
        `gatsby-plugin-typescript`,
        `gatsby-transformer-json`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Out of box : Suttisak's portfolio`,
                short_name: `Out of box`,
                start_url: `/`,
                background_color: `#303030`,
                theme_color: `#303030`,
                display: `minimal-ui`,
                icon: `src/images/icon.png`,
            },
        },
    ],
};
