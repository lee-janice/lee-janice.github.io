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
                                author_first
                                author_last
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
            // console.log(edge.node.frontmatter.book_note);
            // console.log(edge.node.frontmatter.book_note.author_first);
            actions.createPage({
                path: `${slug}`,
                component: path.resolve(`./src/templates/book_note.tsx`),
                context: {
                    slug: slug,
                    // the author and title in the .md file need to match the author and title in the .yaml file
                    author_first: edge.node.frontmatter.book_note.author_first,
                    author_last: edge.node.frontmatter.book_note.author_last,
                    title: edge.node.frontmatter.book_note.title,
                },
            });
        }
    });
};
