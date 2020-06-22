import { GET_DATA } from '../types'

const InitialState = {
  coordinates: [],
  estado: '',
}

export default (state = InitialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        coordinates: action.payload.data[0].geometry.coordinates,
        estado: action.payload.estado,
      }
    default:
      return state
  }
}
