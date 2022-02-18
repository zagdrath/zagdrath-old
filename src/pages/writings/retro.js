// Imports
import * as React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Header from "../../components/header"
import Footer from "../../components/footer"
import { StaticImage } from 'gatsby-plugin-image'

// Define component
const Retro = () => {
  return (
    <body>
      <Helmet>
        <title>Retro Networking - Cody Wellman</title>
        <meta charset="UTF-8"></meta>
      </Helmet>
      <Header></Header>
      <main>
        <h2>Retro Networking</h2>
        <p>This is just an article about me trying to source all the materials to build a 10BASE5 
        network. One of the most important pieces obviously is the cable, so I am currently 
        trying to source some Belden 9880 cable for this network. My father may have some 
        in a shed so I will be going to look to see if it is what I need.</p>
        <p>Update: I checked out the cable and the cable he was talking about ended up being 
        TFC T-10, which is very similar to RG-6/U and is 75 Ohm rather than 50 Ohm RG-58A/U 
        cable that I need for 10BASE2 networking. This cable obviously is not exactly correct 
        for 10BASE2, but it should be able to work at a short distance for me until I am able 
        to source some 10BASE5 or proper 10BASE2 cable for cheap. There also was a spool of 
        RG-8, which is very similar to 10BASE5 cable but it ended up not being solid core, 
        so I am unable to use it with the vamprire taps. I also bought a 3COM Etherlink 
        XL PCI 3C900-COMBO card for my client systems and a Cabletron ST-500 transceiver 
        that comes with an AMP 228752-1 vampire tap. Below are some images of the TFC 
        T-10 cable and other parts I have gotten so far for this project.</p>
        <table width="100%" border="0">
          <tr>
            <td width="33%" class="table-align">
              <StaticImage src='../../images/t10.png' alt='TFC T-10 Cable'/>
            </td>
            <td width="33%" class="table-align">
              <StaticImage src='../../images/3com.png' alt='3COM Etherlink XL PCI 3C900-COMBO'/>
            </td>
            <td width="33%" class="table-align">
              <StaticImage src='../../images/st500.png' alt='Cabletron ST-500'/>
            </td>
          </tr>
        </table>
        <Link to='../../writings'>&lt;-- Back</Link>
      </main>
      <Footer></Footer>
    </body>
  )
}

// Export component
export default Retro
