import React,{useState} from 'react'
import BillingCard from './BillingCard'
import Payment from './Payment'
import BillingAddress from './paymentMethod/BillingAddress';
import CardPayment from './paymentMethod/CardPayment';
import Paypal from './paymentMethod/Paypal';

const Billing = () => {
  const [payment, SetPayment] = useState(false);
   const [paypal, SetPaypal] = useState("");
   const [billingaddress, SetBillingAddress] = useState("");
  return (
    // <div>
    //   {payment ? (
    //    <div>
    //       <CardPayment/>
        
    //    </div>

    //   ) :  ( 
    //   <div>
    //     <BillingCard/>
    //     <Payment onClickPay={() => SetPayment(true)}/>

    //   </div>)

    //   }
    //   <Paypal/>
    // </div>
//     <div>
//       {payment
//     ? <div >  <CardPayment/> </div>
//     : [
//         paypal
//             ? <div><Paypal/></div>
//             : [<>
            
//             <BillingCard/>
//             <Payment onClickPaypal={()=> SetPaypal(true)} onClickPay={() => SetPayment(true)}/>
//             </>
//             ]
//     ]
// }
//     </div>

    <div>
      {payment ?
       <div > <CardPayment/></div>
    : [ paypal ? 
    <div><Paypal/></div>
            : [
                billingaddress 
                ? <div><BillingAddress/></div> 
                :  [<>
            
                  <BillingCard/>
                  <Payment onClickPaypal={()=> SetPaypal(true)} onClickAddress={()=> SetBillingAddress(true)} onClickPay={() => SetPayment(true)}/>
                  </>
                  ]
            ]
    ]
}
    </div>
  )
}

export default Billing
