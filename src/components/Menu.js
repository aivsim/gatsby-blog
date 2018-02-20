import React from 'react'
import Link from 'gatsby-link'

// Import typefaces
import 'typeface-montserrat'
import 'typeface-merriweather'

import profilePic from './profile-pic.jpg'
import { rhythm } from '../utils/typography'

class Header extends React.Component {
  render() {
    return (
      <div>
        <Link style={{ boxShadow: 'none', textDecoration: 'none', color: 'inherit' }} to={'/'}>Home</Link>
        <span> | </span>
        <Link style={{ boxShadow: 'none', textDecoration: 'none', color: 'inherit' }} to={'/blog'}>Blog</Link>
        <span> | </span>
        <Link style={{ boxShadow: 'none', textDecoration: 'none', color: 'inherit' }} to={'/projects'}>Projects</Link>
      </div>
    )
  }
}

export default Header
