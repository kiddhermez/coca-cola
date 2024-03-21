import React from 'react'
import logo from '@/public/logo/Coca-Cola_logo.svg'
import Image from 'next/image'
import Logo from './logo'

function Navbar() {
  return (
    <nav className='w-[95%] py-5 px-10 rounded-xl bg-coke-black text-coke-foreground bg-coke-accent bg-opacity-30 flex justify-between items-center'>
      <h1 className='font-bold'>
        <Logo className='w-[20%]' fill='#ffffff' />
      </h1>
      <div className='mr-52'>Inventario</div>
      <button className='hover:opacity-80 bg-black/20 px-3 py-2 rounded-full'>Iniciar sesion</button>
    </nav>
  )
}

export default Navbar