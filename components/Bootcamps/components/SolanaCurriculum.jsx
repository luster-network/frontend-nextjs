import React, {useState} from 'react'
import {BsPlusLg, BsClock} from "react-icons/bs"
import {TiTick} from "react-icons/ti"
import {IoMdDownload} from "react-icons/io"

const SolanaCurriculum = () => {

    const content = [
        {
            title: "Client interaction with the Solana Network",
            // title: "Week 1 & Week 2",
            week:" Week 1 & Week 2",
            desc: [
                "Read data from the network",
                "Write data to the network",
                "Interact with wallets",
                "Serialize custom instruction data",
                "Deserialize custom account data",
            ],
            last_point: "Page, Order, and Filter custom account data.",
          },

        {
            title: "Client interaction with common Solana programs",
            week:" Week 3 & Week 4",
            desc: [
                "Introduction to smart contracts.",
                "Wallets.",
                "Solidity basics with beginner projects",
            ],
            last_point: "Advance concepts of Solidity."
          },

        {
            title: "Tools in Blockchain",
            week:"Week 5 & Week 6",
            desc: [
                "Create tokens with the Token Program",
                "Swap tokens with the Token Swap Program",
            ],
            last_point: "Create Solana NFTs With Metaplex",
          },

        {
            title: "Basic Solana Program Development",
            week:" Week 7, Week 8 & Week 9",
            desc: [
                "Hello World",
                "Liquidity Pools.",
                "Understanding Uniswap.",
                "Brief understanding of crypto exchange.",
                "Defi Project - Beginner Level.",
                
            ],
            last_point: "Defi Project - Advance Level.",
          },

        {
            title: "NFTs",
            week:" Week 10, Week 11 & Week 12",
            desc: [
                "Introduction to NFTs",
                "Metadata and IPFS.",
                "ERC721, ERC1155, ERC2981 etc.",
                "Lazy Minting.",
                "Fractional NFTs",
                "Understanding OpenSea",
                "NFT project - Beginner Level",
            ],
            last_point: "NFT project - Advance Level",
          },

        {
            title: "DAO",
            week:" Week 13, Week 14 & Week15",
            desc: [
                "Introduction to DAO.",
                "Understanding AAVE and MakerDAO",
                "Introduction to the Metaverse",
            ],
            last_point: "Understanding Sandbox",
          },

        {
            title: "Interview preperation",
            week:" Week 16",
            desc: [
                "",
            ],
            last_point: "",
          },
        ]


    const [expanded, setExpanded] = useState(-1);

    const handleChange =
        (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        };

  return (
    <div className=' px-4 pt-8 mb-12 md:px-20'>

        <h1 className='text-5xl mb-16 text-[#003979] font-bold'>Curriculum</h1>
        <div className='flex flex-col md:flex-row mb-12 md:justify-between items-center'>
            <p className='w-[80%]'>Best in-class content by leading faculty and industry leaders in the form of live Sessions, 10+ Web3 projects, doubt solving and many more!</p>
            <a href='WEB3Bootcamp_Cryptonaukri_Curriculum.pdf' download="WEB3Bootcamp_Cryptonaukri_Curriculum.pdf" ><button className='border-2 border-[#003979] m-0 hover:text-[#003979] rounded-xl px-4 py-3  hover:bg-white bg-[#003979] text-[15px] flex items-center text-white hover:cursor-pointer'>Curriculum <IoMdDownload className='ml-2'/></button></a>
        </div>

        <div className='flex flex-col md:flex-row items-center md:justify-center'>
            <div className='items-center text-center md:mr-12'>
                <p className='text-[#003979] font-semibold mb-2'>200+</p>
                <p className='font-semibold'>Hours of learning</p>
            </div>

            <div className='items-center md:mr-12 text-center'>
                <p className='text-[#003979] font-semibold mb-2'>10+</p>
                <p className='font-semibold'>WEB3 Projects</p>
            </div>

            <div className='items-center md:mr-12 text-center'>
                <p className='text-[#003979] font-semibold mb-2'>100%</p>
                <p className='font-semibold'>Placement</p>
            </div>

            <div className='items-center text-center'>
                <p className='text-[#003979] font-semibold mb-2'>Pay fee</p>
                <p className='font-semibold flex items-center'>After placement ! <div className='text-green-600 text-2xl'><TiTick /></div> </p>
            </div>

        </div>

        {/* Carousel div */}
        <div className='shadow-md mx-auto mt-20  w-full md:w-2/3'>           
            {content.map((item, i) => {
                return (
                <>
                    <div className='overflow-hidden border'>
                        <label>
                        <input className='absolute opacity-0 peer' type="checkbox"></input>
                        <div className='flex items-center cursor-pointer justify-between'>
                            <div className='p-5'>
                                <p className=' m-0 font-semibold'>{item.title}</p>
                                <div className='flex items-center mt-2 text-xs '><BsClock className='m-0 mr-1'/><p className='text-xs m-0'>{item.week}</p></div>
                            </div>
                            <BsPlusLg className=' h-12 float-right peer-checked:rotate-45 peer-checked:text-indigo-500 mr-4'/>
                        </div>
                        {(i!=10 && i!=11) && item.desc.map((desc) => {
                            return(
                                <div className='bg-gray-900 peer-checked:border-b-2 border-white max-h-0 peer-checked:max-h-20'><p className='p-5 my-auto'>{desc}</p></div>
                            );
                        })}
                        {/* {(i!=10 && i!=11) && <div className='bg-gray-300 max-h-0 mb-4 peer-checked:max-h-20'><p className='p-5'>{item.last_point}</p></div>} */}
                        </label>
                    </div>
                </>)})}

        </div>
    </div>
  )
}

export default SolanaCurriculum