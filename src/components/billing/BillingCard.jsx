import React from 'react'
import Card from './Card'



const BillingCard = () => {
  const basicContents = ['one branch',
   ' access to Luchismart mobile app',
   ' video intercom system',
    'access control',
    'workflow management',
    'compliance',
    'maximum of 5 staffs'];
  const standardContents = ['multi-branch',
    'video intercom',
   ' access control',
    'workflow management',
   ' compliance',
  '  luchismart mobile App',
   ' maximum of 100 staff'];
  const EnterpriceContents = ['multi-branch',
   ' unlimited staff',
    'access control',
  '  video intercom',
    'workflow management',
    'compliance',
    'luchismart mobile App',
    'time and attendace system'];

  return (
    <div className='m-4'>
    <h1>Billing</h1>
    <div className=  ' grid grid-cols-3 gap-2  w-[auto] m-auto' >
      <Card    
          header="Basic"
          contents={basicContents}
          num={5}
          btnText='Purchase'
          btnColor='text-[#FFE24D]'
          customClassName="bg-[#FFE24D33]  rounded-t-[40px] w-auto m-auto "
      />
      <Card 
          header="Standard"
          contents={standardContents}
          num={10}
          btnText='Upgrade'
          btnColor='text-[#FF7777]'
          customClassName="bg-[#FF777733] rounded-t-[40px] w-auto m-auto  "
      />
      <Card 
          header="Enterprice"
          contents={EnterpriceContents}
          num={20}
          btnText='Upgrade'
          btnColor='text-[#5AA3F9]'
          customClassName="bg-[#5AA3F933] rounded-t-[40px] w-auto m-auto   "
      />
    
            
    </div>

    </div>
    
  )
}

export default BillingCard