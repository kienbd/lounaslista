import { combineReducers } from 'redux'

import restaurants from './restaurants/reducer'
import apps from './apps/reducer'

export default combineReducers({
  restaurants,
  apps
})
