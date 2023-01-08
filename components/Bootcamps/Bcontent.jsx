import React from 'react'
import truscholar_logo from "./assets/backbone/truscholar.png"
import byjus_logo from "./assets/backbone/byjus.png"
import cryptonaukri_logo from "./assets/backbone/cryptonaukri.png"
import Image from "next/image"

const Bcontent = ({content}) => {

    const Educator = [
        <p className='m-0 text-lg'>  Training Director and Blockchain Trainer at <b className='flex'>BYJUS Future School <Image src={byjus_logo} alt="byjus logo" className='ml-3 h-8 w-8' /> </b></p>,
        <p className='m-0 text-lg'>  Educator at Blockchain Council</p>,
        <p className='m-0 text-lg'>  Educator at Simplilearn</p>,
        <p className='m-0 text-lg'>  Blockchain (Ethereum, Hyperledger) Web3 | Solidity</p>,
        <p className='m-0 text-lg'>  <b>B.Tech</b> -GLA University</p>,
        <p className='m-0 text-lg'>  <b>M.Tech</b> -SMU Gangtok</p>,
        
    ]
    const Mentor = [
        <p className='m-0 flex text-lg'>  Blockchain Code Developer at <b> <Image src={truscholar_logo} alt="byjus logo" className='h-6 w-28 ml-3' /> </b></p>,
        <p className='m-0 text-lg'>  Hyperledger Indy | Hyperledger Fabric</p>,
        <p className='m-0 text-lg'>  Ethereum | SSI</p>,
    ]
    const Counsellor = (
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut velit ac nulla dignissim dignissim vel ac elit. Pellentesque cursus tortor a tellus ornare, in tempor elit placerat. Cras ut urna justo. Etiam laoreet, tellus tincidunt ornare vestibulum, nunc mi facilisis quam, non viverra diam purus eget urna. In posuere, massa non viverra elementum, ante ipsum lobortis tellus,</p>
    )
    const Placementcell = [
        <p className='m-0 flex text-lg'>  <b>Founder - LUSTER</b></p>,
        <p className='m-0 text-lg'>  <b>B.Tech</b> -IIIT Nagpur</p>,
    ]

    if (content === 'Educator')
    {
        return Educator.map((item)=><div className='flex items-center md:text-xl py-2'>
        <div className='bg-white rounded-full h-2 w-2 md:h-4 md:w-4 mr-3'></div>
        <p>{item}</p>
    </div>)
    }
    else if (content === 'Mentor')
    {
        return Mentor.map((item)=><div className='flex items-center md:text-xl py-2'>
        <div className='bg-white rounded-full h-2 w-2 md:h-4 md:w-4 mr-3'></div>
        <p>{item}</p>
    </div>)
    }
    else if (content === 'Counsellor')
    {
        return Counsellor.map((item)=><div className='flex items-center md:text-xl py-2'>
        <div className='bg-white rounded-full h-2 w-2 md:h-4 md:w-4 mr-3'></div>
        <p>{item}</p>
    </div>)
    }
    else
    {
        return Placementcell.map((item)=><div className='flex items-center md:text-xl py-2'>
        <div className='bg-white rounded-full h-2 w-2 md:h-4 md:w-4 mr-3'></div>
        <p>{item}</p>
    </div>)
    }


}

export default Bcontent;