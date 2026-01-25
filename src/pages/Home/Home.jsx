import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../sections/hero/Hero'
import WhyChooseus from '../../sections/whychooseus/WhyChooseus'
import Whylearn from '../../sections/whylearn/Whylearn'
import Featurecourses from '../../sections/featurecourses/Featurecourses'
import Platform from '../../sections/platform/Platform'
import Testimonials from '../../sections/testimonials/Testimonials'
import Blog from '../../sections/blog/Blog'
import Newsletter from '../../sections/newsletter/Newsletter'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <WhyChooseus/>
        <Whylearn/>
        <Featurecourses/>
        <Platform/>
        <Testimonials/>
        <Blog/>
        <Newsletter/>
    </div>
  )
}

export default Home