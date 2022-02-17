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
      <main>
        <StaticImage src="../images/profile.png" alt="Cody Wellman" width={200} align="top" class="profile"/>
        <h2>About</h2>
        <p>Hey, I'm Cody Wellman but I usually go by Zagdrath online and I'm a software developer and an 
        Information Technology specialist. I'm also an advocate for Free Software and the GNU/Linux 
        operating systems as well as a member of the <a href="https://www.fsf.org">Free Software Foundation</a>.</p>
        <p>You can reach me via …</p>
        <ul>
          <li>Email: <a href="mailto:zagdrath@member.fsf.org">zagdrath@member.fsf.org</a></li>
          <li>Twitter: <a href="https://twitter.com/zagdrath">twitter.com/zagdrath</a></li>
          <li>GitHub: <a href="https://github.com/zagdrath">github.com/zagdrath</a></li>
        </ul>
        <p>I may have other social media accounts but I rarely use them and have recently been trying not to 
        use any social media that does not respect it's user's freedoms. If you would like to learn more 
        about why I or anyone should not "use" or as I like to say and others have said, be used by certain 
        social media platforms such as Facebook, Instagram, or many others, I would suggest taking a look 
        at <a href="https://stallman.org/facebook.html">this article</a> and many others like it written by Richard Stallman.</p>
        <h2>Skills & Expertise</h2>
        <dl>
          <dt>General Expertise:</dt>
          <dd>Workstation and server configuration, World Wide Web, computer networking systems and security.</dd>
          <dd>Computer hardware installation, setup, and maintenance. (servers and desktops)</dd>
          <br></br>
          <dt>Operating System Experience:</dt>
          <dd>Windows client and server operating systems, GNU/Linux distributions primarily Debian and Fedora based.</dd>
          <dd>Hobby experience with older UNIX operating systems like Solaris and Sun Microsystems hardware.</dd>
          <dd>Basic experience with MacOS also.</dd>
          <br></br>
          <dt>Programming:</dt>
          <dd>World Wide Web programming using HTML, CSS, and JavaScript.</dd>
          <dd>Modern World Wide Web programming using React, Next.js, and Gatsby.</dd>
          <dd>Java</dd>
          <dd>Python, Open CV and Tensorflow for Machine Learning.</dd>
          <dd>Visual Studio Code and some basics of both Vim and GNU Emacs.</dd>
          <dd>Git version control system and I primarily use GitHub for ease of that.</dd>
          <dd>In the future I want to learn Rust and the fundamentals of C++.</dd>
          <br></br>
          <dt>Specific Applications:</dt>
          <dd>World Wide Web servers using Apache and Nginx.</dd>
          <dd>Database servers such as MySQL and MariaDB.</dd>
          <dd>Basic data encryption at file, directory, and disk levels.</dd>
          <dd>Super basic knowledge and use of Solidworks.</dd>
          <br></br>
          <dt>Other General Skills:</dt>
          <dd>Compilation and installation of basic GNU/Linux software.</dd>
          <dd>Basic electrical/soldering and mechanical skills.</dd>
          <dd>Basic knowledge of Microsoft Office applications.</dd>
          <dd>Configuration, setup, and maintenance of 3D printers.</dd>
        </dl>
      </main>
      <Footer></Footer>
    </body>
  )
}

// Export component
export default AboutPage
