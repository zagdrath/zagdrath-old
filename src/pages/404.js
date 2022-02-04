// Imports
import * as React from 'react'
import { Helmet } from 'react-helmet'
import Header from "../components/header"
import Footer from "../components/footer"

// Define component
const ErrorPage = () => {
  return (
    <body>
      <Helmet>
        <title>Error 404 - Zagdrath</title>
        <meta charset="UTF-8"></meta>
      </Helmet>
      <Header></Header>
      <article>
        <h1>Error 404</h1>
        <p>The requested URL was not found on this server.</p>
      </article>
      <Footer></Footer>
    </body>
  )
}

// Export component
export default ErrorPage