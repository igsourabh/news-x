import { createSlice } from '@reduxjs/toolkit'

const initialStateValue = {
  color: "",
}

export const themeSlice = createSlice({
  name: 'counter',
  initialState:initialStateValue,
  reducers: {
    changeTextColor: (state, action) => {
      state.color = action.payload
    },
  },
})



export const {changeTextColor } = themeSlice.actions

export default themeSlice.reducer
