import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  component: <p>Default</p>,
}

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    setModalReducer: (state, action) => {
      state.component = action.payload
    },
  },
})

export const { setModalReducer } = modalSlice.actions

export default modalSlice.reducer
