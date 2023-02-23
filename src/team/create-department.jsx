import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { branches } from "../assets/data/userProfileBoard";
// import ArrowDown from "../components/icons/ArrownDown";
import { FaAngleLeft } from "react-icons/fa";
import { createDept } from "../services/requests";

const CreateDepartment = () => {
  // const token = localStorage.getItem("userToken");
  const [deptDetails, setDeptDetails] = useState({
    deptName: "",
    description: "",
  });
  // const navigate = useNavigate();
  // const [selectedBranch, setSelectedBranch] = useState([]);
  // const [isChecked, setIsChecked] = useState(
  //   new Array(branches.length).fill(false)
  // );

  // function changeSelectedBranch(position) {
  //   const updateCheck = isChecked.map((item, index) =>
  //     position === index ? !item : item
  //   );
  //   setIsChecked([...updateCheck]);
  //   const displayCred = updateCheck.map((item, index) =>
  //     item === true ? branches[index] : null
  //   );
  //   setSelectedBranch([...displayCred.filter((item) => item !== null)]);
  // }
  const onChangeHandler = (event) => {
    const value = event.target.value;
    setDeptDetails({
      ...deptDetails,
      [event.target.name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const details = {
      name: deptDetails.deptName,
      description: deptDetails.description,
    };

    const response = await createDept(details);
    if (response.response) {
      const { errors } = response.response.data;
      console.log(errors.name[0]);
    }
    if (response.status) {
      console.log(response.message);
      setDeptDetails({ ...deptDetails, deptName: "", description: "" });
    }
  };

  const canSave =
    Boolean(deptDetails.deptName) && Boolean(deptDetails.description);

  return (
    <div className="w-[calc(100vw-290px)] h-fit  pl-6 pr-4 max-w-[1222px]">
      <div className="my-5 w-full max-w-[700px]  pb-96">
        <h1 className="capitalize font-bold text-black text-2xl leading-7  ">
          Create department
        </h1>
        <div className="flex space-x-2 items-center ">
          <div className="text-sm font-medium text-black/70 capitalize space-x-1">
            <p className="flex items-center space-x-2">
              team <FaAngleLeft className=" w-6 h-6 " />
            </p>
          </div>
          <Link
            to={"/team"}
            className="self-end btn btn-active btn-link hover:bg-transparent border-none text-[#07939BCC] text-sm capitalize"
          >
            back
          </Link>
        </div>
        <div className=" bg-white mt-4 rounded-[20px] ">
          <form className="p-6 " onSubmit={handleSubmit}>
            <div className="form-control w-full max-w-xl">
              <label className="label">
                <span className="label-text text-black capitalize font-medium">
                  department name
                </span>
              </label>
              <input
                name="deptName"
                value={deptDetails.deptName}
                type="text"
                onChange={onChangeHandler}
                placeholder="Enter department name"
                className="input input-bordered w-full bg-white border-gray-400 text-black"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text capitalize font-medium text-black">
                  description
                </span>
              </label>
              <textarea
                name="description"
                value={deptDetails.description}
                onChange={onChangeHandler}
                className="textarea textarea-bordered h-24 w-full max-w-xl bg-white border-gray-400 text-black"
                placeholder="Enter description"
              ></textarea>
            </div>

            {/* <div className="w-full max-w-xl flex justify-between items-center  ">
              <div className="flex-1 justify-center flex flex-col ">
                <p className="label label-text capitalize font-medium text-black  ">
                  Add department across
                </p>
                <div className="relative w-full max-w-[430px] rounded-lg border-[1px] border-black/[0.1] py-2 text-[20px] leading-[30px] text-black/[0.7] px-3 h-12">
                  <div className="flex">
                    {selectedBranch &&
                      selectedBranch.map((item, index) => (
                        <div key={item.id} className="flex mr-2">
                          <p className="capitalize label-text text-black/[0.85] py-1">
                            {item.label}
                            {index !== selectedBranch.length - 1 ? (
                              <span>,</span>
                            ) : null}
                          </p>
                        </div>
                      ))}
                  </div>
                  <div className="dropdown dropdown-end absolute top-3 right-0 px-3">
                    <div tabIndex={0} className="mx-1">
                      <ArrowDown />
                    </div>
                    <div
                      tabIndex={0}
                      className="form-control dropdown-content menu p-2 border-[1px] bg-white/[0.1] text-black/[0.85] rounded-[8px] w-[175px] pl-[19px] "
                    >
                      {branches.map((item, index) => (
                        <div key={item.id}>
                          <label className="cursor-pointer label w-full flex space-x-3 items-center">
                            <div className="h-5 w-5 flex items-center justify-center">
                              <input
                                checked={isChecked[index]}
                                name={item.label}
                                value={item.label}
                                type="checkbox"
                                onChange={() => changeSelectedBranch(index)}
                                className="checkbox checkbox-sm border-2 border-black rounded-[4px] h-5 w-5"
                              />
                            </div>
                            <div className="flex-1 capitalize label-text text-black/[0.85] text-[20px] ">
                              <p>{item.label}</p>
                            </div>
                          </label>
                          {index !== branches.length - 1 ? (
                            <div className="divider max-w-[137px] border-[2px] h-[1px] border-[#936060] my-[4px] pl-[19px]  "></div>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <div className=" flex justify-end">
              <button
                type="submit"
                disabled={!canSave}
                className={`rounded ${
                  !canSave ? "bg-[#cccccc]" : "bg-[#37A7AE] hover:bg-[#37A7AE]"
                } btn text-sm rounded-md text-white font-semibold border-none`}
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateDepartment;
