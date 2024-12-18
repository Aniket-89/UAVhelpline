import { useState } from "react";
import Button from "../Button/Button";
import { Logo, phoneNumber } from "../../assets/assets";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCross } from "react-icons/im";
import {
  FaSquareFacebook,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { NavLink, NavLinkProps } from "react-router-dom";

const NAVIGATION_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/blogs", label: "Blogs" },
  { to: "/industry-directory", label: "Industry Directory" },
];

const SOCIAL_LINKS = [
  { Icon: FaSquareFacebook, href: "#" },
  { Icon: FaLinkedinIn, href: "#" },
  { Icon: FaInstagram, href: "#" },
  { Icon: FaYoutube, href: "#" },
  { Icon: FaXTwitter, href: "#" },
];

const getNavLinkClass: NavLinkProps["className"] = ({ isActive }) =>
  isActive ? "text-accent underline" : "";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const handleGetInTouch = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const LogoAndTitle = ({ isMobile }: { isMobile: boolean }) => (
    <a href="#" className="flex items-center">
      <img
        src={Logo}
        height={isMobile ? 60 : 92}
        width={isMobile ? 60 : 92}
        alt="uav helpline"
      />
      <span
        className={`${
          isMobile ? "text-2xl" : "text-4xl"
        } font-bold text-accent font-sans`}
      >
        UAV Helpline
      </span>
    </a>
  );

  const NavigationLinks = ({ isMobile = false }) => {
    const linkClasses = isMobile
      ? "block text-accent3 font-medium focus:text-accent2 alt-h"
      : "";

    return (
      <ul
        className={
          isMobile
            ? "flex flex-col space-y-2 p-4 font-serif alt-h"
            : "space-x-12"
        }
      >
        {NAVIGATION_LINKS.map(({ to, label }) => (
          <li key={to} className={isMobile ? "" : "inline"}>
            <NavLink
              to={to}
              className={isMobile ? linkClasses : getNavLinkClass}
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  };

  const SocialLinks = () => (
    <div className="flex gap-4 justify-center mb-2">
      {SOCIAL_LINKS.map(({ Icon, href }) => (
        <a key={href} href={href}>
          <Icon size={32} />
        </a>
      ))}
    </div>
  );

  return (
    <header className="z-10 sticky top-0 bg-primary border-b-[1px] border-b-primary">
      {/* Mobile Header */}
      <div className="lg:hidden flex justify-between items-start">
        <LogoAndTitle isMobile={true} />
        <div className="flex items-center h-[60px]">
          <button
            onClick={toggleMobileMenu}
            className={
              isMobileMenuOpen
                ? "text-gray-700 bg-accent3 h-full"
                : "text-gray-700 bg-transparent h-full"
            }
          >
            {isMobileMenuOpen ? (
              <ImCross size={24} />
            ) : (
              <RxHamburgerMenu size={24} />
            )}
          </button>
          <Button height={"60px"} styleType="solid" onClick={handleGetInTouch}>
            Get in touch
          </Button>
        </div>
      </div>

      {/* Mobile Menu (overlay) */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden absolute top-[92] z-10 left-0 w-full flex flex-col justify-between gap-8 bg-primary shadow-md">
          <NavigationLinks isMobile={true} />
          <SocialLinks />
        </nav>
      )}

      {/* Desktop Header */}
      <div className="container lg:flex hidden justify-between items-center h-[92px]">
        <LogoAndTitle isMobile={true} />
        <div className="flex items-center text-lg gap-12">
          <NavigationLinks />
          <Button styleType={"solid"} onClick={handleGetInTouch}>
            Get in touch
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
