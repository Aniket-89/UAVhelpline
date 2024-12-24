import React from "react";
import { DaDrone } from "../assets/assets";
import { IoIosArrowForward } from "react-icons/io";

const newsItems = [
  {
    date: "December 17, 2024",
    title: "DHS, FBI, FAA & DoD Joint Statement on Ongoing Response to Reported Drone Sightings",
    description: "There are more than one million drones lawfully registered with the FAA in the United States and there are thousands of commercial, hobbyist and law enforcement drones lawfully in the sky on any given day. With the technology landscape evolving, we expect that number to increase over time....",
    image: DaDrone,
  },
  {
    date: "December 17, 2024",
    title: "DHS, FBI, FAA & DoD Joint Statement on Ongoing Response to Reported Drone Sightings",
  },
  {
    date: "December 17, 2024",
    title: "DHS, FBI, FAA & DoD Joint Statement on Ongoing Response to Reported Drone Sightings",
  },
  {
    date: "December 17, 2024",
    title: "DHS, FBI, FAA & DoD Joint Statement on Ongoing Response to Reported Drone Sightings",
  },
  {
    date: "December 17, 2024",
    title: "DHS, FBI, FAA & DoD Joint Statement on Ongoing Response to Reported Drone Sightings",
  },
];

interface NewsItemProps {
  date: string;
  title: string;
  description?: string;
  image?: string;
}

const NewsItem: React.FC<NewsItemProps> = ({ date, title, description, image }) => (
  <div className="grid gap-1 flex-1">
    {image && (
      <img
        src={image}
        alt=""
        className="aspect-[5/4] mb-2 object-cover object-center h-[280px]"
      />
    )}
    <p>{date}</p>
    <a href="#" className="font-semibold text-[17px] hover:underline">
      {title}
    </a>
    {description && <p>{description}</p>}
  </div>
);

const LatestNewsSection = () => {
  return (
    <div className="bg-white container text-black flex flex-col max-w-full lg:w-fit gap-4 p-10 2xl:-translate-y-[15%]">
      <h3 className="container md:text-[3vw] text-2xl font-medium mb-4">
        Latest News
      </h3>
      <div className="container flex-col flex lg:flex-row gap-8 text-justify">
        <NewsItem {...newsItems[0]} />
        <div className="flex-1 flex flex-col gap-4 justify-between">
          {newsItems.slice(1).map((item, index) => (
            <React.Fragment key={index}>
              <div>
                <p>{item.date}</p>
                <a href="#" className="font-semibold text-[17px] hover:underline">
                  {item.title}
                </a>
              </div>
              {index < newsItems.length - 2 && (
                <span className="w-7 h-[2px] bg-accentGold"></span>
              )}
            </React.Fragment>
          ))}
          <a
            href="#"
            className="font-semibold text-[17px] hover:underline flex items-center justify-end my-4"
          >
            Visit the Newsroom <IoIosArrowForward className="text-primary" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LatestNewsSection;