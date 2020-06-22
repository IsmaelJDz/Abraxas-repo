import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetchData = API => {
  let BASEURL = `http://localhost:4000/${API}`
  const [state, setState] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(BASEURL)
      setState(result.data[0].geometry.coordinates)
    }

    fetchData()
    // eslint-disable-next-line
  }, [])
  return state
}

export default useFetchData
