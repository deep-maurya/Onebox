import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../Component/Login'
import { Page1 } from '../Pages/Page1'
import { Page2 } from '../Pages/Page2'

export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/page1' element={<Page1/>}/>
        <Route path='/page2' element={<Page2/>}/>
    </Routes>
    </>
  )
}
