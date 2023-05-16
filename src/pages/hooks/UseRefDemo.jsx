import React, { useRef, useState } from 'react'
import ChildComponent from './ChildComponent'

function UseRefDemo() {
  const [number, setNumber] = useState(1)
  /* UseRef là 1 react hook để tham chiếu đến giá trị mà không cần re-render component (ứng dụng cho các giá trị không cần binding lên UI)  */
  const userLoginRef = useRef({})
  const inputUserNameRef = useRef({})
  const inputPasswordRef = useRef({})
  const handleChange = (event) => {
    userLoginRef.current[event.target.id] = event.target.value
    console.log(userLoginRef.current)
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(inputUserNameRef.current)
    console.log(inputPasswordRef.current)
    inputUserNameRef.current.style.backgroundColor = 'red'
    inputPasswordRef.current.style.backgroundColor = 'red'
    const formElements = event.target.elements
    formElements.userName.value = ''
    formElements.password.value = ''
  }
  return (
    <form className="container py-5" onSubmit={handleSubmit}>
      <ChildComponent />
      Number: {number}
      <button
        className="btn btn-success ms-2"
        onClick={() => setNumber(number + 1)}
      >
        +
      </button>
      <h3 className="text-center mb-3">Login</h3>
      <div className="input-group mb-3">
        <span className="input-group-text">User Name</span>
        <input
          type="text"
          className="form-control"
          id="userName"
          ref={inputUserNameRef}
          name="userName"
          onInput={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Password</span>
        <input
          type="text"
          className="form-control"
          id="password"
          ref={inputPasswordRef}
          onInput={handleChange}
        />
      </div>
      <div className="input-group mb-3">
        <button className="btn btn-dark" type="submit">
          Submit
        </button>
      </div>
    </form>
  )
}

export default UseRefDemo
