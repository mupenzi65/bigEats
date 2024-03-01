import { configureStore } from '@reduxjs/toolkit'
import BasketReducer from './features/BasketSlice'
import restaurantReducer  from './features/RestaurantSlice'


export const store = configureStore({
  reducer: {
    basket:BasketReducer,
    restaurant:restaurantReducer
  },
})