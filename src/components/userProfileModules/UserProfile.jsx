import React, { useEffect, useState } from "react";
import {
  adminUsers,
  userProfileBoard,
} from "../../assets/data/userProfileBoard";
import { Link, useParams } from "react-router-dom";
import { Icon } from "@iconify/react";
// import { useSelector } from "react-redux";
import LocationIcon from "../icons/LocationIcon";
import AvatarIcon from "../icons/AvatarIcon";
import LogoutModal from "../modal/LogoutModal";

const UsersProfile = () => {
  // const { user } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);
  const [imgUrl, setImgUrl] = useState("");
  const openModal = () => setIsOpen(true);
  const [user, setUser] = useState({});
  const param = useParams();

  useEffect(() => {
    const [person] = adminUsers.filter(
      (item) => item.id === Number(param.userId)
    );
    setUser(person);
  }, [param.userId]);
  return (
    <main className="my-[76px] w-[calc(100vw-330px)] pl-6 pr-4 max-w-7xl ">
      <div key={user.id} className="flex items-center ">
        <div className="avatar online mr-8 ">
          <div className="w-[150px] rounded-full overflow-hidden  ">
            {imgUrl !== "" ? (
              <img src={imgUrl} alt="profileImage" />
            ) : (
              <div className="w-full bg-[#07939BCC] h-full flex justify-center items-center">
                <AvatarIcon />
              </div>
            )}
          </div>
        </div>
        <div className="w-full">
          <p className=" flex w-full items-center text-2xl font-medium text-black mb-2 capitalize">
            {user.name}
          </p>

          <p className=" flex items-center mb-[10px] ">
            <LocationIcon />
            <span className="text-[20px] ml-2 text-black/60">
              {user.location}
            </span>
          </p>
          <p className="text-black/60 capitalize">{user.role}</p>
        </div>
      </div>

      <ul className=" justify-center pt-3  lg:pt-[60px]">
        {userProfileBoard.map((item, index) => {
          return (
            <Link key={index} to={item.path}>
              <button className="hover:bg-white capitalize btn gap-2 bg-white border-black/10 border-[1px] rounded-[20px] w-full max-w-[800px] my-[12px] px-[17px] flex items-center justify-between text-black text-[20px] ">
                {item.title}
                <span className="text-black">
                  <Icon icon="eva:arrow-ios-back-fill" rotate={2} />
                </span>
              </button>
            </Link>
          );
        })}
        <button
          onClick={openModal}
          className="hover:bg-white capitalize btn gap-2 bg-white border-black/10 border-[1px] rounded-[20px] w-full max-w-[800px] my-[12px] px-[17px] flex items-center justify-between text-black text-[20px] "
        >
          logout
          <div>
            <Icon icon="eva:arrow-ios-back-fill" rotate={2} />
          </div>
        </button>
      </ul>
      <LogoutModal
        openModal={openModal}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        title={"Are you sure you want to log out ?"}
        subtitle={
          "All your unaved data will be lost. We won’t be able to notify you"
        }
        btnAction={"logout"}
      />
    </main>
  );
};

export default UsersProfile;
