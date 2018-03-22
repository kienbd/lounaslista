import * as types from './actionTypes'
import _ from 'lodash'

const initialState = {
  fetching: false,
  fetched: false,
  selected: '',
  restaurants: {}
}


export default function reduce(state = initialState, action) {
  if (action) {
    switch (action.type) {
    case types.ALL_RESTAURANTS_FETCHING:
      return {...state, fetching: true}
    case types.RESTAURANT_FETCHING:
      return { ...state }
    case types.RESTAURANT_FETCHED:
    case types.RESTAURANT_FETCH_EMPTY:
    case types.RESTAURANT_FETCH_ERROR:
      const restaurant = {}
      restaurant[action.payload.title] = action.payload
      const restaurants = _.merge(state.restaurants, restaurant)
      return { ...state, restaurants: restaurants }
    case types.ALL_RESTAURANTS_FETCHED:
      return {...state, fetching: false, fetched: true}
    case types.RESTAURANT_SELECTED:
      return {...state, selected: action.payload}
    }
  }
  return state
}
