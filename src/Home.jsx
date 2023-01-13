import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartSlice from './CartSlice'
import './index.css'
import product from './data'

const Home = () => {
  const { CartProductId } = useSelector((state) => state.Cart)
  const { addToCart, removeCart } = CartSlice.actions
  const dispatch = useDispatch()
  console.log(CartProductId)
  return (
    <div className='bg-white-200   p-6   '>
      <div className=' grid grid-cols-3 gap-x-4 gap-y-8  mt-8  '>
        {product.map((data) => {
          const { id, imageUrl, price, name } = data
          return (
            <div key={id} className='  shadow-md w-7/12 ml-10 py-4 '>
              <div className=' item-center '>
                <img src={imageUrl} alt='pic' className='w-full ' />
              </div>
              <div className='sm:text-center md:text-center lg:text-center'>
                <h5 className='mt-2 text-black text-lg font-medium font-serif'>
                  {name}
                </h5>
                <p className='mt-3 text-black text-lg'>${price}</p>
                {!CartProductId.includes(data.id) && (
                  <button
                    className=' bg-sky-500/100 rounded py-2 px-2.5 mt-1 '
                    onClick={() => dispatch(addToCart(data.id))}
                  >
                    addToCart
                  </button>
                )}
                {CartProductId.includes(data.id) && (
                  <button
                    className=' bg-sky-500/100 rounded py-2 px-2.5 mt-1 '
                    onClick={() => dispatch(removeCart(data.id))}
                  >
                    removeCart
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
