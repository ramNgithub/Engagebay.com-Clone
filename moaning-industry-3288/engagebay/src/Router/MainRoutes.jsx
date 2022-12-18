import React from 'react'
import { Route ,Routes} from 'react-router-dom'
import Login from '../Components/Login'
import Resource from '../Components/Resource'
import SignUp from '../Components/SignUp'

const MainRoutes = () => {
  return (
    <Routes>
        {/* <Routes path="/" element={}></Routes> */}
        <Route path="/signup" element={<SignUp/>}></Route>
        {/* <Route path='/pricing' element={</>} ></Route> */}
        {/* <Route path='/resource' element={<Resource/>} ></Route> */}
        <Route path='/login' element={<Login/>}></Route>
    </Routes>
  )
}

export default MainRoutes