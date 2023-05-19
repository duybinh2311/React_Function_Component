import {
  getProfileActionAPI,
  userProfileReducer,
} from '@/redux/reducers/userReducer'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function Profile() {
  const { userProfile } = useSelector((state) => state.userReducer)
  const dispatch = useDispatch()
  useEffect(() => {
    getProfileActionAPI().then((data) => {
      const { email, name, avatar, phone } = data
      dispatch(userProfileReducer({ email, name, avatar, phone }))
    })
  }, [])

  return (
    <div className="container my-5">
      {userProfile.email && (
        <div className="row align-items-center border-2 border">
          <div className="col-4 p-5">
            <img src={userProfile.avatar} className="w-100 rounded-circle" />
          </div>
          <div className="col-8">
            <h3>{userProfile.name}</h3>
            <p>{userProfile.email}</p>
            <p>{userProfile.phone}</p>
          </div>
        </div>
      )}
    </div>
  )
}
