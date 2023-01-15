import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CartSlice from '../CartSlice'
import product from '../data'
import { BsTrashFill } from 'react-icons/bs'
import NavbarMasterPage from './mainPage/NavbarMasterPage'

const Cart = () => {
  const { CartProductId } = useSelector((state) => state.Cart)
  const CartProductData = product.filter((data) =>
    CartProductId.includes(data.id)
  )
  const { removeCart } = CartSlice.actions
  const dispatch = useDispatch()
  return (
    <NavbarMasterPage className='w-full h-full '>
      <h3 className='text-center font-serif font-bolder text-2xl mt-6'>
        Items in Cart
      </h3>
      {CartProductData.length > 0 && (
        <div className='sm:flex-col md:flex-col lg:flex-col flex flex-col gap-x-4 gap-y-8   shadow-lg w-9/12 h-8/12 mx-auto bg-white mt-2'>
          {CartProductData.map((data) => {
            const { id, imageUrl, detail, name } = data
            return (
              <div key={id} className='shadow-sm  ml-10 py-6 px-2 '>
                <div className=' item-center '>
                  <img
                    src={imageUrl}
                    alt='pic'
                    className='w-16 md:w-32 sm:w-16 lg:w-48 '
                  />
                </div>
                <div className='sm:flex-jusify-center text-center md:flex-jusify-center text-center lg:flex-jusify-center text-start '>
                  <h4 className='mt-2 text-black text-lg font-medium font-serif'>
                    {name}
                  </h4>
                  <p className='  text-black text-lg'>{detail}</p>
                  <button
                    className='bg-sky-500/100 rounded py-2 px-2.5  flex flex-auto   md:w-32 lg:48 outline outline-1'
                    onClick={() => dispatch(removeCart(data.id))}
                  >
                    <BsTrashFill className='mx-y-2 mt-1.5' />
                    remove item
                  </button>
                </div>
              </div>
            )
          })}
          <hr />
        </div>
      )}
    </NavbarMasterPage>
  )
}

export default Cart

