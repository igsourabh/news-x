import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './searchSlice'
import defReducer from './defaultSlice'
import fullReducer from './fullcontentSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    default: defReducer,
    fullred: fullReducer
  },
})