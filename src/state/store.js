import { combineReducers } from 'redux'
import { configureStore } from '@reduxjs/toolkit'
import * as reducers from './ducks'

const rootReducer = (state, action) => {
  return combineReducers(reducers)(state, action)
}

const store = configureStore({
  reducer: rootReducer,
})

export default store
