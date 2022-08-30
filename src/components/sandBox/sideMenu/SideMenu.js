import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Layout, Menu } from 'antd'
import { getAllRightsList } from '@/api'
import {
  MenuUnfoldOutlined,
  UserOutlined,
} from '@ant-design/icons'
import Style from './sideMenu.module.scss'

const { Sider } = Layout
const { SubMenu } = Menu

const iconListMapping = {
  '/': <UserOutlined />,
  '/user-manage': <MenuUnfoldOutlined />
}

export default function SideMenu(props) {
  const [menuList, setMenuList] = useState([])
  useEffect(() => {
    getAllRightsList().then(res => {
      setMenuList(res)
    })
  }, [])

  const checkPermission = (item) => !!item.pagepermission

  const renderMenus = (menuList) => {
    return menuList.map((item, index) => {
      if(item?.children?.length && checkPermission(item)) {
        return (
          <SubMenu
            key={item.key}
            title={item.title}
            icon={iconListMapping[item.key]}>
              {renderMenus(item.children)}
          </SubMenu>)
      } else {
        return checkPermission(item) && (
          <Menu.Item
            key={item.key}
            icon={iconListMapping[item.key]}
            onClick={sideBarNavigate}
          >
            {item.title}
          </Menu.Item>
        )
      }
    })
  }

  const sideBarNavigate = (e) => {
    console.log(props, '===')
    navigate(e.key)
  }
  const navigate = useNavigate() 
  let location = useLocation()
  const selectKeys = [location.pathname]
  const openKeys = ['/' + location.pathname.split('/')[1]]
  return (
    <Sider trigger={null} collapsible collapsed={false}>
      <div style={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
        <div className={Style.logo}>全球新闻发布系统</div>
        <div style={{ flex: 1, overflow: 'auto' }}>
          <Menu theme="dark" mode="inline" selectedKeys={selectKeys} defaultOpenKeys={openKeys}>
            {renderMenus(menuList)}
          </Menu>
        </div>
      </div>
    </Sider>
  )
}
