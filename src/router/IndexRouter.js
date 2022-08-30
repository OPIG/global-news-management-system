import React from 'react'
import { BrowserRouter, HashRouter, Routes, Route, Navigate } from 'react-router-dom'
import Test from '../views/login/Test'
import Login from '../views/login/Login'
import NewsSandbox from '../views/newsSandbox/Sandbox';

export default function IndexRouter() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path="/login" element={localStorage.getItem("token") ? <Test/>:<Login/>}></Route>
        <Route path='/*' element={localStorage.getItem("token") ? <NewsSandbox></NewsSandbox>: <Navigate to="/login"/>}></Route>
        <Route path='*' element={<span>There is no permission</span>}></Route>
      </Routes>
   </BrowserRouter>
  )
}
