import React, { Children } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


type DroneCardProps = {
  src: string;
  logoSrc: string;
  label: string;
  children: string;
};

const DroneCard: React.FC<DroneCardProps> = ({
  label,
  children,
  src,
  logoSrc,
}) => {
  return (
    <div className="group w-[283px] aspect-[3/4] relative">
      <img
        src={src}
        alt=""
        className="h-full w-full object-cover object-center absolute top-0 left-0 z-[-1]"
      />
      <div className="absolute w-full top-0 left-0 flex items-center justify-between my-2">
        <p className="text-accent bg-accent3 w-fit rounded-full px-2 m-2 text-nowrap flex items-center gap-2">
        <IoMdCheckmarkCircleOutline color="green"/>
        TYPE CERTIFIED
        </p>
        
        <a
          href="https://www.droneanatomy.com"
          target="_blank"
          className="transition-all ease-in-out duration-300 group-hover:opacity-100 text-nowrap opacity-0 mr-4"
        >
          <GoArrowUpRight className="border-accent3 border-2 rounded-md size-6" />{" "}
          
        </a>
      </div>
      <div className=" flex flex-col justify-end h-full">
        <div className="relative">
          <span className="absolute bottom-0 left-0 bg-gradient-to-b from-transparent to-accent3 z-[-1] h-full w-full"></span>
          <div className="py-4 px-2">
            <div className="h-18 w-fit">
              <img
                src={logoSrc}
                alt=""
                height={40}
                className="h-full object-cover object-center"
              />
            </div>

            <h6 className="leading-tight text-primary mb-0 w-fit">
              {label}
            </h6>
            <p className="text-primary bg-light bg-opacity-20">{children}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DroneCard;
