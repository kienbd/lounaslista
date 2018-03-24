import * as types from './actionTypes'

const initialState = {
  language: 'en'
}

export default function reduce(state = initialState, action) {
  switch (action.type) {
  case types.LANGUAGE_CHANGED:
    return {...state, language: action.payload.language}
  }
  return state
}
