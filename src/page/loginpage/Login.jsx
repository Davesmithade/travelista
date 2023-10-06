import React from "react";
import buildings from "../../assets/buildings.svg";
import airplane from "../../assets/airplane.svg";
import email from "../../assets/email-icon.svg";
import lock from "../../assets/lock-icon.svg";
import LoginModesprops from "../../components/loginmodes/LoginModesprops";
import GoogleIcon from "../../assets/googleicon.svg"
import FacebookIcon from "../../assets/facebookicon.svg"
import AppleIcon from "../../assets/appleicon.svg"

const Login = () => {


  return (
    <>
      <div className="bg-black min-h-[300px] h-[100vh] w-[100vw]">
        <div className="flex bg-white overflow-hidden lg:rounded-[23px] h-[100%] w-[100%]">
          <div className="left h-[100%] flex-1 hidden lg:flex">
            <div></div>
          </div>
          <div className="right relative h-[100%] flex-1 bg-white overflow-y-scroll">
            <img
              draggable={false}
              src={airplane}
              alt=""
              className=" w-1/3 absolute top-12 right-0 "
            />

            <form className="form w-full flex flex-col items-center h-full ">
              <div className="formBody px-5 pt-10 my-auto  w-full flex flex-col items-center" >
                <p className="text-blue-400 font-bold text-[3rem] pt-10 pb-1">Welcome</p>
                <p className="pb-3 text-[#00000094] font-medium">Login with Email</p>

                <div className="inputBox backdrop-blur-md emlINP relative border-2 flex p-2 rounded-xl px-5 focus-within:border-[#009EE2] gap-2 mb-6 w-[80%] max-w-[400px]">
                    <label htmlFor="email" className="label text-xs font-bold">Email Id</label>
                  <img width={25} src={email} alt="" className="z-10"/> <input spellCheck={false} id="email" type="email" className=" outline-none w-full h-[40px]  bg-transparent text-sm" />
                </div>

                <div className="inputBox backdrop-blur-md pwdINP relative border-2 flex p-2 rounded-xl px-5 focus-within:border-[#009EE2] gap-2 w-[80%] max-w-[400px]">
                    <label htmlFor="pword" className="label text-xs font-bold">Password</label>
                  <img width={25} src={lock} alt="" className="z-10"/> <input id="pword" onBlur={e => check(e)} type="password" className=" outline-none w-full h-[40px] bg-transparent text-sm" />
                </div>  
                <div className="flex justify-end lg:ml-[250px] mt-3">
                   <p className="text-[#00000094] font-bold text-[12px] text-start">Forgot your password?</p> 
               </div>

               <div className="mt-4">
                   <button className="bg-[#009EE2] w-28 rounded-[3px] text-center h-12 text-white font-bold">LOGIN</button>
               </div>

               <div  className="mt-4 flex gap-3 items-center">
                <div className="border-b border-[#00000063] w-[80px]"></div>
                <div className=" font-medium text-[#000] text-[14px]">OR</div>
                <div className="border-b border-[#00000063] w-[80px]"></div>
               </div>

               <div className="flex items-center gap-3 mt-3">
                <LoginModesprops img={GoogleIcon}/>
                <LoginModesprops img={FacebookIcon}/>
                <LoginModesprops img={AppleIcon}/>
               </div>
               </div>

               <div className="mt-4">
                <p className=" text-[#000] text-[14px]">Don’t have account? <span className=" font-bold text-[#000]" >Register Now</span></p>
               </div>
               
                <img
              draggable={false}
              src={buildings}
              alt=""
              className="buildings w-full mt-"
            />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
