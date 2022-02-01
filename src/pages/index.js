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
        <title>Zagdrath</title>
        <meta charset="UTF-8"></meta>
      </Helmet>
      <Header></Header>
      <article>
        <p>Welcome to my 90s styled personal site!</p>
      </article>
      <Footer></Footer>
    </body>
  )
}

// Export component
export default IndexPage
