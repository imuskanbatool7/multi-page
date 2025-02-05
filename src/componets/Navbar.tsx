import React from 'react'
import Link from 'next/link';



 function Navbar() {
  return (<>

      <div>
        
          <nav className="navlist">  
            
          <ul > 
            
              <li className='container'>
                  <Link href="./Home"><b>HOME</b></Link>
              </li>
              
              
              <li className='container'>
              <Link href="./Basic"> <b>BASIC</b></Link>
              </li>
              
              <li className='container'>
                  <Link href="./pros-cons"><b>PROS/CONS</b></Link>
              </li>
              
               <li className='container'>
                <Link href="./about"><b>ABOUT</b></Link>
               </li>
               
          </ul>
          </nav>
          </div>
      </>
  )
}
export default Navbar;


