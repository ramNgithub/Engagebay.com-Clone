import React from 'react'
import { Route ,Routes} from 'react-router-dom'
import { AutoDailer } from '../Components/AutoDailer'
import Login from '../Components/Login'
import Om from '../Components/Pricing/Om'
import Home from '../Components/Ram_HomePage/Home'
import Resource from '../Components/Resource'
import SignUp from '../Components/SignUp'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
        <Route path='/pricing' element={<Om/>} ></Route>
        <Route path='/resource' element={<Resource/>} ></Route>
        <Route path='/dailer' element={<AutoDailer/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
    </Routes>
  )
}

export default MainRoutes
