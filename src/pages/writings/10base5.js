// Imports
import * as React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Header from "../../components/header"
import Footer from "../../components/footer"

// Define component
const TenBaseFive = () => {
  return (
    <body>
      <Helmet>
        <title>10BASE5 Networking - Cody Wellman</title>
        <meta charset="UTF-8"></meta>
      </Helmet>
      <Header></Header>
      <main>
        <h2>10BASE5 Networking</h2>
        <p>This is just an article about me trying to source all the materials to build a 10BASE5 
        network. One of the most important pieces obviously is the cable, so I am currently 
        trying to source some Belden 9880 cable for this network. My father may have some 
        in a shed so I will be going to look to see if it is what I need.</p>
        <Link to='../../writings'>&lt;-- Back</Link>
      </main>
      <Footer></Footer>
    </body>
  )
}

// Export component
export default TenBaseFive
