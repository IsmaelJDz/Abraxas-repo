import React, { useReducer } from 'react'
import PolygonContext from './polygonContext'
import PolygonReducer from './polygonReducer'
import { GET_DATA } from '../types/index'
import axios from 'axios'

const PolygonState = props => {
  const initialState = {
    coordinates: [],
  }

  const [state, dispatch] = useReducer(PolygonReducer, initialState)

  const traerCoordenadas = async estado => {
    try {
      let BASEURL = `http://localhost:4000/${estado}`
      const fetchData = async () => {
        const result = await axios.get(BASEURL)
        dispatch({ type: GET_DATA, payload: result })
      }
      fetchData()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <PolygonContext.Provider
      value={{
        coordinates: state.coordinates,
        estado: state.estado,
        traerCoordenadas,
      }}
    >
      {props.children}
    </PolygonContext.Provider>
  )
}

export default PolygonState
