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
import { Provider } from 'react-redux'
import { store } from './redux/configStore'
import DemoAppChat from './pages/hooks/reduxhook/DemoAppChat'
import Profile from './pages/Profile'
import Detail from './pages/Detail'
import Search from './pages/Search'
import Register from './pages/Register'
import Movie from './pages/Movie'
import { createBrowserHistory } from 'history'

/* Cấu hình History */
export const history = createBrowserHistory()
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomeTemplate />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/usestate" element={<UseStateDemo />} />
          <Route path="/useeffect" element={<UseEffectDemo />} />
          <Route path="/usecallback" element={<UseCallBackDemo />} />
          <Route path="/usememo" element={<UseMemoDemo />} />
          <Route path="/useref" element={<UseRefDemo />} />
          <Route path="/demochat" element={<DemoAppChat />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/detail">
            <Route path=":id" element={<Detail />} />
          </Route>
          <Route path="/search" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
)
