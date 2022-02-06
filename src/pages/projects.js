// Imports
import * as React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Header from "../components/header"
import Footer from "../components/footer"

// Define component
const ProjectsPage = () => {
  return (
    <body>
      <Helmet>
        <title>Projects - Cody Wellman</title>
        <meta charset="UTF-8"></meta>
      </Helmet>
      <Header></Header>
      <main>
        <h2>Projects</h2>
        <p>This is a page for me to record my projects that I work on and a place for me to publish my blog articles that I write.</p>
      </main>
      <Footer></Footer>
    </body>
  )
}

// Export component
export default ProjectsPage
