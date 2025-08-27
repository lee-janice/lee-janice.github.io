import React from "react";
import { Link, PageProps, graphql } from "gatsby";
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

const BookNote = ({ data }: PageProps<Queries.BookNote>) => {
    const post = data.markdownRemark;
    const quotes = data.quotesYaml.quotes;

    return (
        <Layout title={post.frontmatter.title}>
            <article className="content">
                <StyledTitle>{post.frontmatter.title}</StyledTitle>
                <StyledSubtitle>
                    {post.frontmatter.subtitle}&nbsp;&nbsp;⚬&nbsp;&nbsp;{post.frontmatter.created}
                </StyledSubtitle>
                <div dangerouslySetInnerHTML={{ __html: post.html }} />
                <section>
                    <h1>Quotes</h1>
                    {quotes.map((quote) => (
                        <div>
                            <span className="mn">
                                <em style={{ fontSize: "15px" }}>{quote.page_number ? quote.page_number : ""}</em>
                                {quote.page_number ? <br></br> : <></>}
                                <span>{quote.description ? quote.description : ""}</span>
                                {quote.description ? <br></br> : <></>}
                                <span style={{ color: "gray" }}>{quote.notes ? quote.notes : ""}</span>
                            </span>
                            <p>{quote.quote}</p>
                            <br />
                        </div>
                    ))}
                </section>
            </article>
        </Layout>
    );
};

export const query = graphql`
    query BookNote($slug: String!, $author: String = "", $title: String = "") {
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
        quotesYaml(author: { eq: $author }, title: { eq: $title }) {
            quotes {
                chapter_number
                chapter_title
                description
                page_number
                quote
                importance
                notes
            }
        }
    }
`;

export default BookNote;
