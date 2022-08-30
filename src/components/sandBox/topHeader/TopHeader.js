import React, { useState } from 'react'
import { Layout, Menu, Dropdown, Avatar } from 'antd'
import { MenuUnfoldOutlined, MenuFoldOutlined, DownOutlined, UserOutlined } from '@ant-design/icons'
import Style from './topHeader.module.scss'

const { Header } = Layout
const menu = (
  <Menu>
    <Menu.Item key="item1">
    超级管理员
    </Menu.Item>
    <Menu.Item danger key="item2">
      Logout
    </Menu.Item>
  </Menu>
);

export default function TopHeader() {
  const [isCollpased, setIsCollpased] = useState(false)
  const changeCollpased = () => {
    setIsCollpased(!isCollpased)
  }
console.log(Style, '========')
  return (
    <Header className="site-layout-background" style={{ padding: '0 16px', height: 'auto' }}>
       {isCollpased ? (
        <MenuUnfoldOutlined onClick={changeCollpased} />
      ) : (
        <MenuFoldOutlined onClick={changeCollpased} />
      )}
      {/* {React.createElement(isCollpased ? MenuUnfoldOutlined : MenuFoldOutlined, {
      className: 'trigger',
      })} */}
      <div className={Style.topInfo}>
        <span>
          欢迎<b> </b>回来
        </span>
        <Dropdown overlay={menu}>
          <button className={Style.ant_dropdown_link} onClick={(e) => e.preventDefault()}>
            <Avatar style={{ backgroundColor: '#87d068', marginRight: '4px' }} icon={<UserOutlined />} />
            <DownOutlined />
          </button>
        </Dropdown>
      </div>
    </Header>
  )
}
