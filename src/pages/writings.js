// Imports
import * as React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Header from "../components/header"
import Footer from "../components/footer"

// Define component
const WritingsPage = () => {
  return (
    <body>
      <Helmet>
        <title>Writings - Cody Wellman</title>
        <meta charset="UTF-8"></meta>
      </Helmet>
      <Header></Header>
      <main>
        <h2>Writings</h2>
        <p>This is a page for my writings which may include blog posts that I write, tutorial or 
        how-to guides, and documentation for any projects I may work on. I may also host 
        mirrors of other's writings and etc.</p>
        <p>These are blog posts, tutorials, and how-to guides that usually don't fall into the other categories on this page.</p>
        <ul>
          <li><Link to='/writings/setup-wan'>How to Setup a WAN in Cisco Packet Tracer</Link>, a tutorial on how you would go about setting up a Wide Area Network(WAN) in Cisco Packet Tracer.</li>
          <li>How to Create Your own Tilde Server</li>
        </ul>
        <h2>Projects</h2>
        <p>Here are some projects that I either have worked on in the past or I am currently working on. Just as a warning some of these articles may be just me rambling.</p>
        <ul>
          <li><Link to='/writings/nokiaip440'>Nokia IP440 Firewall</Link>, this is an old 4U firewall / security 
          appliance I bought off of eBay, it happens to use a standard desktop Intel motherboard with a Pentium III.</li>
          <li><Link to='/writings/dellmd1000'>Dell PowerVault MD1000</Link>, these are the chronicles of me trying to get a Dell PowerVault MD1000 to work properly, which has not been easy so far.</li>
          <li><Link to='/writings/babel'>The Library of Babel</Link>, this is a program that simulates The Library of Babel and is developed in Rust.</li>
          <li><Link to='/writings/10base5'>10BASE5 Networking</Link>, this is an attempt at building a 10BASE5 network.</li>
        </ul>
        <h2>Books</h2>
        <p>These are some books that I highly recommend people to check out and read.</p>
        <ul>
          <li><a href='../fsfs3-hardcover.pdf'>Free Software, Free Society</a>, this is the third edition of a selected 
          collection of writings by Richard M. Stallman. It introduces the subject of history and development of the GNU 
          Project and the Free Software Foundation. I also have the <a href='../rms-essays.pdf'>first edition</a> 
          and <a href='../fsfs-ii-2.pdf'>second edition</a> available to download.</li>
        </ul>
      </main>
      <Footer></Footer>
    </body>
  )
}

// Export component
export default WritingsPage
