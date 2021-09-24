/* eslint-disable no-debugger */
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Button } from 'antd'
import ListTable from './components/ListTable'
import { employees } from '../../utils/constants'
import { employeeAddPage } from '../../routes/urls'
import { getEmployeeList } from '../../../state/ducks/employee/actions'
const data = employees
const EmployeeList = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getEmployeeList())
  }, [dispatch])
  const allEmployees = useSelector(
    (state) => state.employeeOperations.allEmployees.data
  )
  const onAdd = () => {
    props.history.push(employeeAddPage, { edit: false })
  }
  const title = (
    <>
      <Button type="primary" onClick={onAdd} style={{ float: 'right' }}>
        Add
      </Button>
    </>
  )
  return (
    <>
      <h2>Employee List Page</h2>
      <Card title={title}>
        <ListTable employees={allEmployees} history={props.history} />
      </Card>
    </>
  )
}
export default EmployeeList
