import React from 'react'
import Home from "../HomePage/Home";
import Registry from "../Registry/Registry";
import Finance from "../FinancePayment/Finance";
import Shipments from "../Shipments/Shipments";
import Moves from "../Moves/Moves";
import Analytics from "../Analytics/Analytics";
import Error from "../PageNotFound/Error";
import { Route, Routes } from "react-router-dom";

export default function TsmRoutes() {
  return (
    
      <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Shipments" element={<Shipments />}></Route>
            <Route path="/Moves" element={<Moves />}></Route>
            <Route path="/Registry" element={<Registry />}></Route>
            <Route path="/Finance" element={<Finance />}></Route>
            <Route path="/Analytics" element={<Analytics />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
 
  )
}
