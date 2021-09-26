import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Card, Button } from 'antd'
import ListTable from './components/ListTable'
import { employeeAddPage } from '../../routes/urls'
import { getEmployeeList } from '../../../state/ducks/employee/actions'
const EmployeeList = (props) => {
  const dispatch = useDispatch()
  const [isDelete, setIsDelete] = useState(false)
  useEffect(() => {
    dispatch(getEmployeeList())
  }, [dispatch, isDelete])
  const getDeleteStatus = (status) => {
    if (status !== undefined) {
      setIsDelete(status)
    } else {
      setIsDelete(false)
    }
  }

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
        <ListTable
          employees={allEmployees}
          history={props.history}
          getDeleteStatus={getDeleteStatus}
        />
      </Card>
    </>
  )
}
export default EmployeeList
