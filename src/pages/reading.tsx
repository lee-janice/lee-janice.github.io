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

const Reading: React.FC<PageProps> = ({ data }: PageProps<Queries.ReadingPage>) => {
    const [posts, setPosts] = React.useState(data.allMarkdownRemark.edges);

    React.useEffect(() => {
        // add custom pages to list
        setPosts([...posts]);
    }, []);

    // sort by creation date
    posts.sort((a: any, b: any) => Date.parse(b.node.frontmatter.created) - Date.parse(a.node.frontmatter.created));

    return (
        <main>
            <SideBar />
            <div className="content" style={{ maxWidth: "1000px" }}>
                {posts.map(({ node }) => (
                    <StyledPostListing>
                        <span style={{ color: "gray", fontFamily: "monospace", fontSize: "14px" }}>
                            {node.frontmatter.created}
                        </span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
                        &nbsp;&nbsp;
                        <span style={{ color: "gray" }}>{node.frontmatter.subtitle}</span>
                    </StyledPostListing>
                ))}
            </div>
        </main>
    );
};

export const query = graphql`
    query ReadingPage {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            filter: { frontmatter: { published: { ne: false } }, fileAbsolutePath: { regex: "/(reading)/" } }
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

export default Reading;

export const Head: HeadFC = () => <title>reading</title>;
