import * as React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/layout"

const AuthorIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const siteDescription = data.site.siteMetadata?.description || `Description`

  const authorNames = data.allContributorYaml.nodes.map(author => {
    return (<div>{author.name}</div>)
  })

  return (
    <Layout location={location} title={siteTitle} description={siteDescription} >
        <p>A list of all contributors:</p>
        <div>
            {authorNames}
        </div>
    </Layout>
  )
}

// page query
export const query = graphql`
query allContributors {
    allContributorYaml {
      nodes {
        name
      }
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`

export default AuthorIndex