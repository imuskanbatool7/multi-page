import React from 'react'
import Image from 'next/image'



function About() {
  return ( <>
       <h1 id="h1"><b>ABOUT GMO FOOD</b></h1> <br />
      <section className='sec1'> 
        
        <h2> <b><u>Our Purpose</u></b></h2>
        <p>GMO Food Info Hub is dedicated to providing clear, science-based information about GMOs in food. </p>          
          <p> We aim to help you understand the basics of GMOs, their benefits, and any concerns, so you can make informed.</p>
      
       <Image 
         src="./image.png"
         alt="GMO"
         width={900}
         height={500}
         unoptimized={true} 
        className="mx-auto my-4"
       />
      </section>
    </>
  )
}

export default About
