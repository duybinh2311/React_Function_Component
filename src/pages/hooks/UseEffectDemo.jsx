import React, { useEffect, useState } from 'react'
import axios from 'axios'

const UseEffectDemo = () => {
  const [number, setNumber] = useState(1)
  const [arrProduct, setArrProduct] = useState([])
  const [productDetail, setProductDetail] = useState({})
  const [idProductDetail, setIdProductDetail] = useState(1)
  const [preIdProductDetail, setPreIdProductDetail] = useState(1)
  const getProductList = async () => {
    try {
      const result = await axios.get('https://shop.cyberlearn.vn/api/Product')
      return setArrProduct(result.data.content)
    } catch (error) {
      throw error
    }
  }
  const getProductDetail = async () => {
    try {
      const result = await axios.get(
        `https://shop.cyberlearn.vn/api/Product/getbyid?id=${idProductDetail}`
      )
      return setProductDetail(result.data.content)
    } catch (error) {
      throw error
    }
  }
  /* 
  UseEffect thay thế cho life cycle method của class, useEffect sẽ được gọi sau khi component render lần đầu tiên (mouting) và sau khi component re-render(updating)
  Mặc dịnh nếu không truyền dependencies cho useEffect thì useEffect sẽ luôn được gọi lại mỗi khi component re-render
  Return của useEffect sẽ được chạy khi component unmount hoặc component được render lại do state dependency thay đổi
  */
  /* 
  Argument 
    + call back function (hàm xử lý mỗi khi useEffect được gọi)
    + dependencies là 1 mảng chứa các state hoặc props phụ thuộc, useEffect sẽ được gọi khi component re-render nếu 1 trong các state và props này thay đổi
  */
  /* Mouting */
  useEffect(() => {
    console.log('useEffect mouting')
    getProductList()
  }, [])

  /* Updating */
  useEffect(() => {
    console.log('useEffect updating')
    getProductDetail()
  }, [idProductDetail])

  /* Unmount */
  useEffect(() => {
    console.log('useEffect unmount')
    const timeout = setInterval(() => {
      console.log('start timeout')
    }, 1000)
    return () => {
      clearInterval(timeout)
      console.log('end timeout')
    }
  }, [])

  /* Merge Use Effect */
  // useEffect(() => {
  //   if (arrProduct.length === 0) {
  //     console.log('get product list')
  //     getProductList()
  //   }
  //   getProductDetail()
  //   const timeout = setInterval(() => {
  //     console.log('start timeout')
  //   }, 1000)
  //   return () => {
  //     clearInterval(timeout)
  //     console.log('end timeout')
  //   }
  // }, [idProductDetail])

  return (
    <div className="container">
      <h3>Number: {number}</h3>
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
      <div className="row py-3">
        <div className="col-4">
          <img src={productDetail.image} className="w-75" />
          <div className="text-center">
            <button
              className="btn btn-dark me-2"
              onClick={() => {
                setIdProductDetail(preIdProductDetail)
              }}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button className="btn btn-dark">
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
        <div className="col-8">
          <table className="table">
            <thead>
              <tr>
                <th colSpan={2}>
                  <h4 className="text-center">Product Detail</h4>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Name:</th>
                <td className="text-end">{productDetail.name}</td>
              </tr>
              <tr>
                <th>Price:</th>
                <td className="text-end">{productDetail.price}$</td>
              </tr>
              <tr>
                <th>Description:</th>
                <td className="text-end">{productDetail.shortDescription}</td>
              </tr>
              <tr>
                <th>Quantity:</th>
                <td className="text-end">{productDetail.quantity}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <h3 className="text-center">Product List</h3>
      <div className="row g-3 py-3">
        {arrProduct.map((prod) => {
          return (
            <div className="col-4" key={prod.id}>
              <div className="card">
                <img src={prod.image} alt="" />
                <div className="card-body">
                  <h3>{prod.name}</h3>
                  <p>{prod.price}$</p>
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => {
                      setPreIdProductDetail(idProductDetail)
                      setIdProductDetail(prod.id)
                    }}
                  >
                    <i className="fa fa-cart-plus me-2"></i>
                    Detail
                  </button>
                  <button className="btn btn-success">
                    <i className="fa fa-cart-plus me-2"></i>
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default UseEffectDemo
