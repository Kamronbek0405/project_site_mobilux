import React from 'react'
import AboutLayout from './layout'
import { Banners } from '../banners'
import  Phone from '../phone/page'
import { Notebook } from '../notebook/notebook'



 const About = async () => {

  return (
   <div className='flex'>
    <AboutLayout/>
    <div>
     <section>
      <Banners/>
     </section>
     <section>
      <Phone/>
     </section>
     <section>
      <Notebook/>
     </section>
    </div>
    
   
   </div>
  )
}

export default About