import React, { useMemo, useState } from 'react'
import Cart from 'pages/hooks/Cart'

function UseMemoDemo() {
  const [like, setLike] = useState(1)
  const cart = [
    { id: 1, name: 'Iphone', price: 1000 },
    { id: 2, name: 'Iphone', price: 2000 },
    { id: 3, name: 'Iphone', price: 3000 },
  ]
  /* UseMemo là 1 react hook để cache lại giá trị của biến hoặc return của function giữa các lần re-render */
  const cartMemo = useMemo(() => cart, [])
  return (
    <div className="container py-5">
      Like: {like} <i className="fa-solid fa-heart"></i>
      <br />
      <span
        style={{ cursor: 'pointer', color: 'red', fontSize: 35 }}
        onClick={() => {
          setLike(like + 1)
        }}
      >
        <i className="fa-solid fa-heart"></i>
      </span>
      <br />
      <br />
      <Cart cart={cartMemo} />
    </div>
  )
}

export default UseMemoDemo
