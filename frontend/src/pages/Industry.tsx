import { useState, useMemo, useEffect, SetStateAction } from "react";
import { companies } from "../assets/assets";
import Button from "../components/Button/Button";

const Industry = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(10);
  const [loading, setLoading] = useState(false);

  // Flatten the companies data into a single array with category information
  const allCompanies = useMemo(() => {
    return Object.entries(companies).flatMap(([category, companyList]) =>
      companyList.map(company => ({ ...company, category }))
    );
  }, []);

  // Filter items based on the selected category
  const filteredCompanies = useMemo(() => {
    return selectedCategory === "All"
      ? allCompanies
      : allCompanies.filter((company) => company.category === selectedCategory);
  }, [selectedCategory, allCompanies]);

  // Get the companies to display based on the visible count
  const visibleCompanies = useMemo(() => {
    return filteredCompanies.slice(0, visibleCount);
  }, [filteredCompanies, visibleCount]);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 500); // Simulate loading delay
      return () => clearTimeout(timer);
    }
    return () => {};
  }, [loading]);

  const handleCategoryChange = (category: SetStateAction<string>) => {
    setLoading(true);
    setSelectedCategory(category);
  };

  return (
    <div className="container space-y-8">
      <h2>Drone Companies in India</h2>

      {/* Category Buttons */}
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={() => handleCategoryChange("All")}
          className={`text-primary hover:bg-accent2 hover:text-primary ${
            selectedCategory === "All" ? "bg-accent" : "bg-accent4"
          }`}
        >
          All
        </button>
        {Object.keys(companies).map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`text-primary hover:bg-accent2 hover:text-primary ${
              selectedCategory === category ? "bg-accent" : "bg-accent4"
            }`}
          >
            {category.replace(/-/g, ' ')}
          </button>
        ))}
      </div>

      {/* Display Filtered Items */}
      {loading ? (
        <div className="flex justify-center items-center h-[400px] bg-light">
          <div className="loader">Loading...</div>
        </div>
      ) : (
        <ul className="flex flex-wrap bg-orange-100 p-4">
          {visibleCompanies.map((company) => (
            <li key={company.id} className="mx-auto p-4 ">
              <a
                href={company.website}
                target="_blank"
                rel="noopener noreferrer"
                className="w-fit"
              >
                <div className="mx-auto bg-primary border-gray hover:scale-105 transition-all duration-200 ease-in-out hover:shadow-lg border size-40 w-full">
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
      )}

      {/* Load More Button */}
      {visibleCount < filteredCompanies.length && !loading && (
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