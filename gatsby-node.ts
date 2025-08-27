/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
        const slug = createFilePath({ node, getNode, basePath: `pages` });
        createNodeField({
            node,
            name: `slug`,
            value: slug,
        });
    }
};

exports.createPages = async function ({ actions, graphql }) {
    const { data } = await graphql(`
        query MarkdownData {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                            layout
                            book_note {
                                author
                                title
                            }
                        }
                    }
                }
            }
        }
    `);
    data.allMarkdownRemark.edges.forEach((edge) => {
        const slug = edge.node.fields.slug;
        if (edge.node.frontmatter.layout == "post") {
            actions.createPage({
                path: `${slug}`,
                component: path.resolve(`./src/templates/post.tsx`),
                context: { slug: slug },
            });
        }
        if (edge.node.frontmatter.layout == "book_note") {
            actions.createPage({
                path: `${slug}`,
                component: path.resolve(`./src/templates/book_note.tsx`),
                context: {
                    slug: slug,
                    author: edge.node.frontmatter.book_note[0].author,
                    title: edge.node.frontmatter.book_note[0].title,
                },
            });
        }
    });
};
