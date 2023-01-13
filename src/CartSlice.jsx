import { createSlice } from '@reduxjs/toolkit'

const CartSlice = createSlice({
  name: 'Cart',
  initialState: {
    CartProductId: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.CartProductId = [action.payload, ...state.CartProductId]
    },
    removeCart: (state, action) => {
      const IndexOfID = state.CartProductId.indexOf(action.payload)
      state.CartProductId.splice(IndexOfID, 1)
    },
    clearCart: (state) => {
      state.CartProductId = []
    },
  },
})
export default CartSlice
