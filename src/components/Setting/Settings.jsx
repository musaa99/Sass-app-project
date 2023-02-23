import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import AvatarIcon from "../icons/AvatarIcon";
import CameraIcon from "../icons/CameraIcon";

const Setting = ({ onClickSave }) => {
  const imageInputRef = useRef(null);
  const [imgUrl, setImgUrl] = useState("");
  const [editPhoto, setEditPhoto] = useState(false);

  const [email, setEmail] = useState("");

  //navigate
  const navigate = useNavigate();

  //image
  const getImageUrl = (e) => {
    const url = e.target.files[0];
    const imageUrl = URL.createObjectURL(url);
    setImgUrl(imageUrl);
  };

  const pickImage = () => {
    if (imageInputRef.current) {
      imageInputRef.current.click();
    }
  };
  const disableSave = !( email);
  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/organizationsetup");
  };

  return (
    <div className=" w-[inherit]  p-5 ">
      <div className=" p-6 w-[706px] bg-white ">
        <h1 className="text-[24px] mb-8">Setting</h1>
        <div className="w-full max-w-[851px]  items-center  ">
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
              className="tooltip absolute -left-10 mt-4 animate-pulse btn btn-active btn-ghost w-[94px] h-[94px] rounded-full bg-red-100 flex items-center justify-center"
            >
              <CameraIcon />
            </button>
          )}
         
        </div>

        <div className=" mt-[18px]">
          {editPhoto ? (
            <button
              onClick={() => setEditPhoto(false)}
              className=" btn btn-outline capitalize mt-[18px] border-black/[0.05] text-black/[0.85] rounded-[8px] w-[184px]"
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

        <form className="m-4 mr-[10rem]" action="" onSubmit={handleSubmit}>
        <div className="w-full max-w-[851px] flex justify-between items-center  ">
       

        {/* hidden file input */}
      </div>
          <label class="font-bold text-sm mb-2 ml-1">Name of Company</label>
          <input
            class="w-full px-3 py-2  bg-[inherit] mb-1  border-2 border-gray-200 rounded-md focus:outline-none "
            placeholder="Company Name"
            type="text"
            value="Chevron Tech"
          />
         
          <label class="font-bold text-sm mb-2 ml-1">Company’s email address</label>
          <input
            class="w-full px-3 bg-[inherit] py-2 mb-1  border-2 border-gray-200 rounded-md focus:outline-none "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            type="text"
          />
          
          <label class="font-bold text-sm mb-2 ml-1">Company Bio</label>
          <textarea
            class="w-full  bg-[inherit] my-6 h-[100px] px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none "
            placeholder=""
            type="text"
          />
          <div className="pt-[10px] items-center flex w-auto m-auto  justify-end  "></div>
        </form>
      <button
        onClick={handleSubmit}
        className={`text-[26px] lg:ml-[418px] lg:mt-6 leading-[39px] ${
          disableSave ? "bg-[#cccccc]" : "bg-black/[0.2]"
        } flex-end font-small text-black capitalize btn  rounded-[10px]  hover:bg-[#37A7AE] hover:text-white h-[58px] `}
      >
        Save
      </button>
      </div>
    </div>
  );
};

export default Setting;
