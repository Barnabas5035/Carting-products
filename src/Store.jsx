import { configureStore } from '@reduxjs/toolkit'
import CartSlice from './CartSlice'
const Store = configureStore({
  reducer: {
    Cart: CartSlice.reducer,
  },
})
export default Store
