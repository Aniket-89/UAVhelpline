import Banner from "../Banner/Banner";
import IconCard from "../IconCard/IconCard";
import DroneCard from "../DroneCard/DroneCard";
import BlogCard from "../BlogCard/BlogCard";
import Button from "../Button/Button";
import {
  PillarSpiral,
  DaDrone,
  DaLogo,
  AgriImage,
  VideoImage,
  VtolImage,
  MappingImage,
  TrainingImage,
  SurveillanceImage,
  ShieldIcon,
  MoneyBagIcon,
  DroneIcon,
  PropellerIcon,
  TrainingIcon,
  PilotIcon,
} from "../../assets/assets";
import IndustryCard from "../IndustryCard/IndustryCard";
import NewsletterForm from "../NewsletterForm/NewsletterForm";

const Index = () => {
  return (
    <div className="flex flex-col justify-between gap-8 overflow-hidden">
      <Banner />

      <div className="bg-gradient-to-r from-light to-accent to container min-h-[293px] py-4 text-center mb-8 flex flex-col gap-4 justify-center">
        <h4>We can help you with...</h4>
        <div className="flex flex-wrap gap-2 justify-evenly px-4 mb-4">
          <IconCard src={ShieldIcon}>Drone Insurance</IconCard>
          <IconCard src={MoneyBagIcon}>Drone Loan</IconCard>
          <IconCard src={DroneIcon}>Buy Drones</IconCard>
          <IconCard src={PropellerIcon}>Buy Drone parts</IconCard>
          <IconCard src={TrainingIcon}>Drone Training</IconCard>
          <IconCard src={PilotIcon}>Pilot Jobs</IconCard>
        </div>
      </div>

      <div className="container p-2 flex flex-col gap-8 md:p-0 mb-8">
        <div className="">
          <h4 className="leading-tight">Buy Type Certified Drones</h4>
          <p className="text-sm">
            View, Compare & Buy Drones from Indian manufacturers
          </p>
        </div>
        <div className="flex flex-col m-4 md:flex-row justify-evenly gap-4 items-center">
          <DroneCard
            src={DaDrone}
            label="Drone Anatomy P10pro"
            logoSrc={DaLogo}
          >
            Most compact agriculture drone in the market
          </DroneCard>
          <DroneCard
            src={DaDrone}
            label="Drone Anatomy P10pro"
            logoSrc={DaLogo}
          >
            Most compact agriculture drone in the market
          </DroneCard>
          <DroneCard
            src={DaDrone}
            label="Drone Anatomy P10pro"
            logoSrc={DaLogo}
          >
            Most compact agriculture drone in the market
          </DroneCard>
        </div>
      </div>

      <div className="container relative flex flex-col items-center gap-8 md:gap-8 mb-32">
        <span className="bg-light absolute md:top-14 top-6 lg:left-[10%] left-[0%] w-lvw h-full z-[-1]"></span>
        <h3 className="mb-0  leading-none md:text-8xl text-neutral">
          Latest News & Stories
        </h3>
        <span className="h-2 w-full md:w-12 bg-accent mb-4"></span>
        <div className="flex flex-col md:flex-row gap-4">
          <BlogCard thumbnail={DaDrone}>
            India's most compact agriculture drone
          </BlogCard>
          <BlogCard thumbnail={DaDrone}>
            India's most compact agriculture drone
          </BlogCard>
          <BlogCard thumbnail={DaDrone}>
            India's most compact agriculture drone
          </BlogCard>
        </div>

        <Button styleType="outline" onClick={() => console.log("")}>
          SEE ALL STORIES
        </Button>
      </div>

      <div className="relative lg:mb-40 mb-10 py-4">
        <span className="absolute bg-accent z-[-1] top-0 right-0 h-full w-full">
          <img
            src={PillarSpiral}
            alt=""
            className="h-full w-full object-cover"
          />
        </span>
        <div className="z-10 flex w-full container ">
          <span className="bg-primary w-6 mt-8 mb-10 mr-4"></span>
          <h2 className="text-primary ">
            Explore the leaders of India's drone industry
          </h2>
        </div>
        <div className="grid lg:grid-cols-6 md:grid-cols-2 gap-4 container justify-between">
          <IndustryCard label="Agriculture" src={AgriImage} />
          <IndustryCard label="Mapping" src={MappingImage} mar={true} />
          <IndustryCard label="Training" src={TrainingImage} />
          <IndustryCard label="VTOL" mar={true} src={VtolImage} />
          <IndustryCard label="Surveillance" src={SurveillanceImage} />
          <IndustryCard label="Videography" mar={true} src={VideoImage} />
        </div>
      </div>

      <div className="container lg:w-[60%] mx-auto mb-10 flex gap-2">
        <span className="w-4 mt-6 bg-accent"></span>
        <div className="flex flex-col">
          <h3 className="text-neutral font-bold">
            Stay informed. Sign up for our mailing list.
          </h3>
          <NewsletterForm />
        </div>
      </div>
    </div>
  );
};

export default Index;
