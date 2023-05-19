import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { NavLink, useSearchParams } from 'react-router-dom'

export default function Search() {
  const keywordRef = useRef('')
  const [arrProduct, setarrProduct] = useState([])
  const [keyword, setKeyword] = useSearchParams()
  const handleChange = (e) => {
    const { value } = e.target
    keywordRef.current = value
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setKeyword({
      keys: keywordRef.current,
    })
  }
  const getProductByKeyword = async (keyword) => {
    try {
      const result = await axios.get(
        `https://shop.cyberlearn.vn/api/Product?keyword=${keyword}`
      )
      return setarrProduct(result.data.content)
    } catch (error) {}
  }
  useEffect(() => {
    if (keyword.get('keys') !== '') {
      getProductByKeyword(keyword.get('keys'))
    }
  }, [keyword.get('keys')])

  return (
    <div className="container">
      <h3>Tìm kiếm sản phẩm</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="keyword"
          className="form-control"
          onInput={handleChange}
        />
        <button className="btn btn-primary mt-2">Search</button>
      </form>
      <div className="row">
        {arrProduct.map((item, index) => {
          return (
            <div className="col-4 mt-2" key={index}>
              <div className="card">
                <img src={item.image} alt="" />
                <div className="card-body">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <NavLink className={'btn btn-dark'} to={`/detail/${item.id}`}>
                    View Detail
                  </NavLink>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
