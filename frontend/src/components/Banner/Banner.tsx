import Button from "../Button/Button";
import { phoneNumber, BannerImage } from "../../assets/assets";

const Banner = () => {
  return (
    <div className="bg-royal flex lg:h-[389px] md:h-[364px] sm:h-[58vh] w-full mb-24">
        <div className="flex mx-auto items-center container">

      <div className="p-4 lg:px-0 lg:py-8 w-full h-full flex flex-col">
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
    </div>
  );
};

export default Banner;
