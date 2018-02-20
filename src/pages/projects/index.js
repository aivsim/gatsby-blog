import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { rhythm, scale } from '../../utils/typography'

class ProjectsIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <div>
        <Helmet title={siteTitle} />
        <h1 style={{ ...scale(1.25), marginBottom: rhythm(1.5), marginTop: 0 }} >
          Projects
        </h1>
        <p>
          My projects here
        </p>
      </div>
    )
  }
}

export default ProjectsIndex

export const pageQuery = graphql`
  query ProjectsQuery {
    site {
      siteMetadata {
        title
      }
    }    
  }
`
