import React from 'react'
import { Route ,Routes} from 'react-router-dom'
import SignUp from '../Components/SignUp'

const MainRoutes = () => {
  return (
    <Route>
        <Routes path="/"></Routes>
        <Routes path="/signup" element={<SignUp/>}></Routes>
    </Route>
  )
}

export default MainRoutes