import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
  full:[],
}

export const searchSlice = createSlice({
  name: 'def',
  initialState:initialStateValue,
  reducers: {
    changesearch: (state, action) => {
      state.full = action.payload
    },
  },
})



export const {fullsearch } = searchSlice.actions

export default searchSlice.reducer
