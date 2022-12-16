import React from 'react'
import { Route ,Routes} from 'react-router-dom'
import SignUp from '../Components/SignUp'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/"/>
        <Route path="/signup" element={<SignUp/>}/>
    </Routes>
  )
}

export default MainRoutes