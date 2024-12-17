import Banner from "../Banner/Banner";
import IconCard from "../IconCard/IconCard";
import DroneCard from "../DroneCard/DroneCard";
import BlogCard from "../BlogCard/BlogCard";
import Button from "../Button/Button";
import { Logo, PillarSpiral } from "../../assets/assets";
import IndustryCard from "../IndustryCard/IndustryCard";
import NewsletterForm from "../NewsletterForm/NewsletterForm";

const Index = () => {
  return (
    <div className="flex flex-col justify-between gap-8 overflow-hidden">
      <Banner />

      <div className="bg-light container min-h-[293px] py-4 text-center mb-8 flex flex-col gap-4 justify-center">
        <h4>We can help you with...</h4>
        <div className="flex flex-wrap gap-2 justify-evenly px-4 mb-4">
          <IconCard src={Logo}>Drone Insurance</IconCard>
          <IconCard src={Logo}>Drone Loan</IconCard>
          <IconCard src={Logo}>Buy Drones</IconCard>
          <IconCard src={Logo}>Buy Drone parts</IconCard>
          <IconCard src={Logo}>Drone Training</IconCard>
          <IconCard src={Logo}>Pilot Jobs</IconCard>
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
            src="src/assets/drone-with-bag-m.png"
            label="Drone Anatomy P10pro"
            logoSrc="src/assets/da-logo-blk-outline.png"
          >
            Most compact agriculture drone in the market
          </DroneCard>
          <DroneCard
            src="src/assets/drone-with-bag-m.png"
            label="Drone Anatomy P10pro"
            logoSrc="src/assets/da-logo-blk-outline.png"
          >
            Most compact agriculture drone in the market
          </DroneCard>
          <DroneCard
            src="src/assets/drone-with-bag-m.png"
            label="Drone Anatomy P10pro"
            logoSrc="src/assets/da-logo-blk-outline.png"
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
          <BlogCard thumbnail="src/assets/drone-with-bag-m.png">
            India's most compact agriculture drone
          </BlogCard>
          <BlogCard thumbnail="src/assets/drone-with-bag-m.png">
            India's most compact agriculture drone
          </BlogCard>
          <BlogCard thumbnail="src/assets/drone-with-bag-m.png">
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
          <IndustryCard label="Agriculture"></IndustryCard>
          <IndustryCard label="Agriculture" sicj={true}></IndustryCard>
          <IndustryCard label="Agriculture"></IndustryCard>
          <IndustryCard label="Agriculture" sicj={true}></IndustryCard>
          <IndustryCard label="Agriculture"></IndustryCard>
          <IndustryCard label="Agriculture" sicj={true}></IndustryCard>
        </div>
      </div>

      <div className="container lg:w-[60%] mx-auto mb-10 flex gap-2">
        <span className="w-4 mt-6 bg-accent"></span>
        <div className="flex flex-col">

        <h3 className="text-neutral font-bold">Stay informed. Sign up for our mailing list.</h3>
        <NewsletterForm />
        </div>
      </div>

      <Banner></Banner>
    </div>
  );
};

export default Index;
