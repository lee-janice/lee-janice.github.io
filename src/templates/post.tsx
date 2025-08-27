import React from "react";
import { Link, graphql, PageProps } from "gatsby";
import Layout from "../components/layout";
import styled from "styled-components";

const StyledTitle = styled.h1`
    margin-top: 0px;
    margin-bottom: 2px;
`;

const StyledSubtitle = styled.h2`
    margin-top: 0px;
    margin-bottom: 20px;
`;

const Post = ({ data }: PageProps<Queries.Post>) => {
    const post = data.markdownRemark;
    return (
        <Layout title={data.site.siteMetadata.title}>
            <article className="content">
                <StyledTitle>{post.frontmatter.title}</StyledTitle>
                <StyledSubtitle>
                    {post.frontmatter.subtitle}&nbsp;&nbsp;⚬&nbsp;&nbsp;{post.frontmatter.created}
                </StyledSubtitle>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
            </article>
        </Layout>
    );
};

export const query = graphql`
    query Post($slug: String!) {
        site {
            siteMetadata {
                title
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt(pruneLength: 1000)
            html
            frontmatter {
                title
                subtitle
                created(formatString: "DD [of] MMMM YYYY")
                updated(formatString: "DD [of] MMMM YYYY")
            }
        }
    }
`;

export default Post;
