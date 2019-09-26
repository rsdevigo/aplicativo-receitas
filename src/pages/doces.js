import React from "react"
import {Link} from "gatsby"
import IndexStyle from "./index.module.css"

export default class Doces extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <h1>Página Doces</h1>
      <Link to="/salgados">Carregar somente salgados</Link>
      <br />
      <Link to="/">Carregar Página principal</Link>
        {this.props.data.allMarkdownRemark.edges.map(({node}) => (
          <div>
          <img src={node.frontmatter.cover.publicURL} />
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
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}, limit: 1000, filter: {frontmatter: {category: {eq: "doces"}}}) {
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
