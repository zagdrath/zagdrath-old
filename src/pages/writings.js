// Imports
import * as React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Header from "../components/header"
import Footer from "../components/footer"

// Define component
const WritingsPage = () => {
  return (
    <body>
      <Helmet>
        <title>Writings - Cody Wellman</title>
        <meta charset="UTF-8"></meta>
      </Helmet>
      <Header></Header>
      <main>
        <h2>Writings</h2>
        <p>This is a page for my writings which may include blog posts that I write, tutorial or how-to guides, and documentation for any projects I may work on. I may also host mirrors of other's writings and etc.</p>
      </main>
      <Footer></Footer>
    </body>
  )
}

// Export component
export default WritingsPage
