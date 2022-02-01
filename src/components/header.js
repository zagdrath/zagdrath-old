// Imports
import * as React from 'react'
import { Link } from 'gatsby'

// Export component
export default function Header() {
  return (
    <div>
      <header>
        <h1>Zagdrath's Personal Site</h1>
        <nav>
          <p>
            <Link to="/">Home</Link>
            <strong> - </strong>
            <Link to="/projects">Projects</Link>
            <strong> - </strong>
            <Link to="/about">About</Link>
          </p>
        </nav>
        <hr></hr>
      </header>
    </div>
  )
}
