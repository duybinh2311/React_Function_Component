import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  arrComment: [
    { name: 'Huy Pro', content: 'Mình code giỏi quá' },
    { name: 'Huy Vip', content: 'Mình sẽ hack CyberSoft' },
  ],
}

const appChatSlice = createSlice({
  name: 'appChatSlice',
  initialState,
  reducers: {
    addCommentReducer: (state, action) => {
      state.arrComment.push({ ...action.payload })
    },
  },
})

export const { addCommentReducer } = appChatSlice.actions

export default appChatSlice.reducer
