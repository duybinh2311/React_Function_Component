import React from 'react'
import useFetchData from '@/custom_hook/useFetchData'
import { NavLink } from 'react-router-dom'

export default function Home() {
  const data = useFetchData('https://shop.cyberlearn.vn/api/product')
  return (
    <div className="container my-3">
      <h3 className="text-center mb-3">Shoes Shop</h3>
      <div className="row">
        {data.map((item, index) => {
          return (
            <div className="col-3 g-3" key={index}>
              <div className="card">
                <img src={item.image} className="w-100" />
                <div className="card-body">
                  <h3 className="card-title">{item.name}</h3>
                  <p className="card-text">{item.price}</p>
                  <NavLink to={`/detail${item.id}`} className="btn btn-dark">
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
