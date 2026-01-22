import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../sections/hero/Hero'
import WhyChooseus from '../../sections/whychooseus/WhyChooseus'
import Whylearn from '../../sections/whylearn/Whylearn'
import Featurecourses from '../../sections/featurecourses/Featurecourses'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <WhyChooseus/>
        <Whylearn/>
        <Featurecourses/>
    </div>
  )
}

export default Home