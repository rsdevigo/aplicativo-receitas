import React from "react"
import {Link} from "gatsby"
import IndexStyle from "./index.module.css"

export default class Index extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <h1>Página Principal</h1>
      <Link to="/doces">Carregar somente doces</Link>
      <br />
      <Link to="/salgados">Carregar somente salgados</Link>
        {this.props.data.allMarkdownRemark.edges.map(({node}) => (
          <div>
          <img width="250px" src={node.frontmatter.cover.publicURL} />
          <h1>{node.frontmatter.title}</h1>
          <p>{node.frontmatter.date}</p>
          <a href={node.frontmatter.path}>Acessar</a>
          </div>
        ))}
      </div>
    )
  }
}

export const pageQuery = graphql`
query {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 1000, filter: {frontmatter: {destaque: {eq: true}}}) {
    edges {
      node {
        frontmatter {
          title
          path
          date(formatString: "DD MM YYYY")
          cover {
            publicURL
          }
        }
      }
    }
  }
}`
