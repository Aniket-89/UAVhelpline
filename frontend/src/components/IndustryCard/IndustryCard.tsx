import React from "react";
import { useNavigate } from "react-router-dom";
import { GiWheat } from "react-icons/gi";
import { ArrowDown } from "../../assets/assets";

interface IndustryCardProps {
  label: string;
  mar?: boolean;
  src?: string;
}

const IndustryCard: React.FC<IndustryCardProps> = ({ label, mar = false, src }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/industry-directory?category=${label}`);
  };

  return (
    <div
      className={`flex items-center lg:flex-col-reverse gap-4 group lg:relative cursor-pointer xl:w-48 xl:h-72 lg:w-[170px] lg:h-64 ${
        mar ? "lg:-mb-40 lg:mt-40" : "lg:-mb-20 lg:mt-20"
      }`}
      onClick={handleClick}
    >
      <a href="#">
        <img
          src={ArrowDown}
          alt=""
          className="absolute hidden lg:block left-0 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 bottom-[90%]"
        />
        <img
          src={src}
          alt=""
          className="absolute hidden lg:block z-[-1] top-0 left-0 h-full w-full object-cover"
        />
        <GiWheat
          color="green"
          size={48}
          className="bg-primary lg:-mb-6 rounded-full p-2 group-hover:bg-accent2"
        />
      </a>
      <h5 className="text-center text-primary w-fit">{label}</h5>
    </div>
  );
};

export default IndustryCard;
