import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { GiWheat } from "react-icons/gi";

type IndustryCardProps = {
  label: string;
  sicj?: boolean;
};

const IndustryCard: React.FC<IndustryCardProps> = ({ label, sicj=false }) => {
    console.log("Offset value:", sicj);
  return (
    <div
      className={`flex items-center lg:flex-col-reverse gap-4 group lg:relative cursor-pointer lg:w-48 lg:h-72 lg:bg-accent3 ${
        sicj ? "lg:-mb-40 lg:mt-40" : "lg:-mb-20 lg:mt-20"
      }`}
    >
        <img src="src/assets/arrow-down-orange.svg" alt="" className="absolute hidden lg:block opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 bottom-[90%]"/>
        <img src="" alt="" className="absolute top-0 left-0" />
      <GiWheat
        color="green"
        size={48}
        className="bg-primary lg:-mb-6 rounded-full p-2 group-hover:bg-accent2"
      ></GiWheat>
      <h3 className="text-primary lg:text-4xl">{label}</h3>
      <FaArrowRight className="lg:hidden"></FaArrowRight>
    </div>
  );
};

export default IndustryCard;
