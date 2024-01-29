import React from 'react'
import styles from '../styles/Home.module.scss'
import Image from "next/image"

import ImageLogo from "../pages/public/img/Logo.svg"
import ImageFundo from "../pages/public/fundo.png"


function index() {
  return (
    <>
    
    <main  class="bg-[url('../pages/public/fundo.png')]" className='flex'>
    <div className='xl:ml-96 xl:mr-96'>
    <div className='flex items-center justify-center'>
    <Image src={ImageLogo} alt={''} className='w-48 h-48 md:w-64 md:h-64' />
    </div>
      <div 
        className='items-center 
        text-3xl 
        md:text-5xl
        justify-center 
        flex 
        font-serif 
      text-white
        mb-1
        mt-5
        '>
            <text>Login</text>
      </div>

      <div className='flex items-center justify-center'>
      <div className='flex items-center justify-center mt-2 rounded-xl bg-input w-80 md:w-96'>
          <input type="email" placeholder='Digite seu email' className='w-64 h-14 rounded-xl bg-input'/>
      </div>
      </div>
      
      <div className='flex items-center justify-center'>
      <div className='flex items-center justify-center mt-2 rounded-xl bg-input w-80 md:w-96'>
            <input type="password" placeholder='Digite sua senha' className='w-64 h-14 rounded-xl bg-input'/>
      </div>
      </div>
      

      <div className='flex justify-center items-center'>
        <button className='mt-5 border-black font-serif bg-bg-enter text-enter w-80 h-14 rounded-xl md:w-96'>Entrar</button>
      </div>
        
        <div className='flex justify-center items-center'>
          <button className='text-white mt-5 font-serif'>Esqueci minha senha</button>
        </div>

        <div className='flex justify-center items-center'>
          <button className='text-bg-enter mt-20 font-serif'>Criar conta</button>
        </div>
      </div>
      <div className='flex w-screen h-screen'>
      <Image src={ImageFundo} alt={''}/>
      </div>
    
    </main>
    </>
    
    
  )
}

export default index