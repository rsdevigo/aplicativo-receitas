import React from "react"
import { graphql } from "gatsby"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="recipe-container">
      <div className="recipe-data">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <p>{frontmatter.category}</p>
        <p>{frontmatter.porcao} porções</p>
        <div
          className="recipe-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "DD/MM/YYYY")
        path
        title
        category
        porcao
      }
    }
  }
`