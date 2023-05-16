import React from 'react'

const Child = ({ UILike }) => {
  console.log('child render')
  return (
    <div className="bg-dark text-white my-2 p-3 fs-3 mt-3">
      Child Coponent : {UILike()}
    </div>
  )
}

/* Memo là 1 method của React, nó sẽ skip re-render component nếu props không thay đổi, gọi qua object React hoặc import vào, sử dụng bằng cách wrap component lại, lưu ý đây là shallow compare  */
export default React.memo(Child)
