import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  arrComment: [
    { name: 'Huy Pro', content: 'Mình code giỏi quá' },
    { name: 'Huy Vip', content: 'Mình sẽ hack CyberSoft' },
  ],
}

const appChatReducer = createSlice({
  name: 'appChatReducer',
  initialState,
  reducers: {
    addCommentReducer: (state, action) => {
      state.arrComment.push({ ...action.payload })
    },
  },
})

export const { addCommentReducer } = appChatReducer.actions

export default appChatReducer.reducer
