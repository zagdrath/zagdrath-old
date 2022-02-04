// Imports
import * as React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Header from "../components/header"
import Footer from "../components/footer"
import { projectList, projectListTitle, projectListDate, projectListDescription, } from './projects.module.scss'

// Define component
const ProjectsPage = () => {
  return (
    <body>
      <Helmet>
        <title>Projects - Zagdrath</title>
        <meta charset="UTF-8"></meta>
      </Helmet>
      <Header></Header>
      <article>
        <h1>Projects</h1>
        <p>This is a page for me to record my projects that I work on and a place for me to publish my blog articles that I write.</p>
        <div className={projectList}>
          <h2 classname={projectListTitle}><Link to="/projects/test">Dell PowerVault MD1000</Link></h2>
          <p className={projectListDate}>Published: Friday, February 4, 2022</p>
          <p className={projectListDescription}>Stuff</p>
        </div>
      </article>
      <Footer></Footer>
    </body>
  )
}

// Export component
export default ProjectsPage
