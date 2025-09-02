import type { GatsbyConfig } from "gatsby";

// enable access to environment variables
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
});

const isProduction = process.env.NODE_ENV === "production";

const config: GatsbyConfig = {
    siteMetadata: {
        title: `home`,
        siteUrl: `https://lee-janice.github.io`,
    },
    // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
    // If you use VSCode you can also use the GraphQL plugin
    // Learn more at: https://gatsby.dev/graphql-typegen
    graphqlTypegen: true,
    flags: {
        DEV_SSR: true,
    },
    plugins: [
        "gatsby-plugin-styled-components",
        "gatsby-plugin-image",
        "gatsby-plugin-mdx",
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        `gatsby-transformer-yaml`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/content`,
                name: `posts`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: `${__dirname}/src/images/`,
            },
            __key: "images",
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: `${__dirname}/src/pages/`,
            },
            __key: "pages",
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {},
        },
        {
            resolve: `gatsby-plugin-goatcounter`,
            options: {
                // you have to prepend the environment variable name with GATSBY in order for it to be accessible by the browser
                code: isProduction ? process.env.GATBSY_GOATCOUNTER_PAGE_CODE : "test",
                allowLocal: !isProduction,
            },
        },
    ],
};

export default config;
