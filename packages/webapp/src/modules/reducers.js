import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import flash from '~/modules/flash/reducer'

export default combineReducers({
  routing: routerReducer,
  flash,
})
