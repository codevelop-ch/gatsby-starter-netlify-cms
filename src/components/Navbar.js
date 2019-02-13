import React from 'react'
import Link from 'gatsby-link'

import github from '../img/github-icon.svg'
// import logo from '../img/logo.svg'

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <h1 className="has-text-weight-bold is-size-2">Christine Abbt</h1>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          <h1 className="has-text-weight-bold is-size-4">About</h1>
        </Link>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item"
          href="https://github.com/AustinGreen/gatsby-netlify-cms-boilerplate"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </div>
    </div>
  </nav>
)

export default Navbar
