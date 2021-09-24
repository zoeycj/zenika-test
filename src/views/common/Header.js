/* eslint-disable no-debugger */
import React, { useEffect, useState } from 'react'
import { Popover, Button, Modal } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
const title = 'H S'

const Header = (props) => {
  const [visible, setVisible] = useState(false)

  const handleVisibleChange = (visible) => {
    setVisible(visible)
  }

  const text = <h4>MENU</h4>
  const content = (
    <div style={{ width: '100%', textAlign: 'center' }}>
      <Link to="/employee/list" style={{ color: '#b31834' }}>
        Employee List
      </Link>
    </div>
  )

  return (
    <>
      <header className="header">
        <Link to="/" className="header-logo">
          <img src="/images/logo.svg" alt="logo" />
        </Link>
        <div className="header-menu">
          <Popover
            placement="leftTop"
            title={text}
            content={content}
            visible={visible}
            onVisibleChange={handleVisibleChange}
            trigger="click"
          >
            <Button onClick={() => setVisible(!visible)}>
              <MenuOutlined fill="#000" />
            </Button>
          </Popover>
        </div>
      </header>
      <div className="header-line" />
    </>
  )
}

export default Header
