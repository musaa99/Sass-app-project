import React, { useEffect, useRef, useState } from "react";
import {
  adminUsers,
  credentialDetails,
} from "../../assets/data/userProfileBoard";
import ProfileHeader from "../headers/ProfileHeader";
import AvatarIcon from "../icons/AvatarIcon";
import CameraIcon from "../icons/CameraIcon";
import { useParams } from "react-router-dom";
import CredentialSelect from "../multiSelect/CredentialSelect";

const Profile = (props) => {
  const { header, text, button } = props;
  //const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
  const imageInputRef = useRef(null);
  const [imgUrl, setImgUrl] = useState("");
  const [selectedCred, setSelectedCred] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [editPhoto, setEditPhoto] = useState(false);
  const [isChecked, setIsChecked] = useState(
    new Array(credentialDetails.length).fill(false)
  );
  const [user, setUser] = useState([]);
  const param = useParams();

  function changeCredState(position) {
    const updateCheck = isChecked.map((item, index) =>
      position === index ? !item : item
    );
    setIsChecked([...updateCheck]);
    const displayCred = updateCheck.map((item, index) =>
      item === true ? credentialDetails[index] : null
    );
    setSelectedCred([...displayCred.filter((item) => item !== null)]);
  }

  function changeInputValue() {
    console.log("d");
  }

  const pickImage = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };
  const getImageUrl = (e) => {
    const url = e.target.files[0];
    const imageUrl = URL.createObjectURL(url);
    setImgUrl(imageUrl);
  };
  useEffect(() => {
    setUser([...adminUsers.filter((item) => item.id === Number(param.userId))]);
  }, []);

  // function displayEditForm(e) {
  //   const targetName = e.target.name;
  //   console.log("object:", e.target.name);
  //   switch (targetName) {
  //     case targetName === "userName":
  //       setCurrentIndex(1);
  //       break;
  //     case targetName === "userEmail":
  //       setCurrentIndex(2);
  //       break;

  //     default:
  //       break;
  //   }
  // }
  return (
    <div className="w-[calc(100vw-330px)] pl-6 pr-4 max-w-7xl   ">
      <>
        <ProfileHeader title={"profile"} />
      </>
      <div className="w-full max-w-[851px] flex justify-between items-center  ">
        <div className="flex-1 items-center flex space-x-[40px] relative">
          <div className="avatar  ">
            <div className="w-[94px] rounded-full overflow-hidden   ">
              {imgUrl !== "" ? (
                <img src={imgUrl} alt="profileImage" />
              ) : (
                <div className="w-full bg-[#07939BCC] h-full flex justify-center items-center">
                  <AvatarIcon />
                </div>
              )}
            </div>
          </div>
          {editPhoto && (
            <button
              onClick={pickImage}
              data-tip="select image"
              className="tooltip absolute -left-10 animate-pulse btn btn-active btn-ghost w-[94px] h-[94px] rounded-full bg-red-100 flex items-center justify-center"
            >
              <CameraIcon />
            </button>
          )}
          <div className="">
            <p className=" text-[20px] leading-[30px] font-medium text-black/[0.85] mb-[10px] capitalize">
              profile photo
            </p>
            <p className="text-black/[0.7] text-[20px] leading-[30px] font-normal ">
              This helps users recognize you!
            </p>
          </div>
        </div>

        <div>
          {editPhoto ? (
            <button
              onClick={() => setEditPhoto(false)}
              className=" btn btn-outline capitalize border-black/[0.05] text-black/[0.85] rounded-[8px] w-[184px]"
            >
              upload photo
            </button>
          ) : (
            <button
              onClick={() => setEditPhoto(true)}
              className="capitalize btn gap-2 bg-black/[0.01] border-black/[0.05] border-[1px] rounded-[8px] text-black/[0.85] text-[20px] leading-[30px] font-medium px-6 py-3.5 h-[58px] w-[148px] hover:text-white hover:bg-[#07939BCC] hover:border-0 outline-none"
            >
              edit photo
            </button>
          )}
        </div>
        {/* hidden file input */}
        <input
          onChange={getImageUrl}
          ref={imageInputRef}
          type="file"
          name="image"
          id="image"
          className="hidden"
        />
      </div>
      <div className="divider max-w-[851px] border h-[1px] border-black/[0.2] my-[30px] "></div>
      {user &&
        user.map((item, index) => (
          <div key={item.id}>
            {/* name section */}
            <div className="w-full max-w-[851px] flex justify-between items-center  ">
              <div className="flex-1 justify-center flex flex-col">
                <p className="text-[20px] leading-[30px] font-medium text-black/[0.85] mb-[4px] capitalize">
                  name
                </p>
                {currentIndex === 1 ? (
                  <div className="overflow-hidden mr-12 ">
                    <input
                      value={item.name}
                      type="text"
                      onChange={changeInputValue}
                      className="input w-full input-bordered border-2 bg-transparent max-w-[600px] text-black/[0.85] "
                    />
                  </div>
                ) : (
                  <p className="text-[20px] leading-[30px] font-normal text-black/[0.7] capitalize">
                    {item.name}
                  </p>
                )}
              </div>
              {currentIndex === 1 ? (
                <div className="h-full items-center space-x-[30px] mt-[38px] ">
                  <button
                    onClick={() => setCurrentIndex(0)}
                    className="btn btn-outline capitalize border-black/[0.05] text-black/[0.85] rounded-[8px] w-[98px]"
                  >
                    cancel
                  </button>
                  <button className="btn btn-accent capitalize bg-[#37A7AE] rounded-[8px] w-[98px] text-black/[0.85]">
                    save
                  </button>
                </div>
              ) : (
                <button
                  name="userName"
                  onClick={() => setCurrentIndex(1)}
                  className="capitalize btn gap-2 bg-black/[0.01] border-black/[0.05] border-[1px] rounded-[8px] text-black/[0.85] text-[20px] leading-[30px] font-medium px-6 py-3.5 h-[58px] w-[148px] hover:text-white hover:bg-[#07939BCC] hover:border-0 outline-none"
                >
                  edit
                </button>
              )}
            </div>
            <div className="divider max-w-[851px] border h-[1px] border-black/[0.2] my-[30px] "></div>

            {/* email section */}
            <div className="w-full max-w-[851px] flex justify-between items-center  ">
              <div className="flex-1 justify-center flex flex-col">
                <p className="text-[20px] leading-[30px] font-medium text-black/[0.85] mb-[4px] capitalize">
                  email address
                </p>
                {currentIndex === 2 ? (
                  <div className="overflow-hidden mr-12 ">
                    <input
                      value={item.email}
                      type="email"
                      onChange={changeInputValue}
                      className="input w-full input-bordered border-2 bg-transparent max-w-[600px] text-black/[0.85] "
                    />
                  </div>
                ) : (
                  <p className="text-[20px] leading-[30px] font-normal text-black/[0.7] capitalize">
                    {item.email}
                  </p>
                )}
              </div>
              {currentIndex === 2 ? (
                <div className="h-full items-center space-x-[30px] mt-[38px] ">
                  <button
                    onClick={() => setCurrentIndex(0)}
                    className="btn btn-outline capitalize border-black/[0.05] text-black/[0.85] rounded-[8px] w-[98px]"
                  >
                    cancel
                  </button>
                  <button className="btn btn-accent capitalize bg-[#37A7AE] rounded-[8px] w-[98px] text-black/[0.85]">
                    save
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setCurrentIndex(2)}
                  className="capitalize btn gap-2 bg-black/[0.01] border-black/[0.05] border-[1px] rounded-[8px] text-black/[0.85] text-[20px] leading-[30px] font-medium px-6 py-3.5 h-[58px] w-[148px] hover:text-white hover:bg-[#07939BCC] hover:border-0 outline-none"
                >
                  edit
                </button>
              )}
            </div>
            <div className="divider max-w-[851px] border h-[1px] border-black/[0.2] my-[30px] "></div>

            {/* department section */}
            <div className="w-full max-w-[851px] flex justify-between items-center  ">
              <div className="flex-1 justify-center flex flex-col">
                <p className="text-[20px] leading-[30px] font-medium text-black/[0.85] mb-[4px] capitalize">
                  department
                </p>
                {currentIndex === 3 ? (
                  <div className="overflow-hidden mr-12 ">
                    <input
                      value={item.department}
                      type="text"
                      onChange={changeInputValue}
                      className="input w-full input-bordered border-2 bg-transparent max-w-[600px] text-black/[0.85] "
                    />
                  </div>
                ) : (
                  <p className="text-[20px] leading-[30px] font-normal text-black/[0.7] capitalize">
                    {item.department}
                  </p>
                )}
              </div>
              {currentIndex === 3 ? (
                <div className="h-full items-center space-x-[30px] mt-[38px] ">
                  <button
                    onClick={() => setCurrentIndex(0)}
                    className="btn btn-outline capitalize border-black/[0.05] text-black/[0.85] rounded-[8px] w-[98px]"
                  >
                    cancel
                  </button>
                  <button className="btn btn-accent capitalize bg-[#37A7AE] rounded-[8px] w-[98px] text-black/[0.85]">
                    save
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setCurrentIndex(3)}
                  className="capitalize btn gap-2 bg-black/[0.01] border-black/[0.05] border-[1px] rounded-[8px] text-black/[0.85] text-[20px] leading-[30px] font-medium px-6 py-3.5 h-[58px] w-[148px] hover:text-white hover:bg-[#07939BCC] hover:border-0 outline-none"
                >
                  edit
                </button>
              )}
            </div>
            <div className="divider max-w-[851px] border h-[1px] border-black/[0.2] my-[30px] "></div>

            {/* position section */}
            <div className="w-full max-w-[851px] flex justify-between items-center  ">
              <div className="flex-1 justify-center flex flex-col">
                <p className="text-[20px] leading-[30px] font-medium text-black/[0.85] mb-[4px] capitalize">
                  position
                </p>
                {currentIndex === 4 ? (
                  <div className="overflow-hidden mr-12 ">
                    <input
                      value={item.position}
                      type="text"
                      onChange={changeInputValue}
                      className="input w-full input-bordered border-2 bg-transparent max-w-[600px] text-black/[0.85] "
                    />
                  </div>
                ) : (
                  <p className="text-[20px] leading-[30px] font-normal text-black/[0.7] capitalize">
                    {item.position}
                  </p>
                )}
              </div>
              {currentIndex === 4 ? (
                <div className="h-full items-center space-x-[30px] mt-[38px] ">
                  <button
                    onClick={() => setCurrentIndex(0)}
                    className="btn btn-outline capitalize border-black/[0.05] text-black/[0.85] rounded-[8px] w-[98px]"
                  >
                    cancel
                  </button>
                  <button className="btn btn-accent capitalize bg-[#37A7AE] rounded-[8px] w-[98px] text-black/[0.85]">
                    save
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setCurrentIndex(4)}
                  className="capitalize btn gap-2 bg-black/[0.01] border-black/[0.05] border-[1px] rounded-[8px] text-black/[0.85] text-[20px] leading-[30px] font-medium px-6 py-3.5 h-[58px] w-[148px] hover:text-white hover:bg-[#07939BCC] hover:border-0 outline-none"
                >
                  edit
                </button>
              )}
            </div>
            <div className="divider max-w-[851px] border h-[1px] border-black/[0.2] my-[30px] "></div>
          </div>
        ))}

      <div className="w-full max-w-[851px] flex justify-between items-center mb-[200px]  ">
        <div className="form-control w-full max-w-lg">
          <label className="label">
            <span className="label-text text-black capitalize font-medium">
              credentials
            </span>
          </label>
          <CredentialSelect />
        </div>
      </div>
    </div>
  );
};
export default Profile;
