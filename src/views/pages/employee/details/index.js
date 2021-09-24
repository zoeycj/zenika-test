/* eslint-disable no-debugger */
import React, { useEffect, useState } from 'react'
import { Card, Row, Form, Input, Select, Col, Button } from 'antd'
import { BackwardOutlined } from '@ant-design/icons'
const { Option } = Select
const { Item } = Form
const EmployeeDetail = (props) => {
  const [employeeId, setEmployeeId] = useState(null)
  const [centerTitle, setCenterTitle] = useState('')
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      lg: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      lg: { span: 10 },
    },
  }
  const [form] = Form.useForm()
  useEffect(() => {
    const style = props.location.state.style
    const edit = props.location.state.edit
    if (edit) {
      const id = props.location.state.employee._id
      setEmployeeId(id)
      setCenterTitle(
        `Update Employee 【 ${props.location.state.employee.firstName} ${props.location.state.employee.lastName} 】`
      )
    } else {
      setCenterTitle('Create new Employee')
    }
  }, [props])
  const onBack = () => {
    props.history.goBack()
  }
  const onFinish = (values) => {
    console.log('Received values of form: ', values)
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
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 8,
        offset: 16,
      },
    },
  }
  const title = (
    <>
      <Row>
        <BackwardOutlined onClick={onBack} /> <span>Back to list page</span>
      </Row>
    </>
  )

  return (
    <>
      <h2>{centerTitle}</h2>
      <Card title={title} {...formItemLayout} form={form}>
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
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
                message: 'Please input your First name!',
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Item>
          <Item
            name="lastName"
            label="Last name"
            initialValue={employeeId}
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: 'Please input your Last name!',
                whitespace: true,
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
                message: 'Please input your phone number!',
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
            <Select placeholder="select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
            </Select>
          </Item>
          <Item {...tailFormItemLayout}>
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
