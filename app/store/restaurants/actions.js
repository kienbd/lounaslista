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
    }).catch(e => {
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
        payload: {...data, fetched: true}
      })
      return new Promise(resolve => resolve('fulfilled'))
    } catch (e) {
      dispatch({
        type: types.RESTAURANT_FETCH_ERROR,
        payload: {
          title: restaurant.config.title,
          fetched: true,
          error: true
        }
      })
      return new Promise(resolve => resolve('rejected'))
    }
  }
}

export function selectRestaurant(restaurant) {
  return (dispatch) => {
    dispatch({
      type: types.RESTAURANT_SELECTED,
      payload: restaurant
    })
  }
}
