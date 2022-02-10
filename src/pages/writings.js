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
        <p>This is a page for my writings which may include blog posts that I write, tutorial or how-to guides, and documentation for any projects I may work on. I may also host mirrors of other's writings and etc.</p>
        <p>To do: (I will get to writing these eventually)</p>
        <ul>
          <li><Link to='/writings/setup-wan'>How to Setup a WAN in Cisco Packet Tracer</Link>, a tutorial on how you would go about setting up a Wide Area Network(WAN) in Cisco Packet Tracer.</li>
          <li>Nokia IP440 Firewall</li>
          <li>Dell PowerVault MD1000</li>
          <li>How to Create Your own Tilde Server</li>
        </ul>
        <h2>Books</h2>
        <p>These are some books that I highly recommend people to check out and read.</p>
        <ul>
          <li><a href='https://www.zagdrath.dev/writings/books/fsfs3-hardcover.pdf'>Free Software, Free Society</a>, this is the third edition of a selected collection of writings by Richard M. Stallman. It introduces the subject of history and development of the GNU Project and the Free Software Foundation. I also have the <a href='https://www.zagdrath.dev/writings/books/rms-essays.pdf'>first edition</a> and <a href='https://www.zagdrath.dev/writings/books/fsfs-ii-2.pdf'>second edition</a> available to download.</li>
        </ul>
      </main>
      <Footer></Footer>
    </body>
  )
}

// Export component
export default WritingsPage
