/*
   常用state and test data 
*/
import React from 'react'
import { HomeOutlined, UserOutlined } from '@ant-design/icons'
export const menuList = [
  {
    title: 'Home',
    key: '/',
    icon: <HomeOutlined />,
    component: 'Home',
  },

  {
    title: 'Employee Management',
    key: '/employee/list',
    icon: <UserOutlined />,
    component: 'EmployeeList',
  },
]

export const employees = [
  {
    _id: 1234213411,
    firstName: 'TYER',
    lastName: 'UYTER',
    gender: 'Female',
    phone: '55555',
    email: 'home@gmail.com',
  },
  {
    _id: 1234333222,
    firstName: 'ERTY',
    lastName: 'YUs',
    gender: 'Male',
    phone: '44444',
    email: '2home@gmail.com',
  },
  {
    _id: 123433566,
    firstName: 'IUYTDFG',
    lastName: 'TYRUE',
    gender: 'Female',
    phone: '2222m',
    email: '2home@gmail.com',
  },
  {
    _id: 1234335777,
    firstName: 'WER',
    lastName: 'EER',
    gender: 'Male',
    phone: '1233444',
    email: '2home@gmail.com',
  },
  {
    _id: 1234213418,
    firstName: 'TYER',
    lastName: 'UYTER',
    gender: 'Female',
    phone: '55555',
    email: 'home@gmail.com',
  },
  {
    _id: 1234333229,
    firstName: 'ERTY',
    lastName: 'YUs',
    gender: 'Male',
    phone: '44444',
    email: '2home@gmail.com',
  },
  {
    _id: 123433560,
    firstName: 'IUYTDFG',
    lastName: 'TYRUE',
    gender: 'Female',
    phone: '2222m',
    email: '2home@gmail.com',
  },
  {
    _id: 1234335774,
    firstName: 'WER',
    lastName: 'EER',
    gender: 'Male',
    phone: '1233444',
    email: '2home@gmail.com',
  },
]

export const PAGE_SIZE = 10
