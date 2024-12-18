import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

interface DroneCardProps {
  src: string;
  logoSrc: string;
  label: string;
  children: string;
  websiteUrl?: string;
}

const DroneCard: React.FC<DroneCardProps> = ({
  label,
  children,
  src,
  logoSrc,
  websiteUrl,
}) => {
  return (
    <div className="group w-[283px] aspect-[3/4] relative overflow-hidden">
      {/* Background Image */}
      <img
        src={src}
        alt={label}
        className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 group-hover:rotate-1 transition-transform duration-300 ease-out object-center z-[-1]"
      />

      {/* Top Section */}
      <div className="absolute top-0 left-0 w-full flex items-center justify-between p-2">
        <div className="bg-accent rounded-full px-2 text-primary flex items-center gap-2">
          <IoMdCheckmarkCircleOutline color="green" />
          TYPE CERTIFIED
        </div>

        <a
          href={websiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-0 cursor-pointer group-hover:opacity-100 transition-opacity duration-300"
        >
          <GoArrowUpRight className="border-accent3 border-2 rounded-md size-6 text-accent" />
        </a>
      </div>

      {/* Bottom Section */}
      <div className="absolute bottom-0 w-full">
        <div className="relative bg-gradient-to-b from-transparent to-accent3">
          <div className="p-2 text-primary">
            {/* Logo */}
            <div className="h-18 w-fit mb-2">
              <img
                src={logoSrc}
                alt={`${label} logo`}
                className="h-full object-cover object-center"
              />
            </div>

            {/* Content */}
            <h6 className="leading-tight mb-1 text-primary">{label}</h6>
            <p className="group-hover:bg-light group-hover:bg-opacity-20 transition-opacity duration-500 ease-in-out text-light">{children}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DroneCard;
