import React from "react";
// import { useSelector } from 'react-redux';
import EditUserProfile from "../../components/usersModule/EditUserProfile";

const ProfileEdit = () => {
  // const { user } = useSelector((state) => state.auth);

  return (
    <div className=" w-[-webkit-fill-available]">
        <EditUserProfile/> 
  </div>
  );
};

export default ProfileEdit;
