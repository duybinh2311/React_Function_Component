import React, { useCallback, useMemo, useState } from 'react'
import Child from 'pages/hooks/Child'

const UseCallBackDemo = () => {
  const [like, setLike] = useState(1)
  const [number, setNumber] = useState(1)

  /* Lưu ý khi xài react hook nên có dependencies để hook chỉ thực thi khi dependencies thay đổi, nếu không có dependencies thì hook sẽ luôn thực hiện lại mỗi khi component re-render */

  /* UseCallBack là 1 react hook để cache lại định nghĩa function giữa các lần re-render */
  const UILike = useCallback(() => {
    return <i className="fa fa-thumbs-up text-white">{like}</i>
  }, [like])
  return (
    <div className="container py-3">
      <p>
        {like}
        <i className="fa-solid fa-thumbs-up ms-2"></i>
      </p>
      <button
        className="btn btn-primary"
        onClick={() => {
          setLike(like + 1)
        }}
      >
        <i className="fa-solid fa-thumbs-up"></i>
      </button>
      {/* <Child UILike={UILike} /> */}
      <p>
        {number}
        <i className="fa-solid fa-eye ms-2"></i>
      </p>
      <button
        className="btn btn-primary"
        onClick={() => {
          setNumber(number + 1)
        }}
      >
        <i className="fa-solid fa-eye"></i>
      </button>
    </div>
  )
}

export default UseCallBackDemo
