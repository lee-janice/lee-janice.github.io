import * as React from "react";
import { graphql, Link, type HeadFC, type PageProps } from "gatsby";
import styled from "styled-components";
import Layout from "../../components/layout";

const StyledTitle = styled.h1`
    margin-top: 0px;
    margin-bottom: 2px;
`;

const StyledSubtitle = styled.h2`
    margin-top: 0px;
    margin-bottom: 20px;
`;

const LTLBPage: React.FC<PageProps> = ({ data }: PageProps<Queries.LTLBPage>) => {
    // get all favorite quotes
    // TODO: refactor - pretty sure i can do this better with flatMap
    var quotes: any = [];
    data.allReadingYaml.edges.forEach((note: any) => {
        console.log(note);
        note.node.quotes.forEach((quote: any) => {
            if (quote.favorite) {
                quotes.push({
                    author_first: note.node.author_first,
                    author_last: note.node.author_last,
                    title: note.node.title,
                    quote: quote.quote,
                    page_number: quote.page_number,
                    description: quote.description,
                    notes: quote.notes,
                });
            }
        });
    });

    return (
        <Layout>
            <article className="content">
                <StyledTitle>Letters to live by</StyledTitle>
                <StyledSubtitle>A small selection of words well-strung ⚬ 6 of September 2025</StyledSubtitle>
                <section>
                    <hr />
                    {quotes
                        ?.sort((a: any, b: any) => a.author_last.localeCompare(b.author_last))
                        .map((quote: any) =>
                            quote.quote ? (
                                <div>
                                    <span className="mn">
                                        <em>{quote.title}</em> <br /> {quote.author_first} {quote.author_last}
                                        {quote.page_number ? <br></br> : <></>}
                                    </span>
                                    <p>{quote.quote}</p>
                                    <br />
                                </div>
                            ) : null
                        )}
                </section>
            </article>
        </Layout>
    );
};

export const query = graphql`
    query WTLBPage {
        allReadingYaml {
            edges {
                node {
                    quotes {
                        quote
                        favorite
                        page_number
                        description
                        notes
                        tags
                    }
                    author_first
                    author_last
                    title
                }
            }
        }
    }
`;

export default LTLBPage;

export const Head: HeadFC = () => <title>testing</title>;
