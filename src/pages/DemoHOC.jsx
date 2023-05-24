import React from 'react'
import { useDispatch } from 'react-redux'
import Register from 'pages/Register'
import Login from 'pages/Login'
import { setModalReducer } from 'slices/modalSlice'

export default function DemoHOC() {
  const dispatch = useDispatch()
  return (
    <div className="container my-5">
      <button
        className="btn btn-primary me-3"
        data-bs-toggle="modal"
        data-bs-target="#modalId"
        onClick={() => {
          dispatch(setModalReducer(<Login />))
        }}
      >
        Login
      </button>
      <button
        className="btn btn-success"
        data-bs-toggle="modal"
        data-bs-target="#modalId"
        onClick={() => {
          dispatch(setModalReducer(<Register />))
        }}
      >
        Register
      </button>
    </div>
  )
}
