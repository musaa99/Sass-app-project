import React from 'react'
import Modal from '../modal/Modal'

const LogOutSession = ({onClickClose}) => {
  return (
    <Modal
    children={
      <>
          <div className="bg-white border justify-evenly shadow w-[825px] h-[297px] flex flex-col items-center ">
    <h1 className="font-semibold text-[30px] leading-[45px]">
    Are you sure you want to log out of all sessions?
    </h1>
    <p className="pt-[10px]">
    You will loose all changes if edits was made in other devices
      email
    </p>
    <p className="pt-[10px]">
    Log in again to continue using Iluchismart
    </p>
    <div className="grid grid-cols-2 gap-[37px]">
      <button onClick={onClickClose} className="button w-[300px] h-[60px] rounded-[12px]">
        Cancel
      </button>
      <button onClick={onClickClose} className="bg-[#F55151] w-[300px] h-[60px] rounded-[12px]">
      Log out of all sessions
      </button>
    </div>
  </div>
      </>
    }
    />

  )
}

export default LogOutSession