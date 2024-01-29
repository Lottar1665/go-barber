import React from 'react'
import styles from '../styles/Home.module.scss'
import Image from "next/image"

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

      <div className='flex items-center justify-center mt-2 rounded-xl bg-input w-80 md:w-96'>
        <MdOutlineEmail className='w-[20px] h-[20px] bg-input text-icon' />
          <input type="email" 
          placeholder='Digite seu email' 
          className='w-64 h-14 rounded-xl bg-input ml-[16px]'/>
      </div>
      </div>
      
      <div className='flex items-center justify-center'>
      <div className='flex items-center justify-center mt-2 rounded-xl bg-input w-80 md:w-96'>
      <RiLockPasswordFill className='bg-input text-icon'/>
            <input type="password" placeholder='Digite sua senha' className='w-64 h-14 rounded-xl bg-input ml-[16px]'/>
      </div>
      </div>
      

      <div className='flex justify-center items-center'>
        <button className='mt-5 border-black font-serif bg-bg-enter text-enter w-80 h-14 rounded-xl md:w-96'>Entrar</button>
      </div>
        
        <div className='flex justify-center items-center'>
          <button className='text-white mt-5 font-serif'>Esqueci minha senha</button>
        </div>

        <div className='flex justify-center items-center mt-5'>
        <CiLogin className='mr-1 text-bg-enter'/>
          <button className='text-bg-enter font-serif'>Criar conta</button>
        </div>
      </div>
      <div className='flex w-screen h-screen'>
      <Image src={ImageFundo} alt={''} className='w-[780px] h-[944px]'/>
      </div>
    
    </main>
    </>
    
    
  )
}

export default index