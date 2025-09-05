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

const Notes: React.FC<PageProps> = ({ data }: PageProps<Queries.NotesPage>) => {
    const [posts, setPosts] = React.useState(data.allMarkdownRemark.edges);

    React.useEffect(() => {
        // add custom pages to notes list
        const p = {
            node: {
                fields: {
                    slug: "/notes/alphas-and-omegas/",
                },
                frontmatter: {
                    title: "Alphas (A) and Omegas (Ω)",
                    subtitle: " All that can be said in a beginning and an end",
                    created: "04 Sep 2025",
                    updated: "04 Sep 2025",
                },
            },
        };
        setPosts([...posts, p]);
    }, []);

    // sort by last updated
    posts.sort((a: any, b: any) => Date.parse(b.node.frontmatter.updated) - Date.parse(a.node.frontmatter.updated));

    return (
        <main>
            <SideBar />
            <div className="content" style={{ maxWidth: "1000px" }}>
                {posts.map(({ node }) => (
                    <StyledPostListing>
                        <span style={{ color: "gray", fontFamily: "monospace", fontSize: "14px" }}>
                            {node.frontmatter.updated}
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
    query NotesPage {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            filter: { frontmatter: { published: { ne: false } }, fileAbsolutePath: { regex: "/(notes)/" } }
            sort: { frontmatter: { updated: DESC } }
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

export default Notes;

export const Head: HeadFC = () => <title>notes</title>;
