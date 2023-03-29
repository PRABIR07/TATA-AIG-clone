import React from "react";
import Abimg from "../images/About.svg";
import Year from "../images/year.png";
import Speaker from "../images/speaker.svg"
const About = () => {
  return (
    <div className="mx-[10vw]">
      <div className="flex items-center justify-center flex-col md:flex-row mt-32">
        <div className="w-full md:w-1/2">
          <h1 className="text-center md:text-left text-2xl font-poppins text-[#264A9F]">
            About TATA AIG
          </h1>
          <h6 className="mt-6 text-sm text-[#76839E]">
            Tata AIG General Insurance Company Limited is a joint venture
            company between Tata Group and American International Group (AIG).
            Tata AIG General Insurance Company Limited celebrates 21 years of
            service as on 2021, since it commenced operations in India on
            January 22, 2001. The Company has grown strongly to emerge as the
            preferred private general insurance company in India with
          </h6>
          <h6 className="underline text-sm text-[#8D98AD] mt-3 cursor-pointer">Show More</h6>
        </div>
        <div className="w-full md:w-1/2">
          <img className="px-5 md:px-20" src={Abimg} alt="aboutimg" />
        </div>
      </div>
      
      <div className="space-y-6">
        <h1 className="text-2xl font-poppins text-[#264A9F] mt-6">Whats New</h1>
        <div className="flex gap-6 mt-4 ">
          <div className="flex gap-4 bg-[#EAECF0]  border rounded-xl  border-[#f5f5f5] p-4 shadow-[3px_3px_6px_#bfc3cf,_-3px_-3px_6px_#fff]">
            <img className="h-8 w-12" src={Year} alt="" />
            <h6 className="text-[#697896] text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex ad
              sit debitis rem eius nihil vitae error quam libero quaerat!
            </h6>
          </div>
          <div className=" flex gap-4 bg-[#EAECF0]  border rounded-xl  border-[#f5f5f5] p-4 shadow-[3px_3px_6px_#bfc3cf,_-3px_-3px_6px_#fff]">
            <img className="h-8 w-10" src={Speaker} alt="" />
            <h6 className="text-[#697896] text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex ad
              sit debitis rem eius nihil vitae error quam libero quaerat!
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
