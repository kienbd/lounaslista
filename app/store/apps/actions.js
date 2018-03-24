import * as types from './actionTypes'

export function changeLanguage(language) {
  return (dispatch, getState) => {
    dispatch({
      type: types.LANGUAGE_CHANGED,
      payload: {
        language
      }
    })
  }
}
