import React from 'react'
import { Routes, Route} from "react-router-dom"
import PriceYearly from '../Plans/Yearly'
import PricePlans from '../PricePlans'

const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<PricePlans/>} />
    <Route path="/year" element={<PriceYearly/>}/>
    </Routes>
  )
}

export default AllRoutes