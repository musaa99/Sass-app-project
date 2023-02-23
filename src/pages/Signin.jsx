import React, { useEffect } from "react";
import { Formik } from "formik";
import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import LoginBackgroundImage from "../assets/LoginBackgroundImage";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import { useState } from "react";
import { loginUser } from "../services/requests";
import { updateLoggedInUser } from "../feature/user/userSlice";
import { UserTypeContext } from "../App";
import { useContext } from "react";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("userToken");
  const [showPassword, setShowPassword] = useState(false);
  const setUserType = useContext(UserTypeContext).setUserType;

  // Redirect authenticated users
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  });

  async function submitLogin({ email, password }) {
    const { data } = await loginUser({ email, password });
    if (!data) console.log("invalid details");
    else {
      setUserType(data.user.user_type);
      dispatch(updateLoggedInUser(data));
      navigate("/");
    }
  }
  return (
    <main className="bg-[#F5F5F5] w-full h-screen ">
      <div className="w-full h-full flex ">
        <div className="hidden md:flex w-full max-w-[756px] h-full overflow-hidden bg-[#50F4FD0D] ">
          <div className="hidden md:flex h-full w-full items-center ">
            <LoginBackgroundImage />
          </div>
        </div>

        <div className="2xl:flex w-full h-full 2xl:justify-center">
          <div className="flex-1 px-5 py-4 lg:py-10 lg:px-[120px] max-w-7xl h-full 2xl:flex 2xl:flex-col 2xl:justify-center ">
            <div className="w-[158px] h-12">
              <img src={logo} alt="Luchismart logo" className="w-full h-full" />
            </div>

            <h1 className="text-[40px] font-semibold text-black/[0.85] mt-8 xl:mt-[60px] ">
              Login
            </h1>
            <h2 className="text-[20px] font-semibold text-black/50 mb-8">
              Please login to your account
            </h2>
            <Formik
              initialValues={{ email: "", password: "" }}
              className=" grid  "
              validate={(values) => {
                const errors = {};
                if (!values.email) {
                  errors.email = "please enter your email";
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = "Invalid email address";
                }
                if (!values.password) {
                  errors.password = "please enter your password";
                }
                return errors;
              }}
              onSubmit={(values) => submitLogin(values)}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
              }) => (
                <form className="grid w-[auto] " onSubmit={handleSubmit}>
                  <p className="text-xl font-semibold text-black/[0.85] capitalize">
                    Email
                  </p>
                  <div className="w-full h-12 mb-2 mt-1  ">
                    <input
                      type="email"
                      name="email"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      className="shadow appearance-none bg-transparent rounded-lg border border-[#148B92] w-full h-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                  <span className="text-[red]">
                    {errors.email && touched.email && errors.email}
                  </span>

                  <p className="text-xl font-semibold text-black/[0.85] capitalize">
                    Password
                  </p>
                  <div className="w-full h-12 mb-2 mt-1 relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      className="shadow bg-transparent rounded-lg appearance-none border border-[#148B92] w-full h-full px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                    {showPassword ? (
                      <div
                        onClick={() => setShowPassword(false)}
                        className="cursor-pointer"
                      >
                        <BsFillEyeFill className="text-[#37A7AE] w-6 h-6 absolute top-3 right-3 z-20" />
                      </div>
                    ) : (
                      <div
                        onClick={() => setShowPassword(true)}
                        className="cursor-pointer"
                      >
                        <BsFillEyeSlashFill className="text-[#37A7AE] w-6 h-6 absolute top-3 right-3 z-20" />
                      </div>
                    )}
                  </div>
                  <div className="text-[red] mt-0">
                    {errors.password && touched.password && errors.password}
                  </div>
                  <div className="flex  mt-2 mb-[26px] justify-between">
                    {/* <div className="text-[15px] flex space-x-3 ">
                      <input type="checkbox" />
                      <p>Keep me logged in.</p>
                    </div> */}
                    <p className="inline-block align-baseline font-bold text-sm text-[#09969F]">
                      Forgot Password?
                    </p>
                  </div>
                  <button
                    className="bg-[#09969F] w-[200px] m-[auto]  text-white font-bold py-2 px-4 rounded-[16px] focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    {isSubmitting ? "Please wait..." : "LOGIN"}
                  </button>
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Signin;
