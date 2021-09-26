import axios from 'axios'
import * as types from './types'
// get all
export const getEmployeeList = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_ALL_EMPLOYEE_REQUEST })
    const response = await axios.get(`/employee/list`)
    dispatch({
      type: types.GET_ALL_EMPLOYEE_SUCCESS,
      payload: response.data,
    })
  } catch (error) {
    dispatch({
      type: types.GET_ALL_EMPLOYEE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

// add new
export const addEmployee = (payload) => async (dispatch) => {
  try {
    dispatch({ type: types.EMPLOYEE_ADD_REQUEST })
    const response = await axios.post(`/employee/add`, payload)
    if (response.data.status === 200) {
      dispatch({
        type: types.EMPLOYEE_ADD_SUCCESS,
        payload: response.data.status,
      })
    } else {
      dispatch({
        type: types.EMPLOYEE_ADD_FAIL,
        payload: response.data.msg,
      })
    }
  } catch (error) {
    dispatch({
      type: types.EMPLOYEE_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const editEmployee = (payload) => async (dispatch) => {
  try {
    dispatch({ type: types.EMPLOYEE_EDIT_REQUEST })
    const response = await axios.post(`/employee/edit`, payload)
    if (response.data.status === 200) {
      dispatch({
        type: types.EMPLOYEE_EDIT_SUCCESS,
        payload: response.data.status,
      })
    } else {
      dispatch({
        type: types.EMPLOYEE_EDIT_FAIL,
        payload: response.data.msg,
      })
    }
  } catch (error) {
    dispatch({
      type: types.EMPLOYEE_EDIT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
export const deleteEmployee = (id) => async (dispatch) => {
  try {
    dispatch({ type: types.EMPLOYEE_DELETE_REQUEST })
    const response = await axios.post(`/employee/delete`, { id })
    if (response.data.status === 200) {
      dispatch({
        type: types.EMPLOYEE_DELETE_SUCCESS,
        payload: response.data.status,
      })
    } else {
      dispatch({
        type: types.EMPLOYEE_DELETE_FAIL,
        payload: response.data.msg,
      })
    }
  } catch (error) {
    dispatch({
      type: types.EMPLOYEE_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
