import { GET_DATA } from '../types'

const InitialState = {
  coordinates: [],
}

export default (state = InitialState, action) => {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        coordinates: action.payload,
      }
    default:
      return state
  }
}
