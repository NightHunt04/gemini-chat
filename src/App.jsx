import { useState } from 'react'
import Header from './components/Header/Header'
import  { Outlet } from 'react-router-dom' 

function App() {
  return (
      <div className='relative w-full flex flex-col items-center p-5 font-noto text-2xl min-h-screen bg-gradient-to-r from-[#000000] to-[#130F40] text-white'>
        <Header />
        <Outlet />
      </div>
  )
}

export default App
