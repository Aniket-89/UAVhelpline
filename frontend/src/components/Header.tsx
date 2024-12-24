import { Logo } from "../assets/assets";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import SearchForm from "./SearchForm";

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

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleToggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="bg-white w-full flex justify-between border-b border-white">
        <nav className="flex justify-between items-center w-full container mt-2 px-4">
          {/* Logo */}
          <div className="overflow-hidden flex gap-1 min-w-[255px] items-center mb-4">
            <img
              src={Logo}
              alt="UAV Helpline Logo"
              className="h-[75px] object-cover object-center"
            />
            <h2 className="text-2xl font-semibold text-primary">UAV Helpline</h2>
          </div>

          <div className="hidden xl:flex flex-col justify-end">
            <div className="flex items-center justify-end text-navLink max-w-1/2 gap-10 my-2 font-semibold pr-4">
              {NAV_LINKS.slice(0, 3).map(({ label, href }) => (
                <a key={label} href={href} className="hover:text-bodyBg">
                  {label}
                </a>
              ))}
              <div className="w-2/5">
                <SearchForm />
              </div>
            </div>
            <div className="my-4 flex items-center justify-end gap-8 font-semibold">
              {NAV_LINKS.slice(3).map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="border-t-2 pt-2 border-white text-gray hover:border-accentGold"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          <button onClick={handleToggleMobileMenu} className="xl:hidden mb-2">
            {isMobileMenuOpen ? (
              <ImCross className="size-[30px]" />
            ) : (
              <RxHamburgerMenu className="size-[30px]" />
            )}
          </button>
        </nav>
      </header>

      <div className="relative">
        <MobileMenu
          className={`${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          } overflow-hidden transition-all duration-300`}
        />
      </div>
    </>
  );
};

export default Header;