 
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link'
import React, { useRef, useState } from 'react'
import { ImCross } from 'react-icons/im'

interface Props{
  
    showNav:boolean;
    closeNav:()=>void;
  
}

const MobileNavbar = ({closeNav,showNav}:Props) => {
  const {data: session } = useSession()
  const [isPopupVisible,setIsPopupVisible] = useState(false)
  const popupRef = useRef<HTMLDivElement| null>(null);

    const navOpenStyle = showNav ? "translate-x-0":"translate-x-[-100%]";

  return (
   <div>
     <div className={`fixed ${navOpenStyle} top-0 transform transition-all duration-500 z-[10000] left-0 right-0 bottom-0
    bg-black opacity-10 w-full h-[100vh]`}></div>
    <ul className={`text-white ${navOpenStyle}  fixed flex top-0 items-center justify-center flex-col h-[100vh] transform
     transition-all duration-300 delay-300 w-[50%] sm:w-[30%] bg-blue-900 space-y-10 z-[10006]`}>
     
      <li className='navlink text-[15px] sm:text-[20px]'>
      <Link href="/" >Home</Link>
      </li>
      <li className='navlink text-[15px] sm:text-[20px]'>
      <Link href="/dashboard" >Dashboard</Link>
      </li>
      <li className='navlink text'> 
                <Link href="/contact" >Contact</Link>
            </li>
      
    
      {!session ? (
            <> 
           <div className="flex justify-between max-w-2xl mx-auto px-2 py-4"> 
            <Link href='/login' className="border-2 rounded-full px-4 py-2 ml-4">
                Login
            </Link>
             
            
            <Link href='/register' className="bg-blue-600 rounded-full px-4 py-2 text-white">
                Register
            </Link>
            </div>
            </>
          ):(
            <>
             <div
          ref={popupRef}          
          className={`absolute z-30 right-0 top-20 bg-blue-600 p-6 shadow-lg
          rounded-md flex flex-col gap-2 text-right min-w-[160px]
           ${isPopupVisible ? 'flex' : 'hidden' } `}> 
          <div className='font-bold'>{session?.user?.name}</div>
          <div className=''>{session?.user?.email}</div>
           
          <Link 
          onClick={()=>setIsPopupVisible(false)}
          className='hover:underline' href={'/dashboard'}>Dashboard</Link>
          <Link
          onClick={()=>setIsPopupVisible(false)}
          className='hover:underline' href={'create-post'}>Create Post</Link>
         <button onClick={()=>{signOut() }} 
                className='p-2 px-5 mb-[2rem] bg-blue-600 rounded'>
                    Logout
                </button>
          </div>

          

          <div className='flex gap-2 items-center'>
            <Link 
            className='hidden md:flex gap-2 items-center mr-6' href={'/create-post'}>
            <span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

            </span>
            <span>Create new</span>
            </Link>
            <Image src={session?.user?.image || ""} 
            width={36} height={36}
            alt="Profile Image"
            className="rounded-full cursor-pointer"
            onClick={()=>setIsPopupVisible((prev)=>!prev )}
            />
          </div>
             
                <button onClick={()=>{signOut() }} 
                className='p-2 px-5 mb-[2rem] bg-blue-600 rounded'>
                    Logout
                </button>
                 
            </>
          )}
      

     
      <ImCross onClick={closeNav} className='absolute top-[-1.4rem] left-[1.4rem] w-[1.4rem] h-[1.4rem] text-white' />
    </ul>
   </div>
  )
}

export default MobileNavbar