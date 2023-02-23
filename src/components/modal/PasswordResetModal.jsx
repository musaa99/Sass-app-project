export default function PasswordResetModal({ setEditPassword }) {
  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-white w-[825px] h-auto py-8 ">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle bg-transparent absolute right-2 z-10 top-2 "
          >
            ✕
          </label>
          <div className="w-full text-center mb-2.5 ">
            <h3 className="text-[30px] font-semibold leading-[45px] text-black/[0.85] ">
              Confirm your Current Password
            </h3>
            <p className="text-[20px] font-normal leading-[30px] text-black/[0.7]">
              Please confirm your password
            </p>
          </div>
          <div className=" px-[15px] mb-10 ">
            <p className="text-2xl font-medium text-black/[0.85] capitalize mb-3">
              password
            </p>
            <div>
              <input
                type="password"
                placeholder="Enter current password"
                className="input input-bordered border-black/[0.85] bg-transparent w-full "
              />
            </div>
            <div className="flex justify-center w-full space-x-[37px] mt-6 ">
              <label
                htmlFor="my-modal-3"
                className="px-[22px] py-3.5 text-[20px] font-medium text-black/[0.85] capitalize btn border-[1px] border-black/[0.05] bg-black/[0.1] hover:bg-black/[0.1] h-[58px] rounded-xl "
              >
                Cancel
              </label>
              <label
                onClick={() => setEditPassword(true)}
                htmlFor="my-modal-3"
                className="px-[22px] text-[20px] font-medium text-black/[0.85] capitalize btn border-[1px] border-black/[0.05] bg-[#B5DFE2] hover:btn-success hover:text-white h-[58px] rounded-xl "
              >
                Confirm Password
              </label>
            </div>
          </div>
          <div className="w-full text-center">
            <p className="capitalize text-[20px] font-semibold leading-[30px] text-[#148B92] ">
              forgot password
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
