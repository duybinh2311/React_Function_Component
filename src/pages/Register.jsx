import React from 'react'
/* Builf form với formik */
import { useFormik } from 'formik'
/* Validation với yup */
import * as yup from 'yup'
import { http } from '@/utils/configAxios'
import { useNavigate } from 'react-router-dom'

export default function Register() {
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  const navigate = useNavigate()
  // Custom Message Error
  yup.setLocale({
    mixed: {
      required: ({ path }) =>
        `${capitalizeFirstLetter(path)} không được bỏ trống`,
      notType: ({ type, path }) =>
        `${capitalizeFirstLetter(path)} phải là ${type}`,
    },
    string: {
      email: ({ path }) => `${capitalizeFirstLetter(path)} không hợp lệ`,
      min: ({ path, min }) =>
        `${capitalizeFirstLetter(path)} lớn hơn hoặc bằng ${min} kí tự`,
      max: ({ path, max }) =>
        `${capitalizeFirstLetter(path)} nhỏ hơn hoặc bằng ${max} kí tự`,
    },
  })
  const registerForm = useFormik({
    initialValues: {
      email: '',
      password: '',
      gender: '',
      name: '',
      phone: '',
    },
    validationSchema: yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required().min(6).max(32),
      name: yup.string().required(),
      phone: yup.number().required(),
    }),
    onSubmit: async (values) => {
      try {
        const result = await http.post('/api/Users/signup', values)
        alert(result.data.message)
        navigate('/login')
      } catch (error) {
        alert(error.response.data.message)
      }
    },
    validateOnChange: false,
  })
  return (
    <form className="container" onSubmit={registerForm.handleSubmit}>
      <h3>Register</h3>
      <div className="row">
        <div className="col-6">
          <div className="input-group mt-3">
            <span className="input-group-text">Email</span>
            <input
              type="text"
              className={`form-control ${
                registerForm.errors.email && `is-invalid`
              }`}
              id="email"
              onChange={registerForm.handleChange}
            />
            {registerForm.errors.email && (
              <div className="invalid-feedback">
                {registerForm.errors.email}
              </div>
            )}
          </div>
          <div className="input-group mt-3">
            <span className="input-group-text">Password</span>
            <input
              type="password"
              className={`form-control ${
                registerForm.errors.password && `is-invalid`
              }`}
              id="password"
              onChange={registerForm.handleChange}
            />
            {registerForm.errors.password && (
              <div className="invalid-feedback">
                {registerForm.errors.password}
              </div>
            )}
          </div>
          <div className="input-group column-gap-3 mt-3">
            <div className="form-check">
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
              <input
                type="radio"
                className="form-check-input"
                id="male"
                name="gender"
                value={true}
                onChange={registerForm.handleChange}
              />
            </div>
            <div className="form-check">
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
              <input
                type="radio"
                className="form-check-input"
                id="female"
                name="gender"
                value={false}
                onChange={registerForm.handleChange}
              />
            </div>
          </div>
        </div>
        <div className="col-6">
          <div className="input-group mt-3">
            <span className="input-group-text">Name</span>
            <input
              type="text"
              className={`form-control ${
                registerForm.errors.name && `is-invalid`
              }`}
              id="name"
              onChange={registerForm.handleChange}
            />
            {registerForm.errors.name && (
              <div className="invalid-feedback">{registerForm.errors.name}</div>
            )}
          </div>
          <div className="input-group mt-3">
            <span className="input-group-text">Phone</span>
            <input
              type="text"
              className={`form-control ${
                registerForm.errors.phone && `is-invalid`
              }`}
              id="phone"
              onChange={registerForm.handleChange}
            />
            {registerForm.errors.phone && (
              <div className="invalid-feedback">
                {registerForm.errors.phone}
              </div>
            )}
          </div>
          <div className="input-group mt-3 d-grid">
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}
