import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import google from '@/public/google.jpg'

const SignInButton = () => {
  return (
    <div>
      <button
          onClick={() => signIn("google")}
          className="flex items-center mt-4 border p-3 rounded-full gap-6 hover:bg-slate-100/25 transition"
        >
         <Image src={google} width={100} height={100}/>
          Sign In With Google
        </button>
    </div>
  )
}

export default SignInButton
