import React from "react";
import {FaLinkedinIn, FaInstagram, FaTwitter, FaYoutube, FaDiscord} from 'react-icons/fa'

const Footer = () => {

    return (
        <footer className='flex justify-center flex-col text-center text-lg py-6'>
          <div className="flex flex-col md:justify-between md:flex-row items-center py-8 md:px-32">
            <div className="flex flex-col md:items-start">
              <b className="mb-3 text-lg">About</b>
              <a href="/aboutus" target="_blank">About Us</a>
              <a href="/terms" target="_blank" className="my-1">Terms and Conditions</a>
              <a href="/privacy" target="_blank">Privacy</a>
              <a href="https://web3hack.tech/" target="_blank">Promotions and events</a>
            </div>

            <div className="flex flex-col my-8 md:my-0 md:items-start">
              <b className="mb-3 text-lg">Support</b>
              <a href="/contactus" target="_blank">Contact</a>
              <a href="https://discord.gg/r9bpXkqSzH" target="_blank" className="my-1">Discord</a>
              <a href="/dcma" target="_blank">DCMA</a>
            </div>

            <div>
              <b className='mt-4'>Connect with us:</b>
              <div className='flex justify-center my-2'>
                  <a href='https://www.linkedin.com/company/cryptonaukri/' target="_blank" className='border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-white hover:text-black'>
                      <FaLinkedinIn />
                  </a>
                  <a href='https://www.instagram.com/cryptonaukri/' target="_blank" className='border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-white hover:text-black'>
                      <FaInstagram />
                  </a>
                  <a href='https://discord.gg/r9bpXkqSzH' target="_blank" className='border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-white hover:text-black'>
                      <FaDiscord />
                  </a>
                  <a href='https://twitter.com/CryptoNaukri' target="_blank" className='border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-white hover:text-black'>
                      <FaTwitter />
                  </a>
                  <a href='https://www.youtube.com/channel/UCj-OThZ-RvEXqmscW4SKLRg' target="_blank" className='border-2 border-gray-200 rounded-full p-3 mx-1 hover:bg-white hover:text-black'>
                      <FaYoutube />
                  </a>
              </div>
            </div>
          </div>
          <p className="my-4 md:my-0">© LUSTER all right reserved</p>
        </footer>
    );  
};

export default Footer;