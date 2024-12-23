import { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { companies } from "../assets/assets";
import Button from "../components/Button/Button";

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const Industry = () => {
  const query = useQuery();
  const initialCategory = query.get("category") || "All";
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [visibleCount, setVisibleCount] = useState(10);
  const [loading, setLoading] = useState(false);

  // Flatten the companies data into a single array with category information
  const allCompanies = useMemo(() => {
    return Object.entries(companies).flatMap(([category, companyList]) =>
      companyList.map((company) => ({ ...company, category }))
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
    return undefined;
  }, [loading]);

  const handleCategoryChange = (category: string) => {
    setLoading(true);
    setSelectedCategory(category);
  };

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <div className="bg-expresso h-[400px] w-full flex items-center mb-12">
        <h2 className="container text-primary underline">Industry Directory</h2>
      </div>
      <div className="container space-y-8 py-8">
        <h3 className="text-neutral mb-4">Drone Companies in India</h3>

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
              className={`py-1 px-2 text-primary text-wrap text-start hover:bg-accent2 hover:text-primary ${
                selectedCategory === category ? "bg-accent" : "bg-accent4"
              }`}
            >
              {category.replace(/-/g, " ")}
            </button>
          ))}
        </div>

        {/* Display Filtered Items */}
        {loading ? (
          <div className="flex justify-center items-center h-[400px] bg-light">
            <div className="loader">Loading...</div>
          </div>
        ) : (
          <ul className="flex flex-wrap bg-light2 p-4">
            {visibleCompanies.map((company) => (
              <li
                key={company.id}
                className="mx-auto p-4 md:max-w-48 max-w-36 "
              >
                <a
                  href={company.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-fit"
                >
                  <div className="mx-auto bg-primary border-gray hover:scale-105 transition-all duration-200 ease-in-out hover:shadow-lg border md:size-40 size-32 md:w-full">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="object-center object-contain h-full w-full"
                    />
                  </div>
                </a>
                <h6 className="text-center font-normal text-lg">
                  {company.name}
                </h6>
              </li>
            ))}
          </ul>
        )}

        {/* Load More Button */}
        {visibleCount < filteredCompanies.length && !loading && (
          <div className="text-center">
            <Button onClick={loadMore} styleType="outline">
              Load More
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Industry;
