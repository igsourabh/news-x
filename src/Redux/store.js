import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './searchSlice'
import defReducer from './defaultSlice'
import pagereducer from './pageSlice'
import notfoundreducer from './notFoundSlice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    default: defReducer,
    page: pagereducer,
    notf: notfoundreducer,
  },
})