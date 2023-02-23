import React from 'react'
import PaymentHistory from '../../components/paymentHistory/PaymentHistory'
import Navbar2 from '../../components/Users/SuperAdmin/navbar/navbar'
import MSearchbar from '../../components/Users/SuperAdmin/navbar/searchbar'

const History = () => {
  return (
    <div className="lg:flex bg-[#F5F5F5]">
      <div className="hidden lg:flex">
        <Navbar2 />
      </div>
      <div className=" w-[-webkit-fill-available]">
        <div className="  block  lg:grid lg:grid-cols-1">
          <MSearchbar />
          <PaymentHistory/>
        </div>
      </div>
    </div>
  )
}

export default History