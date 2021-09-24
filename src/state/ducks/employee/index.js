import * as employeeOperations from './actions'

import { combineReducers } from 'redux'
import {
  employeeListReducer,
  employeeAddReducer,
  employeeEditReducer,
  employeeDeleteReducer,
} from './reducers'

export const rootReducer = combineReducers({
  newEmployee: employeeAddReducer,
  employeeDetails: employeeEditReducer,
  allEmployees: employeeListReducer,
  deleteEmployee: employeeDeleteReducer,
})

export { employeeOperations }

export default rootReducer
