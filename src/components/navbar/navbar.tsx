import React from 'react'
import './navbar.scss'
export function Navbar() {
  return (
    <nav
      className="navbar is-link is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <h1 className="title is-3">Vestmark</h1>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className="navbar-item">PTE</a>
        </div>
      </div>
    </nav>
  )
}
