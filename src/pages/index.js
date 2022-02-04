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
        <title>Home - Zagdrath</title>
        <meta charset="UTF-8"></meta>
      </Helmet>
      <Header></Header>
      <article>
        <h1>Home</h1>
        <p>Hello and welcome to my personal site that utilizes a modern JavaScript framework called <a href='https://www.gatsbyjs.com/'>Gatsby</a> but still is styled like a site from the 90s using very minimal CSS for styling. The views expressed here are my personal views, not those of any organization I represent. What's the purpose of this website? Well I don't fully know myself but I view it as a creative outlet and somewhat as a personal social media of sorts. It is a site I developed to publish all sorts of content.</p>
        <h3>Link Directory</h3>
        <p>Below are links to various websites that I have collected over quite awhile with various content.</p>
        <table width="100%" border="0">
          <tr>
            <td width="33%" class="table-align">
              <ul>
                <li><a href='https://distrowatch.com/'>DistroWatch</a> is a website that provides news, information, and other general information about various GNU/Linux and BSD distributions.</li>
                <li><a href='https://gifcities.org/'>GifCities</a> is a project of the <a href='https://archive.org/'>Internet Archive</a> to preserve and search through many of the GIFs once used on GeoCities.</li>
                <li><a href='https://templeos.org/'>TempleOS</a> is a free, public domain, 64-bit operating system entirely custom designed and developed by the great Terry A. Davis.</li>
                <li><a href='https://yesterweb.org/no-to-web3/'>Keep the web free, say no to Web3</a> This is an article highlighting all the bad that comes with Web3.</li>
              </ul>
            </td>
            <td width="33%" class="table-align">
              <ul>
                <li><a href='https://neocities.org/'>Neocities</a> is very similar to the old Geocities and is a website where you are able to host your own HTML website.</li>
                <li><a href='https://jgthms.com/web-design-in-4-minutes/'>Web Design in 4 minutes</a> is a guide on how to design a super basic but nice looking "modern" webpage.</li>
                <li><a href='https://cyber.dabamos.de/'>The Cyber Vanguard</a> is a website that contains some really nice information about retro programming, Fortran, and Unix.</li>
                <li><a href='https://cyber.dabamos.de/programming/modernfortran/'>Modern Fortran</a> is a great introduction to programming in Fortran 2003, 2008, and 2018 on Unix.</li>
              </ul>
            </td>
            <td width="33%" class="table-align">
              <ul>
                <li>Test</li>
              </ul>
            </td>
          </tr>
        </table>
      </article>
      <Footer></Footer>
    </body>
  )
}

// Export component
export default IndexPage
