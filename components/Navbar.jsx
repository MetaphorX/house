import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineMenu, AiOutlineClose, AiOutlineMail, AiOutlineFacebook, AiOutlineTwitter} from 'react-icons/ai'
import {FaLinkedinIn} from 'react-icons/fa'

const Navbar = () => {

    const [nav, setNav] = useState(false)
    const navHandler=()=>{
        setNav(!nav)
    }

    const connectWallet=()=>{

    }
  return (
    <div className='w-full z-[100] border-b border-red-500'>
        <div className='flex justify-between items-center shadow-xl w-full h-full px-2 2xl:px-16 cursor-pointer'>
        <h2 className='text-2xl font-bold text-left mb-5 py-4'>Emex<span className='text-red-500'>Mgt</span></h2>
            <div className='md:flex space-x-5'>
                <ul className='hidden md:flex text-red-500 font-semibold'>
                    <Link href="/">
                        <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </Link>
                    <Link href="/">
                        <li className='ml-10 text-sm uppercase hover:border-b'>Community</li>
                    </Link>
                    <button className='ml-10 text-sm p-3 px-6 pt-2 text-white bg-red-500 rounded-full baseline cursor-pointer'>Connect Wallet</button>
                    
                </ul>
                <div onClick={navHandler} className='md:hidden cursor-pointer'>
                    <AiOutlineMenu fontSize={35}/>
                </div>
            </div>
        </div>
        <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
            <div className={
                nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500' 
                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                }>
                <div>
                    <div className='flex w-full items-center justify-between text-center'>
                        <h2 className='text-2xl font-bold text-left'>Emex<span className='text-red-500'>Mgt</span></h2>
                        <div onClick={navHandler} className='rounded-full hover:shadow-md p-3 cursor-pointer'>
                            <AiOutlineClose fontSize={35}/>
                        </div>
                    </div>
                    <div className='border-b text-center'>
                        <p className='w-[85%] md:w-[90%] py-4'>Get Accomodations before Resumption. <br/>Secure and Guaranteed</p>
                    </div>
                </div>
                <div className='flex flex-col py-6'>
                    <ul className='text-center uppercase text-lg'>
                        <Link href="/">
                            <li className='py-3 cursor-pointer hover:scale-110 ease-in duration-20'>Home</li>
                        </Link>
                        <Link href="/">
                            <li className='py-3 cursor-pointer hover:scale-110 ease-in duration-20'>Community</li>
                        </Link>
                        <button 
                        onClick={connectWallet}
                        className='ml-10 text-md p-4 m-4 text-center pt-2 text-white bg-red-500 rounded-full baseline cursor-pointer hover:shadow-xl'>
                            Connect Wallet
                        </button>
                        
                    </ul>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Navbar