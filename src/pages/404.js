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
        <title>Error 404 - Cody Wellman</title>
        <meta charset="UTF-8"></meta>
      </Helmet>
      <Header></Header>
      <main>
        <h2>Error 404</h2>
        <p>The page you're looking for could not be found.</p>
        <p>Please contact Cody if you think this is a mistake.</p>
      </main>
      <Footer></Footer>
    </body>
  )
}

// Export component
export default ErrorPage
