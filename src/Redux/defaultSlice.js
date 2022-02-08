import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
  def:[],
}

export const searchSlice = createSlice({
  name: 'def',
  initialState:initialStateValue,
  reducers: {
    changesearch: (state, action) => {
      state.def = action.payload
    },
  },
})



export const {changesearch } = searchSlice.actions

export default searchSlice.reducer
