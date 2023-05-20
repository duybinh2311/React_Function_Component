import { useFormik } from 'formik'
import * as yup from 'yup'
import React from 'react'
import { useDispatch } from 'react-redux'
import { loginActionAPI, loginReducer } from '@/redux/slices/userSlice'

export default function Login() {
  const dispatch = useDispatch()
  const formLogin = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    }),
    onSubmit: (values) => {
      loginActionAPI(values).then((data) => {
        dispatch(loginReducer(data))
        formLogin.resetForm()
      })
    },
    validateOnChange: false,
    validateOnBlur: false,
  })
  return (
    <form className="container" onSubmit={formLogin.handleSubmit}>
      <h3>Login</h3>
      <div className="input-group mt-2">
        <span className="input-group-text">Email</span>
        <input
          type="text"
          id="email"
          className={`form-control ${formLogin.errors.email && `is-invalid`}`}
          onChange={formLogin.handleChange}
          onInput={(e) => {
            formLogin.setFieldError(e.target.id, '')
          }}
          value={formLogin.values.email}
        />
        {formLogin.errors.email && (
          <div className="invalid-feedback">{formLogin.errors.email}</div>
        )}
      </div>
      <div className="input-group mt-2">
        <span className="input-group-text">Password</span>
        <input
          type="password"
          id="password"
          className={`form-control ${
            formLogin.errors.password && `is-invalid`
          }`}
          onChange={formLogin.handleChange}
          onInput={(e) => {
            formLogin.setFieldError(e.target.id, '')
          }}
          value={formLogin.values.password}
        />
        {formLogin.errors.password && (
          <div className="invalid-feedback">{formLogin.errors.password}</div>
        )}
      </div>
      <div className="input-group mt-2">
        <button className="btn btn-primary" type="submit">
          Login
        </button>
      </div>
    </form>
  )
}
