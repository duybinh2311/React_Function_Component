import React, { useState } from 'react'

export default function UseStateDemo() {
  const [number, setNumber] = useState(1)
  const [fontSize, setFontSize] = useState(16)
  const [idAvatar, setIdAvatar] = useState(10)
  return (
    <div className="container">
      <h3>Tăng giảm số lượng</h3>
      <h4>Number: {number}</h4>
      <button
        className="btn btn-dark me-2"
        onClick={() => {
          setNumber(number - 1)
        }}
      >
        <i className="fa-solid fa-minus"></i>
      </button>
      <button
        className="btn btn-dark"
        onClick={() => {
          setNumber(number + 1)
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
      <br />
      <br />
      <h3>Tăng giảm fontsize</h3>
      <p style={{ fontSize: fontSize }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore,
        iusto?
      </p>
      <button
        className="btn btn-dark me-2"
        onClick={() => {
          setFontSize(fontSize - 1)
        }}
      >
        <i className="fa-solid fa-minus"></i>
      </button>
      <button
        className="btn btn-dark"
        onClick={() => {
          setFontSize(fontSize + 1)
        }}
      >
        <i className="fa-solid fa-plus"></i>
      </button>
      <br />
      <br />
      <div className="card w-25">
        <img src={`https://i.pravatar.cc?u=${idAvatar}`} />
        <div className="card-body">
          <button
            className="btn btn-danger"
            onClick={() => {
              const numberRandom = Math.floor(Math.random() * 100)
              setIdAvatar(numberRandom)
            }}
          >
            Random
          </button>
        </div>
      </div>
    </div>
  )
}
