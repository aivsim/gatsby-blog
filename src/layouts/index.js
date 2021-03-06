import React from 'react'
import Link from 'gatsby-link'
import { Container } from 'react-responsive-grid'

import { rhythm, scale } from '../utils/typography'
import Menu from '../components/Menu'

class Template extends React.Component {
  render() {
    const { location, children } = this.props

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container style={{ maxWidth: rhythm(24), padding: `${rhythm(1.5)} ${rhythm(3 / 4)}` }}>
        <Menu/>
        {children()}
      </Container>
    )
  }
}

export default Template
