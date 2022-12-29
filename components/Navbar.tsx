import React,{useState} from 'react'
import Link from 'next/link';
import Image from 'next/image';
import logo from "../assets/logo.png"

const Navbar = () => {

  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <div className='flex h-24 pt-8 px-12 items-center flex-row justify-between'>
      <div className='relative'>
        <p className='text-4xl md:text-6xl font-semibold'>LUSTER</p>
        {/* <Image className='w-[14rem]' src={logo} alt="logo" /> */}
      </div>

      <div className='md:flex hidden items-center flex-row justify-between'>
        <Link href='/' className='mr-8 relative group'>
          <span>Home</span>
          <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-[#016BF0] group-hover:w-1/2 group-hover:transition-all"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-[#016BF0] group-hover:w-1/2 group-hover:transition-all"></span>
        </Link>

        <Link href='/#schedule' className='mr-8 relative group'>
          <span>About us</span>
          <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-[#016BF0] group-hover:w-1/2 group-hover:transition-all"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-[#016BF0] group-hover:w-1/2 group-hover:transition-all"></span>
        </Link>

        <Link href='/#faq' className='mr-8 relative group'>
          <span>Naukri hub</span>
          <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-[#016BF0] group-hover:w-1/2 group-hover:transition-all"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-[#016BF0] group-hover:w-1/2 group-hover:transition-all"></span>
        </Link>

        <Link href='/#panelist' className='mr-8 relative group'>
          <span>Community</span>
          <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-[#016BF0] group-hover:w-1/2 group-hover:transition-all"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-[#016BF0] group-hover:w-1/2 group-hover:transition-all"></span>
        </Link>

        <Link href='/#prizes' className='mr-8 relative group'>
          <span>Contact</span>
          <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-[#016BF0] group-hover:w-1/2 group-hover:transition-all"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-[#016BF0] group-hover:w-1/2 group-hover:transition-all"></span>
        </Link>

        <span className="absolute left-0 -bottom-1 w-full h-2 bg-blue-400 -z-10 group-hover:h-full group-hover:transition-all"></span>
        <Link href='/' className='transform transition duration-500 hover:scale-125 mr-8 h-10 flex border rounded-lg items-center w-20 justify-center'>Login</Link>
        <Link href='/' className='transform transition duration-500 hover:scale-125 h-10 flex border-transparent rounded-lg items-center w-24 bg-gradient-to-r from-[#58AFEF] to-[#9374DC] justify-center'>Register</Link>
      
      </div>

      <div className='md:hidden relative'>
        <div onClick={handleClick} className='hover:cursor-pointer'>
          <div className='w-[2rem] h-[1px] bg-white'></div>
          <div className='w-[2rem] h-[1px] my-2 bg-white'></div>
          <div className='w-[2rem] h-[1px] bg-white'></div>
        </div>

        <div className={` ${open? 'block' : 'hidden'} z-50 absolute bg-black px-4 py-2 right-1 items-center text-center justify-center flex flex-col`}>
        <Link href='/' className='mr-8 relative group'>
          <span>Home</span>
          <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-[#016BF0] group-hover:w-1/2 group-hover:transition-all"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-[#016BF0] group-hover:w-1/2 group-hover:transition-all"></span>
        </Link>

        <Link href='/#schedule' className='mr-8 relative group'>
          <span>About us</span>
          <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-[#016BF0] group-hover:w-1/2 group-hover:transition-all"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-[#016BF0] group-hover:w-1/2 group-hover:transition-all"></span>
        </Link>

        <Link href='/#faq' className='mr-8 relative group'>
          <span>Naukri hub</span>
          <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-[#016BF0] group-hover:w-1/2 group-hover:transition-all"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-[#016BF0] group-hover:w-1/2 group-hover:transition-all"></span>
        </Link>

        <Link href='/#panelist' className='mr-8 relative group'>
          <span>Community</span>
          <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-[#016BF0] group-hover:w-1/2 group-hover:transition-all"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-[#016BF0] group-hover:w-1/2 group-hover:transition-all"></span>
        </Link>

        <Link href='/#prizes' className='mr-8 relative group'>
          <span>Contact</span>
          <span className="absolute -bottom-1 left-1/2 w-0 h-[2px] bg-[#016BF0] group-hover:w-1/2 group-hover:transition-all"></span>
          <span className="absolute -bottom-1 right-1/2 w-0 h-[2px] bg-[#016BF0] group-hover:w-1/2 group-hover:transition-all"></span>
        </Link>
          <Link href='/' className='my-2 h-10 flex border rounded-lg items-center w-20 justify-center'>Login</Link>
          <Link href='/' className='h-10  transform transition duration-500 hover:scale-125 my-2 flex font-semibold border-transparent rounded-lg items-center w-20 bg-gradient-to-r from-[#58AFEF] to-[#9374DC]  justify-center'>Register</Link>
        </div>

      </div>
    </div>
  )
}

export default Navbar