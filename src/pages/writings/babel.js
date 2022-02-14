// Imports
import * as React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Header from "../../components/header"
import Footer from "../../components/footer"

// Define component
const Babel = () => {
  return (
    <body>
      <Helmet>
        <title>The Library of Babel - Cody Wellman</title>
        <meta charset="UTF-8"></meta>
      </Helmet>
      <Header></Header>
      <main>
        <h2>The Library of Babel</h2>
        <Link to='../../writings'>&lt;-- Back</Link>
      </main>
      <Footer></Footer>
    </body>
  )
}

// Export component
export default Babel
