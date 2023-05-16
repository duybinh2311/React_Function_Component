import React from 'react'
import ReactDOM from 'react-dom/client'

/* Cấu hình react router dom */
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeTemplate from 'templates/HomeTemplate'
import Home from 'pages/Home'
import Login from 'pages/Login'
import UseStateDemo from 'pages/hooks/UseStateDemo'
import UseEffectDemo from 'pages/hooks/UseEffectDemo'
import UseCallBackDemo from 'pages/hooks/UseCallBackDemo'
import UseMemoDemo from 'pages/hooks/UseMemoDemo'
import UseRefDemo from 'pages/hooks/UseRefDemo'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="" element={<HomeTemplate />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="usestate" element={<UseStateDemo />} />
        <Route path="useeffect" element={<UseEffectDemo />} />
        <Route path="usecallback" element={<UseCallBackDemo />} />
        <Route path="usememo" element={<UseMemoDemo />} />
        <Route path="useref" element={<UseRefDemo />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
