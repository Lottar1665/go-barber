import React from 'react'
import Image from 'next/image'
import ImageLogo from "../pages/public/img/Logo.svg"
import ImageFundo2 from "../pages/public/Imagem.png"
import { FiUser } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import Link from 'next/link';

function cadastro() {
  return (
    <>
    
    <main className='flex'>

    <Image src={ImageFundo2} alt='' className='w-[780px] h-[944px]'/>

    <div className=' w-[344px] h-[616px] mt-[2px] ml-80 mr-20 '>

    <div className='flex items-center justify-center mr-5'>

    <Image src={ImageLogo} alt={''} className='w-[230px] h-[134px] md:w-64 md:h-64' />
    </div>
      <div className='flex content-between mb-[50px]'>

      <div
        className='font-serif text-hoverText hover:text-white mr-10 ml-[24px]  focus-within:text-white focus-within:text-[20px]'>
            <button>Sou cliente</button>
      </div>

      <div
        className='font-serif text-hoverText hover:text-white mr-10 ml-[24px] focus-within:text-white focus-within:text-[20px]'>
            <button className='focus:accent-pink-500'>Sou cabelereiro</button>
      </div>

      </div>
      

      <div className='flex items-center justify-center'>

      <div className='flex items-center justify-center mt-2 rounded-xl bg-input w-96'>
      <FiUser className='w-[20] h-[20] bg-input text-icon ml-[16px] mr-[16px]' />
          <input type="text" 
          placeholder='Nome' 
          className='w-80 h-14 rounded-xl bg-input '/>
      </div>
      </div>
      
      <div className='flex items-center justify-center'>

      <div className='flex items-center justify-center mt-2 rounded-xl bg-input w-96'>
      <MdOutlineEmail className='w-[20] h-[20] bg-input text-icon ml-[16px] mr-[16px]' />
            <input type="email" placeholder='Email' className='w-80 h-14 rounded-xl bg-input '/>
      </div>
      </div>

      <div  className='flex items-center justify-center'>
      <div className='flex items-center justify-center mt-2 rounded-xl bg-input w-96 '>
      <RiLockPasswordFill className='w-[20] h-[20] bg-input text-icon ml-[16px] mr-[16px]'/>
      <input type="password" placeholder='Senha' className='w-80 h-14 rounded-xl bg-input '/>
      </div>
      </div>

      <div  className='flex items-center justify-center'>
      <div className='flex items-center justify-center mt-2 rounded-xl bg-input w-96 '>
      <RiLockPasswordFill className='w-[20] h-[20] bg-input text-icon ml-[16px] mr-[16px]'/>
      <input type="password" placeholder='Confirmar senha' className='w-80 h-14 rounded-xl bg-input '/>
      </div>
        
      </div>
      <div  className='flex items-center justify-center'>
      <div className='flex items-center justify-center mt-2 rounded-xl bg-input w-96 '>
      <RiLockPasswordFill className='w-[20] h-[20] bg-input text-icon ml-[16px] mr-[16px]'/>
      <input type="text" placeholder='Endereço' className='w-80 h-14 rounded-xl bg-input '/>
      </div>
        
      </div>
      <div  className='flex items-center justify-center'>
      <div className='flex items-center justify-center mt-2 rounded-xl bg-input w-96 '>
      <RiLockPasswordFill className='w-[20] h-[20] bg-input text-icon ml-[16px] mr-[16px]'/>
      <input type="number" placeholder='CEP' className='w-80 h-14 rounded-xl bg-input '/>
      </div>
        
      </div>
      <div  className='flex items-center justify-center'>
      <div className='flex items-center justify-center mt-2 rounded-xl bg-input w-96 '>
      <RiLockPasswordFill className='w-[20] h-[20] bg-input text-icon ml-[16px] mr-[16px]'/>
      <input type="number" placeholder='Whatsapp' className='w-80 h-14 rounded-xl bg-input '/>
      </div>
        
      </div>
      <div  className='flex items-center justify-center'>
      <div className='flex items-center justify-center mt-2 rounded-xl bg-input w-96 '>
      <RiLockPasswordFill className='w-[20] h-[20] bg-input text-icon ml-[16px] mr-[16px]'/>
      <input type="text" placeholder='CNPJ' className='w-80 h-14 rounded-xl bg-input '/>
      </div>
      </div>
      

      <div className=''>
        <button className='flex items-center justify-center mt-5 border-black font-serif bg-bg-enter text-enter w-[344px] h-[56px] rounded-xl'>Cadastrar</button>
      </div>
        

        <div className='flex justify-center items-center mt-2'>
          <Link href='/' className='text-white font-serif mt-[80px]'>Voltar para login</Link>
        </div>
      </div>
     
      <div className='flex w-screen h-screen'>
   
      </div>
      
        
    </main>
    </>
    
  )
}

export default cadastro
