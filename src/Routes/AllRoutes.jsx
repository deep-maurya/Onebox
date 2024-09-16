import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Login } from '../Component/Login'
import { Page1 } from '../Pages/Page1'
import { Page2 } from '../Pages/Page2'
import { Page3 } from '../Pages/Page3'

export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/page1' element={<Page1/>}/>
        <Route path='/page2' element={<Page2/>}/>
        <Route path='/page3' element={<Page3/>}/>
    </Routes>
    </>
  )
}
