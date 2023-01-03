import React, {useState} from 'react'
import {BsPlusLg, BsClock} from "react-icons/bs"
import { useLocation } from "react-router-dom";
import {TiTick} from "react-icons/ti"
import {IoMdDownload} from "react-icons/io"

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Curriculum = () => {

    const content = [
        {
            title: "Blockchain Fundamentals",
            // title: "Week 1 & Week 2",
            week:" Week 1 & Week 2",
            desc: [
                "History of the financial system.",
                "Blockchain Fundamentals.",
                "Understanding the Bitcoin mechanism.",
                "Understanding Ethereum Mechanism.",
                "JavaScript crash course.",
            ],
            last_point: "Project building in Javascript.",
          },

        {
            title: "Smart contracts",
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
                "Tools, Services and libraries in Blockchain.",
                "Understanding the applications of blockchain",
                "ERC standards",
            ],
            last_point: "Layers in Blockchain.",
          },

        {
            title: "Defi",
            week:" Week 7, Week 8 & Week 9",
            desc: [
                "Introduction to DeFi.",
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

    const location = useLocation();

    const [expanded, setExpanded] = useState(-1);

    const handleChange =
        (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
        };

  return (
    <div className=' px-4 border-t-2 pt-20 mb-12 md:px-20'>


        <h1 className='text-5xl mb-16 text-[#003979] font-bold'>Curriculum</h1>
        <div className='flex flex-col md:flex-row mb-12 md:justify-between items-center'>
            <p className='w-[80%]'>Best in-class content by leading faculty and industry leaders in the form of live Sessions, 10+ Web3 projects, doubt solving and many more!</p>
            <a href='/Ethereum_Curriculum.pdf' download="Ethereum_Curriculum.pdf" ><button className='border-2 border-[#003979] m-0 hover:text-[#003979] rounded-xl px-4 py-3  hover:bg-white bg-[#003979] text-[15px] flex items-center text-white hover:cursor-pointer'>Curriculum <IoMdDownload className='ml-2'/></button></a>
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
                    <div key={i} className='my-2 overflow-hidden border-t'>
                        <Accordion expanded={expanded === i} key={i} onChange={handleChange(i)} style={{textAlign:"left"}}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography><b>{item.title}</b></Typography>
                            </AccordionSummary>
                            {(i!=10 && i!=11) && item.desc.map((desc) => (
                            <AccordionDetails>
                            <Typography>
                                {desc}
                            </Typography>
                            </AccordionDetails>
                            ))}
                            {(i!=10 && i!=11) && 
                                <AccordionDetails>
                                <Typography>
                                {item.last_point}
                                </Typography>
                                </AccordionDetails>
                            }
                        </Accordion>
                    </div>
                </>)})}
        </div>
    </div>
  )
}

export default Curriculum