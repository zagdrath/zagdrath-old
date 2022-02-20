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
        <StaticImage src="../images/profile.png" alt="Cody Wellman" width={200} align="top" class="profile" />
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
        <p>My PGP public key can be found <a href='../zagdrath-pubkey.txt'>here</a>, I use this key with ProtonMail
          and if you would like to send me more secure emails please send them
          to <a href="mailto:zagdrath@protonmail.com">zagdrath@protonmail.com</a>.</p>
        <p>I may have other social media accounts but I rarely use them and have recently been trying not to
          use any social media that does not respect it's user's freedoms. If you would like to learn more
          about why I or anyone should not "use" or as I like to say and others have said, be used by certain
          social media platforms such as Facebook, Instagram, or many others, I would suggest taking a look
          at <a href="https://stallman.org/facebook.html">this article</a> and many others like it written by Richard Stallman.</p>
        <h2>Skills & Expertise</h2>
        <dl>
          <dt>General Expertise:</dt>
          <dd>Workstation and server configuration, World Wide Web, computer networking systems and security.</dd>
          <dd>Computer hardware installation, setup, and maintenance (servers and desktops).</dd>
          <br></br>
          <dt>Operating System Experience:</dt>
          <dd>Windows client and server operating systems, GNU/Linux distributions primarily Debian and Fedora based.</dd>
          <dd>Hobby experience with older UNIX operating systems like Solaris and Sun Microsystems hardware.</dd>
          <dd>Basic experience with MacOS also.</dd>
          <br></br>
          <dt>Programming:</dt>
          <dd>World Wide Web programming using HTML, CSS, and JavaScript.</dd>
          <dd>Modern World Wide Web programming using React, Next.js, and Gatsby.</dd>
          <dd>The Java programming language.</dd>
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
        <h2>Music</h2>
        <p>This is just a list of bands, songs, artists, and albums that I like. I mainly will be listing somewhat unknown and not super popular ones here.</p>
        <table width="100%" border="0">
          <tr>
            <td width="50%" class="table-align">
              <ul>
                <li><a href='https://en.wikipedia.org/wiki/The_Sicilian_Defence_(album)'>The Alan Parsons Project - The Sicilian Defence</a>, this album was never properly released or finished and has so far only been available as part of the eleven-CD box set <i>The Complete Albums Collection</i>. The good thing is that this album has been uploaded to YouTube, so you are able to listen to it on there.</li>
                <li><a href='https://en.wikipedia.org/wiki/A_Scarcity_of_Miracles'>Jakko Jakszyk, Robert Fripp and Mel Collins - A Scarcity of Miracles</a>, this is a album with three of the best known musicians from King Crimson and I believe that they put together a very unique and not very well known about album of progressive rock.</li>
                <li><a href='https://en.wikipedia.org/wiki/Loveless_(album)'>My Bloody Valentine - Loveless</a>, loveless is a shoegaze and dream pop-ish album that has a pretty big legacy in the shoegaze genre.</li>
                <li><a href='https://en.wikipedia.org/wiki/Syd_Barrett'>Syd Barrett</a>, one of the original founders of Pink Floyd. He truly was a genius, it's incredibly unforuntate his health problems prevented him from creating more music with Pink Floyd and more music in general. Shine on you crazy diamond.</li>
              </ul>
            </td>
            <td width="50%" class="table-align">
              <ul>
                <li><a href='https://en.wikipedia.org/wiki/The_Alan_Parsons_Project'>The Alan Parsons Project</a>, honestly I believe that the entire discography of The Alan Parsons Project is great and would suggest anyone who likes softer rock to listen to them.</li>
                <li><a href='https://en.wikipedia.org/wiki/Evening_Star_(Fripp_%26_Eno_album)'>Robert Fripp & Brian Eno - Evening Star</a>, this album is pretty much all ambient and some tracks were actually used as music in <a href='https://en.wikipedia.org/wiki/The_Hitchhiker%27s_Guide_to_the_Galaxy_Primary_and_Secondary_Phases'><i>The Hitchhiker's Guide to the Galaxy Primary Phase</i></a>.</li>
                <li><a href='https://en.wikipedia.org/wiki/Instrument_Soundtrack'>Fugazi - Instrument Soundtrack</a>, this is a pretty weird album that can vary in genre, but is for sure experimental rock and some lo-fi elements in it.</li>
                <li><a href='https://second.wiki/wiki/rishloo'>Rishloo - Feathergun</a>, I believe that this is an incredibly underrated band and feathergun is an amazing album.</li>
              </ul>
            </td>
          </tr>
        </table>
      </main>
      <Footer></Footer>
    </body>
  )
}

// Export component
export default AboutPage
