import React from 'react'
import Image from "next/image"
import Link from 'next/link'

import ImageLogo from "../pages/public/img/Logo.svg"
import ImageFundo from "../pages/public/fundo.png"
import ImageEmail from "../pages/public/img/Email.svg" 
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { CiLogin } from "react-icons/ci";


function index() {
  return (
    <>
    
    <main className='flex'>
    <div className=' w-[344px] h-[616px] mt-[121px] ml-[500px] mr-[300px]'>
    <div className='flex items-center justify-center'>
    <Image src={ImageLogo} alt={''} className='w-[230px] h-[134px] md:w-64 md:h-64' />
    </div>
      <div
        className='items-center 
        text-3xl 
        md:text-5xl
        justify-center 
        flex 
        font-serif 
      text-white
        mb-[24px]
        '>
            <text>Login</text>
      </div>

      <div className='flex items-center justify-center'>

      <div className='flex items-center justify-center mt-2 rounded-xl bg-input w-96'>
        <MdOutlineEmail className='w-[20] h-[20] bg-input text-icon ml-[16px] mr-[16px]' />
          <input type="email" 
          placeholder='Digite seu email' 
          className='w-80 h-14 rounded-xl bg-input '/>
      </div>
      </div>
      
      <div className='flex items-center justify-center'>
      <div className='flex items-center justify-center mt-2 rounded-xl bg-input w-96'>
      <RiLockPasswordFill className='w-[20] h-[20] bg-input text-icon ml-[16px] mr-[16px]'/>
            <input type="password" placeholder='Digite sua senha' className='w-80 h-14 rounded-xl bg-input '/>
      </div>
      </div>
      

      <div className=''>
        <button className='flex items-center justify-center mt-5 border-black font-serif bg-bg-enter text-enter w-[344px] h-[56px] rounded-xl '>Entrar</button>
      </div>
        
        <div className='flex justify-center items-center mt-5 p-2'>
          <button className='text-whitefont-serif'>Esqueci minha senha</button>
        </div>

        <div className='flex justify-center items-center mt-10'>

          <CiLogin className='mr-1 text-bg-enter'/>

          <Link href='/cadastro' className='text-bg-enter font-serif'>Criar conta</Link>
        </div>
      </div>
      <div className='flex w-screen h-screen'>
      <Image src={ImageFundo} alt={''} className=' tablet:w-[780px] tablet:h-[944px]'/>
      </div>
        
    </main>
    </>
    
    
  )
}

export default index
