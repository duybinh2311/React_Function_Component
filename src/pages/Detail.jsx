import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, Navigate, useParams } from 'react-router-dom'

export default function Detail() {
  const [productDetail, setProductDetail] = useState({})
  /* Use Params là hook của react-router-dom dùng để lấy tham số trên URL */
  const params = useParams()
  useEffect(() => {
    getProductDetailAPI(params.id)
    return () => {}
  }, [params.id])

  const getProductDetailAPI = async (id) => {
    try {
      const result = await axios.get(
        `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`
      )
      return setProductDetail(result.data.content)
    } catch (error) {
      throw error
    }
  }

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-4">
          <img src={productDetail.image} className="w-100" />
        </div>
        <div className="col-8">
          <h3>{productDetail.name}</h3>
          <p>{productDetail.description}</p>
        </div>
      </div>
      <h3>Relate Product</h3>
      <div className="row">
        {productDetail.relatedProducts?.map((prod, index) => {
          return (
            <div className="col-4" key={index}>
              <div className="card">
                <img src={prod.image} alt="" />
                <div className="card-body">
                  <h3>{prod.name}</h3>
                  <p>{prod.price}</p>
                  <NavLink
                    className={'btn btn-primary'}
                    to={`/detail/${prod.id}`}
                  >
                    <i className="fa fa-eye"></i>
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
