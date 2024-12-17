import React from "react";
import Button from "../Button/Button";

const Banner = () => {
  return (
    <div className="bg-accent3 lg:h-[389px] flex container items-center lg:mb-24 mb-12">
      <span className="w-[36px] h-full">
        <img src="src/assets/spiral.svg" alt="" className="object-contain object-left-top w-full h-full" />
      </span>
      <div className="p-4 lg:p-8 w-full h-full flex flex-col">
        <h4 className="text-primary">
          World's Best Hotline for Everything UAV
        </h4>
        <div className="flex flex-col gap-6 md:flex-row justify-between">
          <div className="space-y-4">
            <p className="text-primary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
              Sunt error reprehenderit, nisi ea molestias iusto <br />
              modi cupiditate blanditiis optio? Autem.
            </p>
            <h4 className="text-primary alt-h ">+91 98765xxxxx</h4>
            <Button onClick={() => console.log("Hello")} styleType="solid">
              Call Now
            </Button>
          </div>
          <div className="bg-accent2 lg:block h-80 md:-mb-24 -mb-12 overflow-hidden">
            <img
              src="src/assets/logo.png"
              alt=""
              className="object-contain object-center h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
