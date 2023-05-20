import { movieAPI } from '@/utils/configAxios'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  arrFilm: [],
}

const filmSlice = createSlice({
  name: 'filmSlice',
  initialState,
  reducers: {
    getAllFilmReducer: (state, action) => {
      state.arrFilm = action.payload
    },
  },
})

export const { getAllFilmReducer } = filmSlice.actions

export default filmSlice.reducer

/* Get API Phim */
export const getAllFilmAPI = async (dispatch) => {
  try {
    const result = await movieAPI.get('quanlyphim/laydanhsachphim?maNhom=GP06')
    dispatch(getAllFilmReducer(result.data.content))
  } catch (error) {
    throw error.message
  }
}
