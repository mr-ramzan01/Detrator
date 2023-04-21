import React from 'react'
import { Route, Routes } from 'react-router'
import { Home } from '../pages/Home'
import { Posts } from '../pages/Posts'

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/posts' element={<Posts/>}></Route>
    </Routes>
  )
}
