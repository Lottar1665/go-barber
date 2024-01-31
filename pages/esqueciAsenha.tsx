import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlinePhotoCamera } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineEmail } from "react-icons/md";
import { LuUser } from "react-icons/lu";

import ImagePerfil from './public/perfil.png'

function esqueciasenha() {
  return (
    <>
    <div className='w-screen h-[144px] bg-blackMedium absolute'></div>
    
    <main className='flex items-center justify-center'>
      <div>
          <div className='ml-[100px]'>
            <Image src={ImagePerfil} alt={''} className='border border-black rounded-full flex items-center justify-center w-[185px] h-[185px] mt-[45px] absolute'/>
            </div>
            <div className='flex justify-center items-center border border-black w-[40px] h-[40px]  mt-[190px] ml-[230px] bg-bg-enter rounded-full absolute'>
            <MdOutlinePhotoCamera className='w-[20px] h-[20px] bg-bg-enter rounded-full'/>
            </div>
      
            <div className='flex items-center justify-center text-white font-serif mt-[270px] text-2xl'>Meu Perfil</div>

            <div className='flex items-center justify-center mt-2 rounded-xl mb-[8px] bg-input w-96'>

            <LuUser className='w-[20] h-[20] bg-input text-icon ml-[16px] mr-[16px]' />

            <div className='flex items-center justify-center'>

              
              <div className=' w-80 h-14  bg-input text-white font-serif p-1  flex items-center'>Lottar</div>

              </div>

              </div>

              <div className='flex items-center justify-center mt-2 rounded-xl mb-[24px] bg-input w-96'>
              <MdOutlineEmail className='w-[20] h-[20] bg-input text-icon ml-[16px] mr-[16px]' />
                    <div className='flex items-center justify-center '>
                  <div className='w-80 h-14 bg-input text-white font-serif p-1 flex items-center'>lottarmatheus@gmail.com</div>
                  </div>
              </div>

              <div className='flex items-center justify-center mt-2 rounded-xl mb-[8px] bg-input w-96'>
              <RiLockPasswordLine className='bg-input text-icon w-[20px] h-[20px] mx-[16px]'/>
                <div className='flex items-center justify-center'>
                <input type='password' placeholder='Senha atual' className='bg-input p-1 w-80 h-14 text-enter font-serif text-white' />
                </div>
              </div>

            <div className='flex items-center justify-center mt-2 rounded-xl bg-input mb-[8px] w-96'>
            <RiLockPasswordLine className='bg-input text-icon w-[20px] h-[20px] mx-[16px]'/>
                <div className='flex items-center justify-center'>
                  <input type='password' placeholder='Nova senha' className='bg-input w-80 h-14 p-1 text-enter font-serif text-white ' />
                  </div>
            </div>

            <div className='flex items-center justify-center mt-2 rounded-xl bg-input w-96 mb-5'>
            <RiLockPasswordLine className='bg-input text-icon w-[20px] h-[20px] mx-[16px]'/>
                    <div className='flex items-center justify-center'>
                    <input type='password' placeholder='Confirmar senha' className='bg-input w-80 h-14 p-1 text-enter font-serif  text-white' />
                    </div>
            </div>

            <div className='flex items-center justify-center mt-2 rounded-xl bg-bg-enter w-96'>
                    <div className='flex items-center justify-center'>
                    <Link href={'/'} className='bg-bg-enter w-[344px] h-[56px] p-1 text-black font-serif font-bold flex items-center justify-center' >Confirmar mudanças </Link>
                    </div>
            </div>
      </div>
    </main>
    </>
    
  )
}

export default esqueciasenha
