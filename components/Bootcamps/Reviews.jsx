import React,{useState} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay, Navigation } from "swiper";
import Image from 'next/image';

// import "./styles.css";
import Card from "./Card"

const Reviews = () =>{

    const people = [
        {
            name: "Pranav Kumbhar",
            image: "https://drive.google.com/uc?id=1VGtIrCO9VKD_aEDjA_8Peee9hPmSn1gQ",
            review:"I got to learn development skills and the way we should approach any problem statement. Kajal Mam is a good teacher, overall understanding is good during the lectures. Akshay is a good mentor and he solves our doubts daily. Also, he helped a lot in dapp development. Crypto Naukri is going to be a huge ecosystem for web3 companies and developers. You guys are going well, keep it up",
            active:true
        },
        {
            name: "Ashwin Krishna TS",
            image: "https://drive.google.com/uc?id=1Q5-TDSTdssHT2j5DBhc8nErm3rPxdZpT",
            review:"Best Institute i ever seen in case of knowledge, service and fee. The sessions was very nice, giving 9/10 rating for the sessions. Got the architecture if Dapp's. I was having knowledge in web2 full stack development so that it was very easily to grasp the Dapp development.",
            active:true
        },
        {
            name: "Jayjeet Kumar",
            image: "https://drive.google.com/uc?id=1MIXA-Id4lc-WZuXgVNUGTnUU58uqIOmV",
            review:"Bootcamp help me to learn about Solidity language, more about Blockchains terms, Hardhat, truffle and Ether.js. Cryptonaukri have done their best while teaching us. Thanks for clear my some doubtful concept. Nice, Best platform for learning about Web3.",
            active:true
        },
        {
            name: "Ayush Nayak",
            image: "https://drive.google.com/uc?id=1MyKLH6xnJeAsMNBOK4K1K891RQHT4pNu",
            review:"Cryptonaukri's WEB3 bootcamp really helped me through concepts, the educator was helpful throughout the course. The mentor was really good, couldn't ask for a bette one. Great initiative for placements ",
            active:true
        },
        {
            name: "Chandan J",
            image: "https://drive.google.com/uc?id=15-ZRsLCkKLDgrSauJZMcOMQhEZY8Gtt2",
            review:"It helped in both personally and professionally i learnt lot of things regarding theoretically about the blockchain and got some of good inputs about how the blockchain company works and the infrastructure. Mentor cleared all the concept in details ",
            active:true
        },
        {
            name: "Shubham Garg",
            image: "https://drive.google.com/uc?id=124InUJ6mYyVgKcD4mTqWUOP4PtzB116P",
            review:"It helped a lot in understanding the fundamentals nd how things work in blockchain. They have awesome and great mentor. ",
            active:true
        },
    ]

  return (
  <div className='px-16'>
    <p className=' pt-12 text-5xl font-semibold text-white items-center text-center'>Reviews</p>
    <div className='h-[1px] mb-16 bg-white m-auto w-[17rem]'></div>
    <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        autoplay={true}
      >
        {people.map((person,i) => (
            <SwiperSlide>
                <div className='flex flex-col p-8 items-center border-2 w-[28rem] h-[35rem] border-white justify-center'>
                    <img src={person.image} alt={person.name} className="w-[15rem] rounded-full object-cover h-[15rem]" />
                    <p className='text-2xl my-4'>{person.name}</p>
                    <p className='text-left'>{person.review}</p>
                </div>
            </SwiperSlide>

        ))}
      </Swiper>
    
  </div>
)};

export default Reviews;