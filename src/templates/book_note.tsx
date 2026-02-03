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
    let quotes = data.readingYaml.quotes;
    if (quotes.page_number) {
        quotes = quotes.sort((q1: any, q2: any) => q1.page_number - q2.page_number);
    }
    if (quotes.progress) {
        quotes = quotes.sort((q1: any, q2: any) => q1.progress - q2.progress);
    }

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
                    <hr style={{ borderTop: "dotted 1px;" }} />
                    <br />
                    {quotes
                        .filter((quote: any) => quote.quote !== null)
                        .map((quote: any) => (
                            <div>
                                <span className="mn">
                                    {/* <em style={{ fontSize: "15px" }}>
                                        {quote.page_number ? "p." + quote.page_number : ""}
                                    </em> */}
                                    {/* {quote.page_number ? <br></br> : <></>} */}
                                    <b>
                                        <em>
                                            {quote.chapter_title ? quote.chapter_title : ""}
                                            {quote.chapter_title && quote.page_number ? ", " : ""}
                                            {quote.page_number ? "p." + quote.page_number : ""}
                                        </em>
                                    </b>
                                    {quote.chapter_title || quote.page_number ? <br></br> : <></>}
                                    <span>{quote.description ? quote.description : ""}</span>
                                    {quote.description ? <br></br> : <></>}
                                    <span style={{ color: "gray" }}>{quote.notes ? quote.notes : ""}</span>
                                </span>
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: quote.quote.replace(/\n/g, "<br><br>"),
                                    }}
                                />
                                <br />
                                <hr style={{ borderTop: "dotted 1px;" }} />
                                <br />
                            </div>
                        ))}
                </section>
            </article>
        </Layout>
    );
};

export const query = graphql`
    query BookNote($slug: String!, $author_first: String = "", $author_last: String = "", $title: String = "") {
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
        readingYaml(author_first: { eq: $author_first }, author_last: { eq: $author_last }, title: { eq: $title }) {
            quotes {
                chapter_number
                chapter_title
                description
                page_number
                quote
                notes
            }
        }
    }
`;

export default BookNote;
