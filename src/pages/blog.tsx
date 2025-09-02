import * as React from "react";
import { graphql, Link, type HeadFC, type PageProps } from "gatsby";
import SideBar from "../components/sidebar";
import styled from "styled-components";

const StyledPostListing = styled.div`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    a {
        color: white;
        font-weight: 800;

        &:hover {
            color: darkseagreen;
        }
    }
`;

const Blog: React.FC<PageProps> = ({ data }: PageProps<Queries.BlogPage>) => {
    const posts = data.allMarkdownRemark.edges;

    return (
        <main>
            <SideBar />
            <div className="content" style={{ maxWidth: "1000px" }}>
                <h1>under construction</h1>
                {/* {posts.map(({ node }) => (
                    <StyledPostListing>
                        <span style={{ color: "gray", fontFamily: "monospace", fontSize: "14px" }}>
                            {node.frontmatter.created}
                        </span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                        &nbsp;&nbsp;
                        <span style={{ color: "gray" }}>{node.frontmatter.subtitle}</span>
                    </StyledPostListing>
                ))} */}
            </div>
        </main>
    );
};

export const query = graphql`
    query BlogPage {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            filter: { frontmatter: { published: { ne: false } }, fileAbsolutePath: { regex: "/(blog)/" } }
            sort: { frontmatter: { created: DESC } }
        ) {
            edges {
                node {
                    excerpt
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        subtitle
                        created(formatString: "DD MMM YYYY")
                        updated(formatString: "DD MMM YYYY")
                    }
                }
            }
        }
    }
`;

export default Blog;

export const Head: HeadFC = () => <title>blog</title>;
