import * as types from './actionTypes'
import drivers from '../../drivers'

export function fetchAllRestaurants() {
  return async(dispatch, getState) => {
    dispatch({
      type: types.ALL_RESTAURANTS_FETCHING
    })
    const fetchPromises = Object.keys(drivers).map(key => {
      const restaurant = drivers[key]
      return dispatch(fetchRestaurant(restaurant))
    })
    Promise.all(fetchPromises).then(e => {
      dispatch({
        type: types.ALL_RESTAURANTS_FETCHED
      })
    })
  }
}

export function fetchRestaurant(restaurant) {
  return async(dispatch, getState) => {
    dispatch({
      type: types.RESTAURANT_FETCHING
    })

    try {
      const data = await restaurant.bootstrap()
      dispatch({
        type: types.RESTAURANT_FETCHED,
        payload: data
      })
      return new Promise(resolve => resolve(data))
    } catch (e) {
      dispatch({
        type: types.RESTAURANT_FETCH_EMPTY
      })
    }
  }
}
