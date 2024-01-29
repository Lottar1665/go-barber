import React from 'react'
import styles from '../styles/Home.module.scss'

function index() {
  return (
    <>
    <main  className='w-auto h-auto'>
      <div className='mt-96 items-center text-5xl 
      justify-center flex font-serif text-white'>
        <text>Login</text>
      </div>
      <div className='flex items-center justify-center mt-2 text-white'>
          <input type="email" className='mt-5 w-80 h-14 rounded-xl bg-input'/>
      </div>
      
      <div className='flex items-center justify-center mt-2'>
            <input type="password" className='w-80 h-14 rounded-xl bg-input'/>
      </div>

      <div className='flex justify-center items-center'>
        <button className='mt-5 border-black font-serif bg-bg-enter text-enter w-80 h-16 rounded-xl '>Entrar</button>
      </div>
        
        <div className='flex justify-center items-center'>
          <button className='text-white mt-5 font-serif'>Esqueci minha senha</button>
        </div>

        <div className='flex justify-center items-center'>
          <button className='text-bg-enter mt-20 font-serif'>Criar conta</button>
        </div>
    </main>
    </>
    
    
  )
}

export default index