import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { BsShopWindow, BsCart3, BsGrid3X3GapFill } from 'react-icons/bs'

const Navbar = () => {
  const { CartProductId } = useSelector((state) => state.Cart)
  return (
    <nav className='bg-blue-500 sticky top-0'>
      <div className='max-w-full border border-blue-600  mx-auto'>
        <div className='flex justify-between'>
          <div className='flex  mx-4 py-2'>
            <BsShopWindow className='w-9 h-8 ' />
          </div>
          <div className='flex  mx-4'>
            <Link to='/' className='mx-4 py-2'>
              <BsGrid3X3GapFill className='h-8 w-9' />
            </Link>
            <Link to='/Cart' className='mx-2.5 py-2'>
              <BsCart3 className='w-9 h-8' />
              <span className='absolute top-0.5 right-3.5 mx-2.5'>
                {CartProductId.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
