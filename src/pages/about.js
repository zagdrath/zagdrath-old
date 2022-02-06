// Imports
import * as React from 'react'
import { Helmet } from 'react-helmet'
import Header from "../components/header"
import Footer from "../components/footer"
import { StaticImage } from 'gatsby-plugin-image'

// Define component
const AboutPage = () => {
  return (
    <body>
      <Helmet>
        <title>About - Cody Wellman</title>
        <meta charset="UTF-8"></meta>
      </Helmet>
      <Header></Header>
      <article>
        <StaticImage src="../images/profile.png" alt="Cody Wellman" width={200} align="top" class="profile"/>
        <h2>About</h2>
        <p>Hey, I'm Cody Wellman but I usually go by Zagdrath online and I'm a software developer and an Information Technology specialist. I'm also an advocate for Free Software and the GNU/Linux operating systems as well as a member of the <a href="https://www.fsf.org">Free Software Foundation</a>.</p>
        <p>You can reach me via …</p>
        <ul>
          <li>Email: <a href="mailto:zagdrath@member.fsf.org">zagdrath@member.fsf.org</a></li>
          <li>Twitter: <a href="https://twitter.com/zagdrath">twitter.com/zagdrath</a></li>
          <li>GitHub: <a href="https://github.com/zagdrath">github.com/zagdrath</a></li>
        </ul>
        <p>I may have other social media accounts but I rarely use them and have recently been trying not to use any social media that does not respect it's user's freedoms. If you would like to learn more about why I or anyone should not "use" or as I like to say, be used by certain social media platforms such as Facebook, Instagram, or many others, I would suggest taking a look at <a href="https://stallman.org/facebook.html">this article</a> and many others like it written by Richard Stallman.</p>
        <h2>Skills & Expertise</h2>
      </article>
      <Footer></Footer>
    </body>
  )
}

// Export component
export default AboutPage
