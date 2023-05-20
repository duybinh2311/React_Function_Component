import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function useFetchData(url) {
  const [data, setData] = useState([])
  const getDataAPI = async () => {
    const result = await axios.get(url)
    setData(result.data.content)
  }
  useEffect(() => {
    getDataAPI()
  }, [])

  return data
}
