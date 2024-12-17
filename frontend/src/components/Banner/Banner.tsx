import Button from "../Button/Button";
import { phoneNumber, BannerImage, Spiral } from "../../assets/assets";

const Banner = () => {
  return (
    <div className="bg-accent3 h-[70vh] lg:h-[389px] flex lg:container  items-center lg:mb-24 mb-12">
      <span className="w-[36px] h-full">
        <img
          src={Spiral}
          alt=""
          className="object-cover object-left-top w-full h-full"
        />
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
            <Button
              onClick={() => (window.location.href = `tel:${phoneNumber}`)}
              styleType="solid"
            >
              Call Now
            </Button>
          </div>
          <div className="bg-accent2 lg:block h-80 md:-mb-24 -mb-12 overflow-hidden">
            <img
              src={BannerImage}
              alt=""
              className="object-cover object-center h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
