import React from 'react'
import Modal from '../../modal/Modal'
import Payment from "../../../assets/payment.svg";


const PaymentModal = ({onClickContinue}) => {
 

  return (
    <Modal 
      children={
        <div className=" bg-[white] w-[525px] rounded-[10px]  mr-12 mb-[50px]">
         <div className=' grid justify-items-center p-8 gap-10'  >
             <img className='' src={Payment} alt="" />
       <h1 className='font-medium'>You’ve successfully added a payment method</h1>
       <p>You can now easily make payments</p>
        <div >
         
          <button onClick={onClickContinue} className="bg-[#37A7AE] w-[205px] h-[60px] rounded-[12px]">
          continue
          </button>
        </div>
      </div>
        </div>
      }
    />
  
  )
}

export default PaymentModal