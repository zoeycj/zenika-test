import * as types from './types'
import { message } from 'antd'
export const employeeListReducer = (state = {}, action) => {
  switch (action.type) {
    case types.GET_ALL_EMPLOYEE_REQUEST:
      return { loading: true }
    case types.GET_ALL_EMPLOYEE_SUCCESS:
      return {
        loading: false,
        data: action.payload.data,
        statusCode: action.payload.status,
      }
    case types.GET_ALL_EMPLOYEE_FAIL:
      return { loading: false, success: false, error: action.payload }
    default:
      return state
  }
}

export const employeeAddReducer = (state = {}, action) => {
  switch (action.type) {
    case types.EMPLOYEE_ADD_REQUEST:
      return { loading: true }
    case types.EMPLOYEE_ADD_SUCCESS:
      message.success('Create new employee success!')
      return { loading: false, success: true, data: action.payload }
    case types.EMPLOYEE_ADD_FAIL:
      message.error(action.payload)
      return { loading: false, success: false, error: action.payload }
    default:
      return state
  }
}

export const employeeEditReducer = (state = {}, action) => {
  switch (action.type) {
    case types.EMPLOYEE_EDIT_REQUEST:
      return { loading: true }
    case types.EMPLOYEE_EDIT_SUCCESS:
      message.success('Update employee success!')
      return { loading: false, success: true, data: action.payload }
    case types.EMPLOYEE_EDIT_FAIL:
      message.error(action.payload)
      return { loading: false, success: false, error: action.payload }
    default:
      return state
  }
}
export const employeeDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case types.EMPLOYEE_DELETE_REQUEST:
      return { loading: true }
    case types.EMPLOYEE_DELETE_SUCCESS:
      message.success('Delete employee success!')
      return { loading: false, success: true, data: action.payload }
    case types.EMPLOYEE_DELETE_FAIL:
      message.error(action.payload)
      return { loading: false, success: false, error: action.payload }
    default:
      return state
  }
}
