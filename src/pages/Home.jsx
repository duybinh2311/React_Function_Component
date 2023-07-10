import React, { useEffect, useRef, useState } from 'react'
import useFetchData from '@/custom_hook/useFetchData'
import { NavLink } from 'react-router-dom'
import Shuffle from 'shufflejs'
import ResponsiveTemplate from '@/templates/ResponsiveTemplate'
import Login from './Login'
import Register from './Register'
import axios from 'axios'
import { http } from '@/utils/configAxios'
import { Grid } from '@mantine/core'

export default function Home() {
  const [productList, setProductList] = useState(Array(4).fill())
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
      console.log(shuffle)
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
  useEffect(() => {
    http.get('https://shop.cyberlearn.vn/api/product').then((result) => {
      const dataConvert = result.data.content.map((product) => {
        product.categories = JSON.parse(product.categories)
        return product
      })
      setProductList(dataConvert)
    })
  }, [])
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
      <Grid ref={shuffleRef}>
        {productList.map((item, index) => {
          return (
            <Grid.Col
              span={3}
              className="filter-item"
              key={index}
              data-filter={`${item?.categories[0]?.id}`}
              data-price={item?.price}
            >
              <div className="card">
                <img src={item?.image} className="w-100" />
                <div className="card-body">
                  <h5 className="card-title">{item?.name}</h5>
                  <p className="card-text">{item?.price}</p>
                  <NavLink to={`/detail${item?.id}`} className="btn btn-dark">
                    View Detail
                  </NavLink>
                </div>
              </div>
            </Grid.Col>
          )
        })}
      </Grid>
      <ResponsiveTemplate component={Login} mobileComponent={Register} />
    </div>
  )
}
