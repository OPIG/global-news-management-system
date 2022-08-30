import React, { Component } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { Layout } from 'antd'
import NoPermission from '../noPermission/NoPermission'
import TopHeader from '../../components/sandBox/topHeader/TopHeader'
import SideMenu from '../../components/sandBox/sideMenu/SideMenu'
import Home from '../home/Home'

const { Content } = Layout;

export class Sandbox extends Component {
  render () {
    return (
      <Layout>
        <SideMenu></SideMenu>
        <Layout className="site-layout">
        <TopHeader></TopHeader>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
              overflow: 'auto'
            }}
          >
            {/* 写法一 */}
            <Routes>
              {/* 注意：默认项添加index属性且没有path属性 */}
              <Route index path="home" element={<Home />}></Route>
              <Route path='/' element={<Navigate replace from='/' to='home'/>}></Route>
              <Route path='*' element={<NoPermission/>}></Route>
            </Routes>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default Sandbox