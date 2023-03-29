import React from "react";
import Carr from "../images/car.jpeg";
import Bikee from "../images/bike.jpeg";
import Vacation from "../images/Vacation.jpeg";

let articleData = [
  {
    img: Carr,
    title: "How Is Your Car Insurance Premium Calculated?",
    desc: "  Well it’s about time that changed, don’t you think? Read on to now the components of your car insurance premium, so you can savemore, and get smart",
  },
  {
    img: Bikee,
    title:
      "Going for a vacation. Here are five reasons you need travel insurance",
    desc: "That is certainly a nightmare. It is why a travel insurance policy is important. You could be on a domestic or an international holiday. A travel plan will ensure nothing spoils your perfect vacation.",
  },
  {
    img: Vacation,
    title: "5 things you did not know about two wheeler insurance",
    desc: "In a time of heavy traffic and accidents, two wheeler insurance is a must-have.  ",
  },
];
const Related = () => {
  return (
    <>
      <div className="mx-[10vw] py-8 cursor-pointer ">
        <h1 className="text-3xl text-[#264A9F] ">Related Articles</h1>
        <div className=" flex-col   md:flex  gap-4 mt-6 ">
          {articleData.map((data) => (
            <div className="bg-[#EAECF0]  border border-[#f5f5f5] rounded-2xl  shadow-[3px_3px_6px_#bfc3cf,_-3px_-3px_6px_#fff] hover:shadow-[3px_3px_6px_#B4C4F8,_-3px_-3px_6px_#fff]">
              <img
                className="rounded-tl-2xl rounded-tr-2xl"
                src={data.img}
                alt="carimg"
              />
              <div className="p-8">
                <h1 className="text-lg text-[#264A9F] ">{data.title}</h1>
                <p className="text-sm text-[#48567B]">{data.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Related;
