import Banner from "../components/Banner/Banner";
import IconCard from "../components/IconCard/IconCard";
// import DroneCard from "../components/DroneCard/DroneCard";
import BlogCard from "../components/BlogCard/BlogCard";
import Button from "../components/Button/Button";
import IndustryCard from "../components/IndustryCard/IndustryCard";
import NewsletterForm from "../components/NewsletterForm/NewsletterForm";
import {
  PillarSpiral,
  DaDrone,
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
} from "../assets/assets";

const HELP_SERVICES = [
  { icon: ShieldIcon, label: "Drone Insurance" },
  { icon: MoneyBagIcon, label: "Drone Loan" },
  { icon: DroneIcon, label: "Buy Drones" },
  { icon: PropellerIcon, label: "Buy Drone parts" },
  { icon: TrainingIcon, label: "Drone Training" },
  { icon: PilotIcon, label: "Pilot Jobs" },
];

// const DRONE_CARDS = Array(3).fill({
//   src: DaDrone,
//   label: "Drone Anatomy P10pro",
//   logoSrc: DaLogo,
//   description: "Most compact agriculture drone in the market"
// });

const BLOG_CARDS = Array(10).fill({
  thumbnail: DaDrone,
  description: "India's most compact agriculture drone"
});

const INDUSTRY_CARDS = [
  { label: "Agriculture", src: AgriImage },
  { label: "Mapping", src: MappingImage, mar: true },
  { label: "Training", src: TrainingImage },
  { label: "VTOL", src: VtolImage, mar: true },
  { label: "Surveillance", src: SurveillanceImage },
  { label: "Videography", src: VideoImage, mar: true },
];

const Index = () => {
  const HelpServicesSection = () => (
    <div className="bg-gray rounded-sm container min-h-[293px] py-8 text-center my-16 flex flex-col gap-4 justify-center">
      <h4 className="text-primary leading-snug">What we can help you with</h4>
      <div className="flex flex-wrap gap-2 justify-evenly px-4 mb-4">
        {HELP_SERVICES.map(({ icon, label }) => (
          <IconCard key={label} src={icon}>
            {label}
          </IconCard>
        ))}
      </div>
    </div>
  );

//   const DroneCardsSection = () => (
//     <div className="container p-2 flex flex-col gap-8 md:p-0 mb-8">
//       <div>
//         <h4 className="leading-tight">Buy Type Certified Drones</h4>
//         <p className="text-sm">
//           View, Compare & Buy Drones from Indian manufacturers
//         </p>
//       </div>
//       <div className="flex flex-col m-4 md:flex-row justify-evenly gap-4 items-center">
//         {DRONE_CARDS.map((card, index) => (
//           <DroneCard 
//             key={index}
//             src={card.src}
//             label={card.label}
//             logoSrc={card.logoSrc}
//           >
//             {card.description}
//           </DroneCard>
//         ))}
//       </div>
//     </div>
//   );

  const BlogSection = () => (
    <div className="container relative flex flex-col items-center gap-8 md:gap-8 mb-32">
      <span className="bg-light absolute md:top-14 top-6 w-lvw h-full z-[-1]"></span>
      <h3 className="mb-0 leading-none md:text-8xl text-neutral">
        Latest News & Stories
      </h3>
      <span className="h-2 w-full md:w-12 bg-accent mb-4" data-aos="fade-right"></span>
      <div className="flex flex-col overflow-x-auto scrollbar-hide w-full md:flex-row gap-4">
        {BLOG_CARDS.map((card, index) => (
          <BlogCard key={index} thumbnail={card.thumbnail}>
            {card.description}
          </BlogCard>
        ))}
      </div>
      <Button styleType="outline" onClick={() => console.log("")}>
        SEE ALL STORIES
      </Button>
    </div>
  );

  const IndustrySection = () => (
    <div className="relative lg:mb-40 mb-10 py-4">
      <span className="absolute bg-accent z-[-1] top-0 right-0 h-full w-full">
        <img
          src={PillarSpiral}
          alt=""
          className="h-full w-full object-cover"
        />
      </span>
      <div className="z-10 flex w-full container">
        <span className="bg-primary w-6 mt-8 mb-10 mr-4" data-aos="fade-down"></span>
        <h2 className="text-primary" data-aos="fade-in">
          Explore the leaders of India's drone industry
        </h2>
      </div>
      <div className="grid lg:grid-cols-6 md:grid-cols-2 gap-4 container justify-between">
        {INDUSTRY_CARDS.map(({ label, src, mar }) => (
          <IndustryCard 
            key={label} 
            label={label} 
            src={src} 
            mar={mar} 
          />
        ))}
      </div>
    </div>
  );

  const NewsletterSection = () => (
    <div className="container mx-auto mb-16 flex gap-2">
      <span className="w-4 mt-6 bg-accent" data-aos="fade-down" data-aos-duration="500"></span>
      <div className="flex flex-col">
        <h3 className="text-neutral font-bold" data-aos="fade-in">
          Stay informed. Sign up for our mailing list.
        </h3>
        <NewsletterForm />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col justify-between xl:gap-28 lg:gap-24 gap-16 md:gap-20 overflow-hidden">
      <Banner />
      <BlogSection />
      <IndustrySection />
      <HelpServicesSection />
      <NewsletterSection />
    </div>
  );
};

export default Index;