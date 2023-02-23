import { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import CredentialSelect from "../components/multiSelect/CredentialSelect";
import { createBranch } from "../services/requests";

export default function CreateBranch() {
  const [isPicked, setIsPicked] = useState(new Array(4).fill(false));
  const [branchDetails, setBranchDetails] = useState({
    companyName: "",
    email: "",
    branchPhone: "",
    companyAddress: "",
  });
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setBranchDetails({
      ...branchDetails,
      [name]: value,
    });
  };

  const handleCreateBranch = async (e) => {
    e.preventDefault();
    const details = {
      name: branchDetails.companyName,
      email: branchDetails.email,
      phone_number: branchDetails.branchPhone,
      address: branchDetails.companyAddress,
      credentials: {
        FINGERPRINT: isPicked[0],
        RFID_CARD: isPicked[1],
        MOBILE_APP: isPicked[2],
        PIN: isPicked[3],
      },
    };

    const response = await createBranch(details);
    if (response.response) {
      response.response.status === 400 &&
        console.log("Branch name already exist.");
    }
    if (response.status) {
      console.log(response.message);
      setBranchDetails({
        ...branchDetails,
        companyAddress: "",
        companyName: "",
        branchPhone: "",
        email: "",
      });
    }
  };

  const canSave =
    Boolean(branchDetails.companyName) &&
    Boolean(branchDetails.email) &&
    Boolean(branchDetails.branchPhone) &&
    Boolean(branchDetails.companyAddress);

  return (
    <main className="w-full p-6 pb-64  ">
      <div className="max-w-lg w-full bg-white rounded-[10px] p-6 ">
        <p className="text-black capitalize font-medium text-2xl  ">
          create branch
        </p>
        <div className="flex space-x-2 items-center mb-4 ">
          <div className="text-sm font-medium text-black/70 capitalize space-x-1">
            <p className="flex items-center space-x-2">
              branches <FaAngleLeft className=" w-6 h-6 " />
            </p>
          </div>
          <Link
            to={"/organization-setup"}
            className="self-end btn btn-active btn-link hover:bg-transparent border-none text-[#07939BCC] text-sm capitalize"
          >
            back
          </Link>
        </div>

        <div>
          <form className="w-full max-w-md" onSubmit={handleCreateBranch}>
            <div className="form-control w-full text-black">
              <label className="label">
                <span className="label-text font-medium  text-black capitalize">
                  Branch name
                </span>
              </label>
              <input
                type="text"
                value={branchDetails.companyName}
                name="companyName"
                onChange={onChangeHandler}
                placeholder="eg: Luchismart_Abuja"
                className="input input-bordered border-2 border-gray-500 bg-transparent outline-none w-full "
              />
            </div>

            <div className="form-control w-full text-black">
              <label className="label">
                <span className="label-text font-medium  text-black">
                  Branch Phone
                </span>
              </label>
              <input
                type="text"
                value={branchDetails.branchPhone}
                name="branchPhone"
                onChange={onChangeHandler}
                placeholder="07060326781"
                className="input input-bordered border-2 border-gray-500 bg-transparent outline-none w-full "
              />
            </div>

            <div className="form-control w-full text-black">
              <label className="label">
                <span className="label-text font-medium  text-black">
                  Email
                </span>
              </label>
              <input
                type="email"
                value={branchDetails.email}
                onChange={onChangeHandler}
                name="email"
                placeholder="jarotechnologies@gmal.com"
                className="input input-bordered border-2 border-gray-500 bg-transparent outline-none w-full "
              />
            </div>
            <div className="form-control w-full text-black">
              <label className="label">
                <span className="label-text font-medium capitalize  text-black">
                  location
                </span>
              </label>
              <input
                type="text"
                value={branchDetails.companyAddress}
                onChange={onChangeHandler}
                name="companyAddress"
                placeholder="Enter company address"
                className="input input-bordered border-2 border-gray-500 bg-transparent outline-none w-full "
              />
            </div>

            <div className="w-full max-w-xl flex justify-between items-center  ">
              <div className="flex-1 justify-center flex flex-col ">
                <p className="label label-text capitalize font-medium text-black   ">
                  Credentials
                </p>
                <CredentialSelect setMethod={setIsPicked} value={isPicked} />
              </div>
            </div>

            <div className=" flex justify-end mt-8">
              <button
                disabled={!canSave}
                type="submit"
                className="btn text-sm rounded-md text-white font-semibold border-none w-[129px] bg-[#37A7AE] hover:bg-[#37A7AE]"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
