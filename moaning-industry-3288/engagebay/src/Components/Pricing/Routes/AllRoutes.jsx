import React from 'react'
import { Routes, Route} from "react-router-dom"
import Biennial from '../Plans/Biennial'
import PriceYearly from '../Plans/PriceYearly'
import PricePlans from '../Plans/PricePlans'
import Marketing from '../Pair4/Marketing'
import ServiceBay from '../Plans/ServiceBay'

const AllRoutes = () => {
  return (
    <Routes>
    <Route path="/" element={<PricePlans/>} />
    <Route path="/year" element={<PriceYearly/>}/>
    <Route path="/biennial" element={<Biennial/>}/>
    <Route path="/marketing" element={<Marketing/>}/>
    <Route path="/service" element={<ServiceBay/>}/>
    </Routes>
  )
}

export default AllRoutes