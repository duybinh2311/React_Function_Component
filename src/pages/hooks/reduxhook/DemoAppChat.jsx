import { addCommentReducer } from '@/redux/reducers/appChatReducer'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function DemoAppChat() {
  /* UseSelector là 1 hook của react-redux dùng để lấy state trên redux về */
  const { arrComment } = useSelector((state) => state.appChatReducer)
  /* UseDispatch là 1 hook của react-redux dùng để đưa action lên redux */
  const dispatch = useDispatch()
  const userComment = useRef({
    name: '',
    content: '',
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addCommentReducer(userComment.current))
  }
  const handleChange = (e) => {
    const { id, value } = e.target
    userComment.current[id] = value
  }
  return (
    <form className="container my-5" onSubmit={handleSubmit}>
      <h3 className="mb-3">Demo Chat</h3>
      <div className="card">
        <div className="card-header">
          {arrComment.map((comment, index) => {
            return (
              <div className="row" key={index}>
                <div className="col-2">
                  <img
                    src={`https://i.pravatar.cc?u=${comment.name}`}
                    style={{ height: 100 }}
                  />
                </div>
                <div className="col-10">
                  <h3 className="text-danger">{comment.name}</h3>
                  <p>{comment.content}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className="card-body">
          <div className="input-group mt-2">
            <span className="input-group-text">Name</span>
            <input
              type="text"
              id="name"
              className="form-control"
              onInput={handleChange}
            />
          </div>
          <div className="input-group mt-2">
            <span className="input-group-text">Content</span>
            <input
              type="text"
              id="content"
              className="form-control"
              onInput={handleChange}
            />
          </div>
          <div className="input-group mt-2">
            <button className="btn btn-primary">Send</button>
          </div>
        </div>
      </div>
    </form>
  )
}
