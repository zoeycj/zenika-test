import React, { useEffect, useState } from 'react'
import { Prompt } from 'react-router-dom'
import { Card, Row, Form, Input, Select, Col, Button, Radio } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { BackwardOutlined } from '@ant-design/icons'
import {
  addEmployee,
  editEmployee,
} from '../../../../state/ducks/employee/actions'
const { Option } = Select
const { Item } = Form
const EmployeeDetail = (props) => {
  const dispatch = useDispatch()
  const [isChange, setIsChange] = useState(false)
  const [centerTitle, setCenterTitle] = useState('')
  const [employee, setEmployee] = useState({})
  const [edit, setEdit] = useState(props.location.state.edit)
  const [form] = Form.useForm()
  let addStatus = useSelector(
    (state) => state.employeeOperations.newEmployee.success
  )
  let editStatus = useSelector(
    (state) => state.employeeOperations.employeeDetails.success
  )
  useEffect(() => {
    addStatus = false
    editStatus = false
    if (edit) {
      setCenterTitle(
        `Update Employee 【 ${props.location.state.employee.firstName} ${props.location.state.employee.lastName} 】`
      )
    } else {
      setCenterTitle('Create new Employee')
    }
  }, [props])
  useEffect(() => {
    if (employee.firstName) {
      if (edit) {
        employee._id = props.location.state.employee._id
        dispatch(editEmployee(employee))
      } else {
        dispatch(addEmployee(employee))
      }
    }
  }, [employee, dispatch])

  useEffect(() => {
    if (addStatus || editStatus) {
      setIsChange(false)
      setTimeout(() => {
        props.history.push('/employee/list')
      }, 1000)
    }
  }, [addStatus, editStatus])

  const onBack = () => {
    props.history.goBack()
  }
  const onFinish = (values) => {
    delete values.prefix
    const newEmployee = values
    setEmployee(newEmployee)
  }
  const onChange = () => {
    setIsChange(true)
  }

  const prefixSelector = (
    <Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="65">+65</Option>
      </Select>
    </Item>
  )
  const title = (
    <>
      <Row>
        <BackwardOutlined onClick={onBack} /> <span>Back to list page</span>
      </Row>
    </>
  )
  return (
    <>
      <Prompt
        when={isChange}
        message={() =>
          'Form has been modified. You will lose your unsaved changes. Are you sure you want to close this form?'
        }
      />
      <h2>{centerTitle}</h2>
      <Card title={title} form={form}>
        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          onChange={onChange}
          initialValues={{
            firstName: props.location.state.edit
              ? props.location.state.employee.firstName
              : '',
            lastName: props.location.state.edit
              ? props.location.state.employee.lastName
              : '',
            email: props.location.state.edit
              ? props.location.state.employee.email
              : '',
            phone: props.location.state.edit
              ? props.location.state.employee.phone
              : '',
            gender: props.location.state.edit
              ? props.location.state.employee.gender
              : '',
            prefix: '65',
          }}
          scrollToFirstError
        >
          <Item
            name="firstName"
            label="First name"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                whitespace: true,
                message: 'Please input your First name!',
              },
              {
                min: 6,
                message: 'First name must be no less than 6 characters!',
              },
              {
                max: 10,
                message: 'First name must be no more than 10 characters!',
              },
            ]}
          >
            <Input />
          </Item>
          <Item
            name="lastName"
            label="Last name"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                whitespace: true,
                message: 'Please input your Last name!',
              },
              {
                min: 6,
                message: 'Last name must be no less than 6 characters!',
              },
              {
                max: 10,
                message: 'Last name must be no more than 10 characters!',
              },
            ]}
          >
            <Input />
          </Item>
          <Item
            name="email"
            label="Email address"
            rules={[
              {
                type: 'email',
                message: 'The input is not valid E-mail!',
              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ]}
          >
            <Input />
          </Item>

          <Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                pattern: /^\d{8}$|^\d{5}$/,
                message:
                  'Please input valid phone number,must be 8 digits in length !',
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: '100%',
              }}
            />
          </Item>
          <Item
            name="gender"
            label="Gender"
            rules={[
              {
                required: true,
                message: 'Please select gender!',
              },
            ]}
          >
            <Radio.Group>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Radio.Group>
          </Item>
          <Item>
            <Row>
              <Col
                span={24}
                style={{
                  textAlign: 'right',
                }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Col>
            </Row>
          </Item>
        </Form>
      </Card>
    </>
  )
}
export default EmployeeDetail
