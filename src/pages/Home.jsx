import React from 'react'
import Hero from '../components/Hero'
import TwoCards from '../components/TwoCards'
import SingleBanner from '../components/SingleBanner'
import Organics from '../components/Organics'
import FiveCards from '../components/FiveCards'
import BestProducts from '../components/BestProducts'
import ThreeCols from '../components/ThreeCols'
import TrustedOrganics from '../components/TrustedOrganics'

const Home = () => {
  return (
    <>
      <Hero />
      <FiveCards />
      <BestProducts />
      <Organics />
      <TwoCards />
      <ThreeCols />
      <SingleBanner />
      <TrustedOrganics/>
    </>
  );
}

export default Home
