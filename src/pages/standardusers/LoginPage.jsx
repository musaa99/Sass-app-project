import React from 'react'
import Login from '../../components/logins/Login'
import Navbar from '../../components/Users/Standarduser/navbar/navbar'
import Searchbar from '../../components/Users/Standarduser/navbar/searchbar'
import { useSelector } from 'react-redux';
import Navbar2 from '../../components/Users/SuperAdmin/navbar/navbar';

const LoginPage = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="lg:flex">
    <div className="hidden lg:flex">
    {(user?.user_type?.toLowerCase() === '!employee') ?  <Navbar /> : <Navbar2 /> }
     
    </div>
    <div className=" w-[-webkit-fill-available]">
      <div className="  block  lg:grid lg:grid-cols-1">
        <Searchbar />
       <Login/>
      </div>
    </div>
  </div>
  )
}

export default LoginPage