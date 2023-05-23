import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function useFetchData(url) {
  const [data, setData] = useState([])
  const getDataAPI = async () => {
    const result = await axios.get(url)
    const dataConvert = result.data.content.map((product) => {
      product.categories = JSON.parse(product.categories)
      return product
    })
    setData(dataConvert)
  }
  useEffect(() => {
    getDataAPI()
  }, [])

  return data
}
