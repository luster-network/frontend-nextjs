import React from 'react'
import AdditionalInfo from '../../components/Bootcamps/components/AdditionalInfo'
import Graph from '../../components/Bootcamps/components/Graph'
import Landing from '../../components/Bootcamps/components/Landing'
import Reviews from '../../components/Bootcamps/Reviews'
import Faq from "../../components/landing-page-components/Faq"
import Champions from "../../components/landing-page-components/Champions"

const Ethereum = () => {
  return (
    <div className='px-2 md:px-20'>
      <Landing />
      <Graph />
      <Champions />
      <AdditionalInfo />
      <Reviews />
      <Faq />
    </div>
  )
}

export default Ethereum