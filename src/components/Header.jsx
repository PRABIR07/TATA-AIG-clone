import React from "react";
import logo from "../images/logo.png";
import user from "../images/user.svg";
const Header = () => {
  return (
    <div className=" bg-white sticky top-0  flex items-center  justify-between  font-poppins text-[#264A9F] cursor-pointer px-[10vw] ">
      <a className="bg-white border p-2 rounded border-[#f5f5f5] h-16 w-16 shadow-[3px_3px_6px_#bfc3cf,_-3px_-3px_6px_#fff] m-4   ">
        <img src={logo} alt="logo" />
      </a>

<div className="md:hidden font-bold bg-gray-100 px-4 py-3 rounded-full shadow-[3px_3px_6px_#bfc3cf,_-3px_-3px_6px_#fff]">
<i class="fa-solid fa-bars"></i>
</div>
  

      <div className="hidden sm:flex justify-between items-center text-sm space-x-10">
        <div className="flex gap-2 ">
          All Products{" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
        </div>
        <a>COVID-19 Assistance</a>
        <a>Claims</a>
        <a>Support</a>
        <a className="flex gap-2 rounded-full  shadow-[3px_3px_6px_#bfc3cf] px-6 py-3 bg-gradient-to-r from-[#eff0f3] to-[#e5e6eb]">
          <img src={user} alt="self service" /> Self Service
        </a>
      </div>
    </div>
  );
};

export default Header;
