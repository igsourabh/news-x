import { createSlice } from '@reduxjs/toolkit'

const searchnotfound = {
  value: "top",
}

export const notfoundSlice = createSlice({
  name: 'counter',
  initialState: searchnotfound,
  reducers: {
    notfound: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { notfound } = notfoundSlice.actions

export default notfoundSlice.reducer