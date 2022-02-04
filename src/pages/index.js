// Imports
import * as React from 'react'
import { Helmet } from 'react-helmet'
import Header from "../components/header"
import Footer from "../components/footer"

// Define component
const IndexPage = () => {
  return (
    <body>
      <Helmet>
        <title>Home - Zagdrath</title>
        <meta charset="UTF-8"></meta>
      </Helmet>
      <Header></Header>
      <article>
        <p>Hello and welcome to my personal site that utilizes a modern JavaScript framework called <a href='https://www.gatsbyjs.com/'>Gatsby</a> but still is styled like a site from the 90s using very minimal CSS for styling.</p>
      </article>
      <Footer></Footer>
    </body>
  )
}

// Export component
export default IndexPage
