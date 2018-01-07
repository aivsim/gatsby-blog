import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import { rhythm, scale } from '../utils/typography'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <div>
        <Helmet title={siteTitle} />
        <h1 style={{ ...scale(1.25), marginBottom: rhythm(1.5), marginTop: 0 }} >
          Myself on the web
        </h1>
        <Bio />
        <p>
          Accomplished professional in web development with 3 years of experience and a passion to create IT products and solutions which would help people in the most humane, sincere and reliable ways as possible. I adore working in healthcare, education and business fields. I’m capable to design, implement and maintain wide variety of systems. Strong in web development using both, server side and client side technologies.
        </p>
        <p>
          Currently I'm working as a Full Stack Web Developer and I'm very interested in .NET Core, NodeJS, React, Redux, Redux saga, Preact, Typescript, ES7, Bootstrap 4.0 technologies. I passed my MCSD certification and I 'm looking forward to pass some more to prove my skills and worth. I‘m really fascinated with how new technologies are developing and I am proud of myself being a part of it.
        </p>
        <p>
          I'm always looking forward to interesting projects, new opportunities to grow and level up my career. I‘m eager and not afraid to learn and try new technologies, methodologies and patterns. Gaining fresh and new experience is my ongoing lifetime goal. I've been a student since I was a little boy - gaining and sharing knowledge is what I do best.
        </p>
        <p>
          I'm always happy to help if i can. Let's connect !
        </p>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }    
  }
`
