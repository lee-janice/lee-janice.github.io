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

const AOPage: React.FC<PageProps> = ({ data }: PageProps<Queries.AOPage>) => {
    // get all beginnings and endings
    var quotes: any = [];
    data.allNotesYaml.edges.forEach((note: any) => {
        quotes.push({
            author_first: note.node.author_first,
            author_last: note.node.author_last,
            title: note.node.title,
            beginning: note.node.quotes.filter((q: any) => q.tags?.includes("beginning"))[0]?.quote,
            ending: note.node.quotes.filter((q: any) => q.tags?.includes("ending"))[0]?.quote,
        });
    });

    return (
        <Layout>
            <article className="content">
                <StyledTitle>Alphas (A) and Omegas (Ω)</StyledTitle>
                <StyledSubtitle>All that can be said in a beginning and an end ⚬ 4 of September 2025</StyledSubtitle>
                <section>
                    <hr />
                    {quotes
                        ?.sort((a: any, b: any) => a.author_last.localeCompare(b.author_last))
                        .map((quote: any) =>
                            quote.beginning && quote.ending ? (
                                <div>
                                    <h1>
                                        {quote.title} by {quote.author_first} {quote.author_last}
                                    </h1>
                                    <h2>The Beginning</h2>
                                    <p>{quote.beginning}</p>
                                    <h2>The End</h2>
                                    <p>{quote.ending}</p>
                                    <br />
                                    <hr />
                                </div>
                            ) : null
                        )}
                </section>
            </article>
        </Layout>
    );
};

export const query = graphql`
    query AOPage {
        allNotesYaml {
            edges {
                node {
                    quotes {
                        quote
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

export default AOPage;

export const Head: HeadFC = () => <title>testing</title>;
