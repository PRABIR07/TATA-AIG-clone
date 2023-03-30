import React from "react";
import logo from "../images/logo.png";
import google from "../images/google.svg";
import apple from "../images/appple.svg";
import dropdown from "../images/iconDown.png";
const Footer = () => {
  return (
    <div className="mx-[10vw]">
      <div className="flex  justify-between   gap-4 mt-20 py-14   px-14 bg-[#EAECF0]  border-solid rounded-xl  border-[#f5f5f5]  shadow-[3px_3px_6px_#bfc3cf,_-3px_-3px_6px_#fff] cursor-pointer">
        <div className="space-y-10">
          <img
            className="bg-white border  rounded border-[#f5f5f5] shadow-[3px_3px_6px_#bfc3cf,_-3px_-3px_6px_#fff] h-18 w-20"
            src={logo}
            alt="logoimg"
          />
          <div className="space-y-3">
            <h6 className="text-[#071E5499] hover:text-[#264A9F] text-sm">
              Download Our App
            </h6>
            <img className="h-10 w-18 m-1" src={google} alt="googleimg" />
            <img className="h-10 w-18 m-1" src={apple} alt="googleimg" />
          </div>
          <h6 className="text-[#071E5499] text-sm"> Follow Us</h6>
        </div>

        <div className="space-y-10 ">
          <h6 className="text-[#264A9F]">Company</h6>
          <h6 className="text-[#071E5499] hover:text-[#264A9F]">About Us</h6>
          <h6 className="text-[#071E5499] hover:text-[#264A9F]">
            Public Disclosures
          </h6>
          <h6 className="text-[#071E5499] hover:text-[#264A9F]">Investors</h6>
          <h6 className="text-[#071E5499] hover:text-[#264A9F]">Contact Us</h6>
          <h6 className="text-[#071E5499] hover:text-[#264A9F]">Careers</h6>
          <h6 className="text-[#071E5499] hover:text-[#264A9F]">
            Agent registration
          </h6>
        </div>
        <div className="space-y-10">
          <h6 className="text-[#264A9F] ">Resources</h6>
          <h6 className="text-[#071E5499] hover:text-[#264A9F]">About Us</h6>
          <h6 className="text-[#071E5499] hover:text-[#264A9F]">Blog</h6>
          <h6 className="text-[#071E5499] hover:text-[#264A9F]">
            Insurance FAQs
          </h6>
        </div>
        <div className="space-y-10">
          <h6 className="text-[#264A9F]">Services</h6>
          <h6 className="text-[#071E5499] hover:text-[#264A9F]">Renewals</h6>
          <h6 className="text-[#071E5499] hover:text-[#264A9F]">
            Self Service
          </h6>
          <h6 className="text-[#071E5499] hover:text-[#264A9F]">
            Vehicle Inspection
          </h6>
        </div>
      </div>
    

      <div className="bg-[#EAECF0] px-10 rounded-xl  border-[#f5f5f5]  shadow-[3px_3px_6px_#bfc3cf,_-3px_-3px_6px_#fff] cursor-pointer grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 text-[#264A9F] items-center w-full">
        <div className=" py-3  border border-r-gray-300 h-full">
          Health Insurance
        </div>
        <div className=" py-3  border border-r-gray-300 h-full">
          Motor Insurance
        </div>
        <div className=" py-3 border border-r-gray-300 h-full">
          Travel Insurance
        </div>
        <div className=" py-3 flex items-center justify-between h-full">
          <div>Other Insurance</div>
          <img
            className="rounded-full p-2   border-[#f5f5f5]  shadow-[3px_3px_6px_#bfc3cf,_-3px_-3px_6px_#fff] cursor-pointer grid grid-cols-6 gap-6 text-[#264A9F]"
            src={dropdown}
            alt="dropicon"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
