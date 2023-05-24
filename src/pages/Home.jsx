import React, { useEffect, useRef, useState } from 'react'
import useFetchData from '@/custom_hook/useFetchData'
import { NavLink } from 'react-router-dom'
import Shuffle from 'shufflejs'
import ResponsiveTemplate from '@/templates/ResponsiveTemplate'
import Login from './Login'
import Register from './Register'

export default function Home() {
  const data = useFetchData('https://shop.cyberlearn.vn/api/product')
  const [shuffle, setShuffle] = useState(null)
  const [filterKey, setFilterKey] = useState('*')
  const [sortValue, setSortValue] = useState(undefined)
  const shuffleRef = useRef()
  const createShuffleContainer = () => {
    setShuffle(
      new Shuffle(shuffleRef.current, {
        itemSelector: '.filter-item',
        speed: 500,
        staggerAmount: 100,
        useTransforms: true,
      })
    )
  }
  const filterProduct = (keyFilter) => {
    if (shuffle) {
      setFilterKey(keyFilter)
    } else {
      createShuffleContainer()
      setFilterKey(keyFilter)
    }
  }
  const sortProductPrice = (valueSort) => {
    if (shuffle) {
      setSortValue(valueSort)
    } else {
      createShuffleContainer()
      setSortValue(valueSort)
    }
  }
  useEffect(() => {
    if (shuffle) {
      shuffle.sort({})
      shuffle.filter((item) => {
        if (filterKey === '*') return item
        const dataFilter = item.getAttribute('data-filter')
        if (dataFilter === filterKey) return item
      })
    }
  }, [filterKey])
  useEffect(() => {
    if (shuffle) {
      let options
      if (!sortValue) {
        options = {}
      }
      if (sortValue === 'priceUp') {
        options = {
          compare: (a, b) => {
            const aPrice = a.element.getAttribute('data-price')
            const bPrice = b.element.getAttribute('data-price')
            return aPrice - bPrice
          },
        }
      }
      if (sortValue === 'priceDown') {
        options = {
          compare: (a, b) => {
            const aPrice = a.element.getAttribute('data-price')
            const bPrice = b.element.getAttribute('data-price')
            return bPrice - aPrice
          },
        }
      }
      shuffle.sort(options)
    }
  }, [sortValue])

  return (
    <div className="container my-3">
      <h3 className="text-center mb-3">Shoes Shop</h3>
      <div className="btn-group mb-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            filterProduct('*')
          }}
        >
          All
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            filterProduct('ADIDAS')
          }}
        >
          Adidas
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            filterProduct('NIKE')
          }}
        >
          Nike
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            filterProduct('VANS_CONVERSE')
          }}
        >
          Vans
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            sortProductPrice('priceUp')
          }}
        >
          Sort Up
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            sortProductPrice('priceDown')
          }}
        >
          Sort Down
        </button>
        <button
          className="btn btn-danger"
          type="button"
          onClick={() => {
            sortProductPrice(undefined)
          }}
        >
          Reset Sort
        </button>
      </div>
      <div className="row g-3 filter-container" ref={shuffleRef}>
        {data.map((item, index) => {
          return (
            <div
              className={`col-3 filter-item ${item.categories[0].id}`}
              key={index}
              data-filter={`${item.categories[0].id}`}
              data-price={item.price}
            >
              <div className="card">
                <img src={item.image} className="w-100" />
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
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
      <ResponsiveTemplate component={Login} mobileComponent={Register} />
    </div>
  )
}
