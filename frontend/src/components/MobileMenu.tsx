import React from "react";
import SearchForm from "./SearchForm";

type MobileMenuProps = {
  className?: string;
};

const NAV_LINKS = [
  { label: "About", href: "#" },
  { label: "Jobs", href: "#" },
  { label: "News", href: "#" },
  { label: "Aircraft", href: "#" },
  { label: "Air Traffic", href: "#" },
  { label: "Airports", href: "#" },
  { label: "Pilots & Airmen", href: "#" },
  { label: "Data & Research", href: "#" },
  { label: "Regulations", href: "#" },
  { label: "Space", href: "#" },
  { label: "Drones", href: "#" },
];

const MobileMenu: React.FC<MobileMenuProps> = ({ className = "" }) => {
  return (
    <div
      className={`${className} overflow-hidden absolute z-10 bg-neutral2 xl:hidden transition-all duration-300 ease-in-out text-white flex flex-col gap-4 w-full items-center`}
    >
      <div className="w-full p-2 pt-5 flex justify-center">
        <SearchForm />
      </div>

      <ul className="flex border-t p-4 flex-col gap-6 font-semibold w-full">
        {NAV_LINKS.map(({ label, href }) => (
          <li key={label}>
            <a href={href} className="text-white">{label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;