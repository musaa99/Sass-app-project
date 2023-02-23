import React from 'react'
import Billing from '../../components/billing/Billing'
import Navbar2 from '../../components/Users/SuperAdmin/navbar/navbar'
import MSearchbar from '../../components/Users/SuperAdmin/navbar/searchbar'

const Bills = () => {
  return (
    <div className="lg:flex bg-[#F5F5F5]">
      <div className="hidden lg:flex">
        <Navbar2 />
      </div>
      <div className=" w-[-webkit-fill-available]">
        <div className="  block  lg:grid lg:grid-cols-1">
          <MSearchbar />
          <Billing/>
        </div>
      </div>
    </div>
  )
}

export default Bills