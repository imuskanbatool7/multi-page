



import React from 'react'
import Image from "next/image"

export default function Home() {
  return (<>
     <h1 className='welcomeheading'> <b>WELCOME TO GMO FOOD</b></h1>

    <div>
      <br />
      <p><i><u><b>Uncover the science, benefits, and debates surrounding genetically modified foods</b></u></i></p> <br />
      <section className='img'>
      <Image
  src="https://www.sfdachina.com/images/gmo-1.png"
  alt="GMO"
  width={900}
  height={500}
  unoptimized={true} 
/>

      </section>
    </div>
    </>
  )
}
