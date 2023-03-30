import React from "react";
import hero from "../images/hero1.svg";
import Car from "../images/car.svg";
import Bike from "../images/bike.svg";
import Health from "../images/health.svg";
import Travel from "../images/travel.svg";
import Scroll from "../images/scroll.svg";
const Hero = () => {
  return (
    <>
      <div className="flex flex-col md:flex justify-evenly font-poppins mt-10 mx-[10vw]">
        <div>
          <h1 className="text-[#264a9f] font-semibold text-[24px] md:text-[28px] text-center md:text-left">
            Trusted Naam, Fantastic Kaam!
          </h1>
          <div className="flex justify-between text-[#264a9f] mt-6 space-x-5 md:space-x-0">
            <div className="flex flex-col text-sm ">
              <div className="flex items-center justify-center gap-2 px-5 pt-2 pb-1">
                <img className="w-7" src={Car} alt="carimg" />
                <h3>Car</h3>
              </div>
              {/* for bottom line */}
              <div className="bg-gradient-to-r from-[#35d3e1] to-[#264a9f] w-full h-1 rounded-lg  shadow-[3px_3px_6px_#bfc3cf,-3px_-3px_6px_#fff]"></div>
            </div>

            <div className="flex flex-col text-sm ">
              <div className="flex items-center justify-center gap-2 px-5 pt-2 pb-1">
                <img className="w-6" src={Bike} alt="bikeimg" />
                <h3>Bike</h3>
              </div>
              <div className="bg-white  w-full h-1 rounded-lg shadow-[3px_3px_6px_#bfc3cf,-3px_-3px_6px_#fff] "></div>
            </div>

            <div className="flex flex-col text-sm ">
              <div className="flex items-center justify-center gap-2 px-5 pt-2 pb-1">
                <img className="w-5" src={Health} alt="healthimg" />
                <h3>Health</h3>
              </div>
              <div className="bg-white  w-full h-1 rounded-lg shadow-[3px_3px_6px_#bfc3cf,-3px_-3px_6px_#fff]"></div>
            </div>

            <div className="flex flex-col text-sm ">
              <div className="flex items-center justify-center gap-2 px-5 pt-2 pb-1">
                <img className="w-4" src={Travel} alt="travelimg" />
                <h3>Travel</h3>
              </div>

              <div className="bg-white  w-full h-1 rounded-lg shadow-[3px_3px_6px_#bfc3cf,-3px_-3px_6px_#fff]"></div>
            </div>
          </div>

          <div className=" mt-6  border rounded-xl  border-[#f5f5f5] px-4 py-8 shadow-[5px_3px_2px_#bfc3cf,_-5px_-4px_4px_#fff] bg-gradient-to-r from-[#eff0f3]">
            <h6 className=" text-[#071E54] text-sm font-sans ">
              {" "}
              Your Car Registration Number
            </h6>
            <div className="border rounded-full shadow-[inset_3px_3px_6px_#bfc3cf,_inset_-3px_-3px_6px_#fff] px-4 py-2 bg-gradient-to-r from-[#eff0f3] mt-2">
              <input
                className="bg-transparent outline-none p-1"
                type="text"
                placeholder="MH01AAB1234"
              />
            </div>
            <h6 className="text-center text-red-600 text-sm font-sans ">
              Please enter your vehicle registration number
            </h6>
            <div className="flex  gap-4 mt-2 ">
              <button className="  text-[#264a9f] border rounded-full border-[#f5f5f5] shadow-[5px_3px_2px_#bfc3cf,_-5px_-4px_4px_#fff]  px-10 py-1 ">
                Renew
              </button>
              <button className="border rounded-full text-white shadow-[5px_3px_2px_#bfc3cf,_-2px_-4px_2px_#fff]  px-10 py-1 bg-gradient-to-r from-cyan-300 to-blue-700">
                Get Price
              </button>
            </div>
          </div>
        </div>

        <div>
          <img src={hero} alt="heroimg" />
        </div>
      </div>
      <div className="mt-20">
        <img className="m-auto w-5" src={Scroll} alt="" />
        <h4 className="text-center text-xs">Scroll Now</h4>
      </div>
    </>
  );
};

export default Hero;
