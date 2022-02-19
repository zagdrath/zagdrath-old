// Imports
import * as React from 'react'
import { Helmet } from 'react-helmet'
import Header from "../components/header"
import Footer from "../components/footer"
import Construction from "../components/construction"

// Define component
const IndexPage = () => {
  return (
    <body>
      <Helmet>
        <title>Home - Cody Wellman</title>
        <meta charset="UTF-8"></meta>
      </Helmet>
      <Header></Header>
      <Construction></Construction>
      <main>
        <h2>Home</h2>
        <p>Hello and welcome to my personal site! As you may notice the site looks very 90s and that is because it is, I 
        designed it to be very similar to some of the first WWW webpages. Just so you know, the views expressed here 
        are my personal views, not those of any organization I represent. What's the purpose of this website? Well I 
        don't fully know myself but I view it as a creative outlet and somewhat as a personal social media of sorts. 
        It is a site I developed to publish all sorts of content.</p>
        <h2>Link Directory</h2>
        <p>Below are links to various websites that I believe contain important or useful content.</p>
        <table width="100%" border="0">
          <tr>
            <td width="33%" class="table-align">
              <ul>
                <li><a href='https://distrowatch.com/'>DistroWatch</a> is a website that provides news, information, and other general information about various GNU/Linux and BSD distributions.</li>
                <li><a href='https://gifcities.org/'>GifCities</a> is a project of the <a href='https://archive.org/'>Internet Archive</a> to preserve and search through many of the GIFs once used on GeoCities.</li>
                <li><a href='https://templeos.org/'>TempleOS</a> is a free, public domain, 64-bit operating system entirely custom designed and developed by the great Terry A. Davis.</li>
                <li><a href='https://yesterweb.org/no-to-web3/'>Keep the web free, say no to Web3</a> This is an article highlighting all the bad that comes with Web3.</li>
                <li><a href='https://wikileaks.org/'>WikiLeaks</a> is a multi-national media organization and associated library.</li>
                <li><a href='https://assangedefense.org/'>Assange Defense</a>, Defend press freedom, defend Julian Assange.</li>
                <li>The <a href='https://www.fsf.org/'>Free Software Foundation</a> is a nonprofit with a worldwide mission to promote computer user freedom.</li>
              </ul>
            </td>
            <td width="33%" class="table-align">
              <ul>
                <li><a href='https://neocities.org/'>Neocities</a> is very similar to the old Geocities and is a website where you are able to host your own HTML website.</li>
                <li><a href='https://jgthms.com/web-design-in-4-minutes/'>Web Design in 4 minutes</a> is a guide on how to design a super basic but nice looking "modern" webpage.</li>
                <li><a href='https://cyber.dabamos.de/'>The Cyber Vanguard</a> is a website that contains some really nice information about retro programming, Fortran, and Unix.</li>
                <li><a href='https://cyber.dabamos.de/programming/modernfortran/'>Modern Fortran</a> is a great introduction to programming in Fortran 2003, 2008, and 2018 on Unix.</li>
                <li><a href='https://stallman.org/'>Stallman.org</a> is the personal website of Richard Stallman, the creator of GNU and founder of the Free Software Foundation.</li>
                <li><a href='https://www.gnu.org/'>GNU</a> is a collection of free software that is usually used together with the Linux kernel to form a single GNU/Linux operating system.</li>
              </ul>
            </td>
            <td width="33%" class="table-align">
              <ul>
                <li><a href='https://www.curtiswallen.com/pgp/'>PGP Beginners Guide</a>, this is a great resource to learn what PGP is and how to use it.</li>
                <li><a href='https://cyberpunked.org/'>Cyberpunked.org</a> contains many links and resources about cybersecurity and hardening your computer and technology.</li>
                <li><a href='https://www.kali.org/'>Kali Linux</a> is a GNU/Linux distribution that is a advanced penetration testing platform.</li>
                <li><a href='https://tails.boum.org/'>Tails</a> is a GNU/Linux distribution that is portable and protects against surveillance and censorship.</li>
                <li>The <a href='https://www.torproject.org/'>Tor Project</a> is a organization that researches online privacy and anonymity and has created the well known Tor Browser.</li>
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
export default IndexPage
