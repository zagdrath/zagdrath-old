// Imports
import * as React from 'react'
import { Helmet } from 'react-helmet'
import Header from "../components/header"
import Footer from "../components/footer"

// Define component
const AboutPage = () => {
  return (
    <body>
      <Helmet>
        <title>Zagdrath</title>
        <meta charset="UTF-8"></meta>
      </Helmet>
      <Header></Header>
      <article>
        <h1>About</h1>
        <p>Hey, I'm Cody Wellman and I'm a software developer and an IT specialist. I'm also an advocate for Free Software and a member of the <a href="https://www.fsf.org">FSF</a>.</p>
        <p>You can reach me via …</p>
        <ul>
          <li>Email: <a href="mailto:zagdrath@member.fsf.org">zagdrath@member.fsf.org</a></li>
          <li>Twitter: <a href="https://twitter.com/zagdrath">@zagdrath</a></li>
          <li>GitHub: <a href="https://github.com/zagdrath">zagdrath</a></li>
        </ul>
      </article>
      <Footer></Footer>
    </body>
  )
}

// Export component
export default AboutPage
