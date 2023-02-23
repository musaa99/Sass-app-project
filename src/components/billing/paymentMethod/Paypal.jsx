import React,{useState} from 'react'
import PaymentModal from './PaymentModal';

const Paypal = () => {
  const [paymentsuccess, SetPaymentsuccess] = useState(false);
  const handleSubmit = e => {e.preventDefault()}


  return (
    <div className='m-4'>
       
        <header>
        <h1 className='font-bold text-[30px] leading-[45px]'>Billing</h1>
        <p className='font-medium text-[24px] leading-[36px]'>Payment method</p>
        <button className='text-[#37A7AE]'>add card</button>

        </header>
        <main className='bg-white w-[619px]'>
        <h1>Paypal</h1>
            <form action='' onSubmit={handleSubmit} className='p-2'>

        <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Country</label>
            <div>
            <select className="w-full px-3 py-2 mb-1 border-2  rounded-md focus:outline-none focus:border-indigo-500 transition-colors"  >
              

              <option>Abuja</option>
              <option>New York</option>
              <option>Lagos</option>
              <option>Florida</option>
              
            </select>
            </div>
        </div>
        <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Card Type</label>
            <div>
                <select className="w-full px-3 py-2 mb-1 border-2  rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="card number" type="text"/>
            </div>
        </div>
        <div className="mb-3">
            <label className="font-bold text-sm mb-2 ml-1">Card Number</label>
            <div>
                <input className="w-full px-3 py-2 mb-1 border-2  rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="card number" type="text"/>
            </div>
        </div>
        <div className="mb-3 -mx-2 flex items-end">
            <div className="px-2 w-1/2">
                <label className="font-bold text-sm mb-2 ml-1">Expiration date</label>
                <div>
                    <input className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"placeholder="MM/YY" type=""/>
                       
                </div>
            </div>
            <div className="px-2 w-1/2">
            <label className="font-bold text-sm mb-2 ml-1">Security Code</label>
                <div>
                    <input className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"placeholder='CVV'/>
                       
                </div>
            </div>
        </div>
        <div className="mb-3 -mx-2 flex items-end">
            <div className="px-2 w-1/2">
                <label className="font-bold text-sm mb-2 ml-1">First Name</label>
                <div>
                    <input className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"placeholder="first Name" type=""/>
                       
                </div>
            </div>
            <div className="px-2 w-1/2">
            <label className="font-bold text-sm mb-2 ml-1">Last Name</label>
                <div>
                    <input className="form-select w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer"placeholder='last Name'/>
                       
                </div>
            </div>
        </div>
            
   
            <p className='text-[12px] leading-[18px]'> Save Card Details
            </p>
            <div  >
            <button onClick={() => SetPaymentsuccess(true)}  class="block w-full max-w-xs mx-auto bg-[#37A7AE] text-white rounded-lg px-3 py-3 font-semibold"> Add Card</button>
        </div> 
        <div className={paymentsuccess ? "" : "hidden "}>
      <PaymentModal onClickContinue={() => SetPaymentsuccess(false)} />
      </div>
            </form>
        </main>

    </div>
  )
}

export default Paypal