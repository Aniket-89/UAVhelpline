import { useState } from "react";
import { companies } from "../assets/assets";
import Button from "../components/Button/Button";

const Industry = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(10);

  // Filter items based on the selected category
  const filteredCompanies =
    selectedCategory === "All"
      ? companies
      : companies.filter((company) => company.category === selectedCategory);

  // Get the companies to display based on the visible count
  const visibleCompanies = filteredCompanies.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  return (
    <div className="container space-y-8">
      <h2>Drone Companies in India</h2>

      {/* Category Buttons */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => setSelectedCategory("All")}
          className={` text-primary hover:bg-accent2 hover:text-primary ${
            selectedCategory === "All" ? "bg-accent" : "bg-accent3"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setSelectedCategory("Agri Drone Manufacturer")}
          className={`bg-accent text-accent3 hover:bg-accent2 hover:text-primary ${
            selectedCategory === "Agri Drone Manufacturer" ? "active" : ""
          }`}
        >
          Agri Drone Manufacturer
        </button>
        <button
          onClick={() => setSelectedCategory("Services Company")}
          className={`bg-accent text-accent3 hover:bg-accent2 hover:text-primary ${
            selectedCategory === "Services Company" ? "active" : ""
          }`}
        >
          Services Company
        </button>
        <button
          onClick={() => setSelectedCategory("Training Institutes")}
          className={`bg-accent text-accent3 hover:bg-accent2 hover:text-primary ${
            selectedCategory === "Training Institutes" ? "active" : ""
          }`}
        >
          Training Institutes
        </button>
        <button
          onClick={() => setSelectedCategory("Drone Insurance")}
          className={`bg-accent text-accent3 hover:bg-accent2 hover:text-primary ${
            selectedCategory === "Drone Insurance" ? "active" : ""
          }`}
        >
          Drone Insurance
        </button>
      </div>

      {/* Display Filtered Items */}
      <ul className="grid grid-cols-2 lg:grid-cols-4 bg-light p-4">
        {visibleCompanies.map((company) => (
          <li key={company.id} className="mx-auto p-4">
            <a
              href={company.landingPage}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="bg-primary border-gray hover:scale-105 transition-all duration-200 ease-in-out hover:shadow-lg border size-40">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="object-center object-contain h-full w-full"
                />
              </div>
            </a>
            <h6 className="text-center font-normal text-lg">{company.name}</h6>
          </li>
        ))}
      </ul>

      {/* Load More Button */}
      {visibleCount < filteredCompanies.length && (
        <div className="text-center">
          <Button
            onClick={loadMore}
            styleType="outline"
          >
            Load More
          </Button>
        </div>
      )}
    </div>
  );
};

export default Industry;
