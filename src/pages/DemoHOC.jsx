import React from 'react'
import Login from './Login'
import HOCModal from './HOCModal'

export default function DemoHOC() {
  return (
    <div className="container my-5">
      <HOCModal>
        <Login />
      </HOCModal>
    </div>
  )
}
