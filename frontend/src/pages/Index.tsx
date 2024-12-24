import { IoIosArrowForward } from "react-icons/io";
import { Aviation, DaDrone } from "../assets/assets";
import LatestNewsSection from "../components/LatestNewsSection";

const NAV_LINKS = [
  { label: "Advisory Circulars", href: "#" },
  { label: "Forms", href: "#" },
  { label: "Policy & Guidance", href: "#" },
  { label: "Airworthiness Directives (AD)", href: "#" },
  { label: "Handbooks & Manuals", href: "#" },
  { label: "Recent Rulemaking Documents", href: "#" },
  { label: "FAA Regulations", href: "#" },
  { label: "Orders & Notices", href: "#" },
  { label: "Temporary Flight Restrictions (TFR)", href: "#" },
];

const PRIORITIES = [
  {
    label: "Safety",
    imgSrc: "https://www.faa.gov/sites/faa.gov/files/styles/faa_home_priorities_card/public/2023-02/priorities-safety.jpg?itok=sWUrU53H",
  },
  {
    label: "Safety",
    imgSrc: "https://www.faa.gov/sites/faa.gov/files/styles/faa_home_priorities_card/public/2023-02/priorities-safety.jpg?itok=sWUrU53H",
  },
  {
    label: "Safety",
    imgSrc: "https://www.faa.gov/sites/faa.gov/files/styles/faa_home_priorities_card/public/2023-02/priorities-safety.jpg?itok=sWUrU53H",
  },
];

const FAA_NUMBERS = [
  { label: "U.S. Airports", value: "19,633" },
  { label: "U.S. Airports", value: "19,633" },
  { label: "U.S. Airports", value: "19,633" },
  { label: "U.S. Airports", value: "19,633" },
  { label: "U.S. Airports", value: "19,633" },
  { label: "U.S. Airports", value: "19,633" },
];

const HOW_DO_I_LINKS = [
  { label: "Advisory Circulars", href: "#" },
  { label: "Advisory Circulars", href: "#" },
  { label: "Advisory Circulars", href: "#" },
  { label: "Advisory Circulars", href: "#" },
  { label: "Advisory Circulars", href: "#" },
  { label: "Advisory Circulars", href: "#" },
];

interface FeaturedTopicProps {
  imgSrc: string;
  title: string;
  description: string;
}

const FeaturedTopic = ({ imgSrc, title, description }: FeaturedTopicProps) => (
  <div className="flex border gap-4">
    <img src={imgSrc} alt="" className="h-full w-1/3 object-cover object-center aspect-square" />
    <div className="flex flex-col justify-center">
      <a href="#" className="">{title}</a>
      <p>{description}</p>
    </div>
  </div>
);

const Index = () => {
  return (
    <>
      <div className="flex w-full relative min-h-[258px] lg:min-h-[490px] xl:min-h-[550px]">
        <img
          src={Aviation}
          alt=""
          className="object-center object-cover z-[-1] w-full h-full absolute top-0 left-0"
        />
        <div className="container h-full my-20">
          <div className="bg-black bg-opacity-65 p-4 lg:w-1/2">
            <h1 className="lg:text-[3vw] text-3xl 2xl:text-5xl text-white font-Lato font-medium leading-snug">
              Providing the Safest, Most Efficient Aerospace System in the
              World.
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-lightBg pb-6">
        <LatestNewsSection />
      </div>

      <div className="bg-gray text-white py-16">
        <h3 className="container lg:text-3xl text-2xl mb-8">
          Regulations & Policies
        </h3>
        <ul className="container grid gap-4 lg:grid-cols-3 sm:grid-cols-2">
          {NAV_LINKS.map(({ label, href }) => (
            <a key={label} href={href} className="underline hover:no-underline flex gap-4 items-center text-white">
              <IoIosArrowForward /> {label}
            </a>
          ))}
        </ul>
      </div>

      <div className="bg-lightBg py-16 pb-28">
        <div className="container">
          <h3 className="lg:text-3xl sm:text-[3vw] text-2xl text-dark mb-4 font-Lato font-semibold">
            Our Priorities
          </h3>
          <div className="flex flex-col lg:flex-row justify-between gap-2 w-full lg:h-[385px] h-fit">
            {PRIORITIES.map(({ label, imgSrc }, index) => (
              <a
                key={index}
                href="#"
                className="relative text-white text-xl font-semibold min-w-[275px] max-w-screen-md max-h-[406px] flex-1 group overflow-hidden"
              >
                <img
                  src={imgSrc}
                  alt={label}
                  className="h-full w-full object-cover object-center group-hover:scale-110 transition-transform duration-300 ease-in-out"
                />
                <div className="absolute bottom-0 flex items-center left-0 py-8 px-6">
                  <h4>{label}</h4>
                  <IoIosArrowForward className="text-yellow" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative text-white bg-gray">
        <div className="relative flex flex-col container lg:flex-row h-full lg:gap-8">
          <div className="lg:w-2/3 lg:scale-y-110 -mx-4 lg:mx-auto bg-bodyBg pb-16 p-10">
            <img
              src="https://www.faa.gov/sites/faa.gov/files/styles/faa_by_the_numbers_back/public/2023-02/faa-global.png?itok=3XFlorgw"
              alt="FAA Global"
              className="hidden w-full object-cover object-center z-[-1]"
            />
            <h3 className="text-3xl mb-8">FAA By the Numbers</h3>
            <ul className="grid lg:grid-cols-3 sm:grid-cols-2 place-items-center lg:gap-24 gap-12">
              {FAA_NUMBERS.map(({ label, value }, index) => (
                <li key={index} className="space-y-2 text-center">
                  <p className="border-b p-2 w-fit font-Lato text-3xl lg:text-[3vw] font-light 3xl:text-5xl border-accentGold">
                    {value}
                  </p>
                  <p>{label}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="my-8 px-8 flex flex-col gap-4 justify-between">
            <h3 className="text-3xl font-semibold">How Do I...?</h3>
            <ul className="flex flex-col gap-4 pl-2">
              {HOW_DO_I_LINKS.map(({ label, href }, index) => (
                <a key={index} href={href} className="underline hover:no-underline flex gap-4 items-center text-white">
                  <IoIosArrowForward /> {label}
                </a>
              ))}
            </ul>
            <button className="bg-transparent w-fit font-semibold px-12 py-2 hover:bg-primary text-white border border-white flex items-center justify-center">
              FAA FOR YOU <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="container py-24">
          <h3 className="text-3xl text-neutral2 font-Lato font-semibold mb-4">
            Featured Topics
          </h3>
          <div className="flex md:flex-row flex-col gap-8 w-full">
            <div className="md:w-1/2">
              <img
                src={DaDrone}
                alt="Featured Topic"
                className="object-center object-cover w-full aspect-[3/2]"
              />
              <p className="flex items-center justify-center py-4 border border-gray">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eligendi, tenetur.
              </p>
            </div>

            <div className="flex flex-col md:w-1/2 gap-8">
              <FeaturedTopic
                imgSrc={DaDrone}
                title="HAZMAT - DANGEROUS GOODS SAFETY"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
              <FeaturedTopic
                imgSrc={DaDrone}
                title="HAZMAT - DANGEROUS GOODS SAFETY"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;