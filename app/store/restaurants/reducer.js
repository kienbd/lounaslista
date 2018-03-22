import * as types from './actionTypes'
import _ from 'lodash'

const initialState = {
  fetching: false,
  fetched: false,
  restaurants: {}
}


export default function reduce(state = initialState, action) {
  if (action) {
    switch (action.type) {
    case types.ALL_RESTAURANTS_FETCHING:
      return {...state, fetching: true}
    case types.RESTAURANT_FETCHING:
      break
    case types.RESTAURANT_FETCHED:
      const restaurant = {}
      restaurant[action.payload.title] = action.payload
      const restaurants = _.merge(state.restaurants, restaurant)
      return { ...state, restaurants: restaurants }
    case types.RESTAURANT_FETCH_EMPTY:
    case types.RESTAURANT_FETCH_ERROR:
      return { ...state }
    case types.ALL_RESTAURANTS_FETCHED:
      return {...state, fetching: false, fetched: true}
    }
  }
  return state
}
