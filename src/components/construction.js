// Imports
import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

// Export component
export default function Construction() {
  return (
    <div>
      <p style={{width: "500px"}}>
        <StaticImage src="../images/construction.gif" alt="Under Construction" width={40} class="construction"/>
        This website is still under construction and I try to publish content <a href='https://en.wikipedia.org/wiki/Release_early,_release_often'>early and often</a> and sometimes some pages may be incomplete.
      </p>
    </div>
  )
}
