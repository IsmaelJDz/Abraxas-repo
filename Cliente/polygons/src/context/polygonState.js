import React, { useReducer } from 'react'
import PolygonContext from './polygonContext'
import PolygonReducer from './polygonReducer'
import { GET_DATA } from '../types/index'

const PolygonState = props => {
  const initialState = {
    coordinates: [],
  }

  const [state, dispatch] = useReducer(PolygonReducer, initialState)

  const traerCoordenadas = async data => {
    try {
      dispatch({ type: GET_DATA, payload: data })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <PolygonContext.Provider
      value={{
        coordinates: state.coordinates,
        traerCoordenadas,
      }}
    >
      {props.children}
    </PolygonContext.Provider>
  )
}

export default PolygonState
