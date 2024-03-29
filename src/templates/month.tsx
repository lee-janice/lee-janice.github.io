import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import Head from '../components/head'
import monthNumberToName from '../util/monthNumberToName'
import PostPreview from '../components/postPreview'

interface Props {
    readonly data: PageQueryData
    readonly pageContext: {
        year: string
        month: string
        dirRegexByYearAndMonth: string
    }
}

const MonthTemplate: React.FC<Props> = ({ data, pageContext }) => {
    const { year, month } = pageContext
    const siteTitle = data.site.siteMetadata.title
    const lastUpdated = data.site.siteMetadata.lastUpdated
    const entries = data.allMarkdownRemark.edges

    return (
        <Layout title={siteTitle}>
            <Head
                title={`Year:${year}, month:${month}`}
                keywords={[`journal`, year, month]}
            />
            <header>
                <h1>Year:{year}, month:{month}</h1>
                <p className='subtitle'>
                    Collection of journal entries for {monthNumberToName(month)} {year}
                </p>
                <p className='pageinfo'>
                    2021-09-18 ○
                    last updated: {lastUpdated}
                </p>
            </header>
            <br />
            <article>
                <div className={`page-content`}>
                    {entries.map(({ node }) => 
                        <PostPreview key={node.fields.slug}
                            title       = {node.frontmatter.title}
                            subtitle    = {node.frontmatter.subtitle}
                            slug        = {node.fields.slug}
                            date        = {node.frontmatter.date}
                            lastUpdated = {node.frontmatter.lastupdated}
                            topics      = {node.frontmatter.topics}
                            excerpt     = {node.excerpt}
                            showExcerpt = {true}/>
                    )}
                </div>
            </article>
        </Layout>
    )
}

interface PageQueryData {
    site: {
        siteMetadata: {
            title: string
            lastUpdated: string
        }
    }
    allMarkdownRemark: {
        edges: {
            node: {
                excerpt: string
                fields: {
                    slug: string
                }
                frontmatter: {
                    title: string
                    subtitle: string
                    date: string
                    lastupdated: string
                    topics: [string]
                }
            }
        }[]
    }
}

export const pageQuery = graphql`
  query MonthPage($dirRegexByYearAndMonth: String) {
    site {
      siteMetadata {
        title
        lastUpdated
      }
    }
    allMarkdownRemark(
        filter: {fields: {slug: {regex: $dirRegexByYearAndMonth}}, 
                 frontmatter: {published: {ne: false}}}
        sort: {fields: [frontmatter___lastupdated], order: DESC}
      ) {
        edges {
          node {
            excerpt(pruneLength: 1000)
            fields {
              slug
            }
            frontmatter {
              title
              subtitle
              date
              lastupdated
              topics
            }
          }
        }
      }
  }
`

export default MonthTemplate