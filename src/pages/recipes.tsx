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

const Recipes: React.FC<PageProps> = ({ data }: PageProps<Queries.RecipePage>) => {
    const [posts, setPosts] = React.useState(data.allMarkdownRemark.edges);

    React.useEffect(() => {
        // add custom pages to list
        setPosts([...posts]);
    }, []);

    // sort by alphabetical order
    posts.sort((a: any, b: any) => a.node.frontmatter.title.localeCompare(b.node.frontmatter.title));

    return (
        <main>
            <SideBar />
            <div className="content" style={{ maxWidth: "1000px" }}>
                {posts.map(({ node }) => (
                    <StyledPostListing>
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
    query RecipePage {
        site {
            siteMetadata {
                title
            }
        }
        allMarkdownRemark(
            filter: { frontmatter: { published: { ne: false } }, fileAbsolutePath: { regex: "/(recipes)/" } }
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

export default Recipes;

export const Head: HeadFC = () => <title>recipes</title>;
