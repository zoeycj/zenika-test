/* eslint-disable no-debugger */
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Table, message, Col, Modal } from 'antd'
import {
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons'
import { PAGE_SIZE } from '../../../utils/constants'
import { employeeEditPage } from '../../../routes/urls'
import { deleteEmployee } from '../../../../state/ducks/employee/actions'

const ListTable = (props) => {
  const dispatch = useDispatch()
  const [visible, setVisible] = useState(false)
  const [employeeId, setEmployeeId] = useState(null)
  const [employee, setEmployee] = useState({})

  const onEdit = (employee) => {
    const id = employee._id
    // setEmployeeId(id)
    props.history.push(`${employeeEditPage}/${id}`, {
      edit: true,
      employee,
    })
  }
  const onDelete = (employee) => {
    setVisible(true)
    setEmployee(employee)
  }
  const handleCancel = () => {
    setVisible(false)
  }
  const handleOk = () => {
    console.log('delete employee here2', employee)
    // const employeeId = employee._id
    const employeeId = employee.email
    debugger
    dispatch(deleteEmployee(employeeId))
    setVisible(false)
  }
  const isDelete = useSelector(
    (state) =>
      state.employeeOperations.deleteEmployee
        ? state.employeeOperations.deleteEmployee.error
          ? true
          : false
        : false
    // (state) => state.employeeOperations.deleteEmployee.data
  )
  console.log('statusCode', isDelete)
  const columns = [
    {
      title: 'First name',
      dataIndex: 'firstName',
      key: 'firstName',
      sorter: (a, b) => a.firstName.length - b.firstName.length,
      sortDirections: ['descend'],
    },
    {
      title: 'Last name',
      dataIndex: 'lastName',
      key: 'lastName',
      sorter: (a, b) => a.lastName.length - b.lastName.length,
      sortDirections: ['descend'],
    },

    {
      title: 'Email address ',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Phone number',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      filters: [
        {
          text: 'Male',
          value: 'Male',
        },
        {
          text: 'Female',
          value: 'Female',
        },
      ],
      onFilter: (value, record) => record.gender.indexOf(value) === 0,
    },
    {
      title: 'Action',
      key: '',
      align: 'center',
      render(employee) {
        return (
          <Row justify="space-around">
            <Col span={12} justify="center">
              <EditOutlined onClick={() => onEdit(employee)} />
            </Col>
            <Col span={12} justify="center">
              <DeleteOutlined onClick={() => onDelete(employee)} />
            </Col>
          </Row>
        )
      },
    },
  ]

  return (
    <>
      <Table
        bordered
        rowKey="_id"
        columns={columns}
        dataSource={props.employees}
        pagination={{ defaultPageSize: PAGE_SIZE }}
      />
      <Modal
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="confirm"
        cancelText="Cancel"
      >
        <p>Are you sure you want to delete?</p>
      </Modal>
    </>
  )
}
export default ListTable
