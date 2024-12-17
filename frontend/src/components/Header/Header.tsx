import { useState } from "react";
import Button from "../Button/Button";
import { FaHamburger, FaCross } from "react-icons/fa";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  return (
    <header className="z-10 sticky top-0 bg-primary">
      {/* Mobile Header */}
      <div className="lg:hidden flex justify-between items-start">
        <a href="#" className="flex items-center ml-2">
          <img
            src="src/assets/logo.png"
            height={60}
            width={60}
            alt="uav helpline"
          />
          <span className="text-2xl font-bold text-accent font-sans">
            UAV Helpline
          </span>
        </a>
        <div className="flex items-center">
          <button
            onClick={toggleMobileMenu}
            className={ isMobileMenuOpen ? ("text-gray-700 bg-accent3") : ("text-gray-700 bg-transparent")} 
          >
            {isMobileMenuOpen ? (
              <FaCross size={24} />
            ) : (
              <FaHamburger size={24} />
            )}
          </button>
          <Button height={"60px"} styleType="solid" onClick={() => console.log("hello") }>Get in touch</Button>
        </div>
      </div>

      {/* Mobile Menu (overlay) */}
      {isMobileMenuOpen && (
        <nav className="lg:hidden absolute top-[92] left-0 w-full bg-accent3 shadow-md">
          <ul className="flex flex-col space-y-2 p-4 font-serif alt-h">
            <li>
              <a href="/" className="block text-primary  hover:text-gray-900">
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-primary hover:text-gray-900"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-primary hover:text-gray-900"
              >
                Blogs
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block text-primary hover:text-gray-900"
              >
                Industry Directory
              </a>
            </li>
          </ul>
        </nav>
      )}

      {/* Desktop Header */}
      <div className="container lg:flex hidden justify-between items-center h-[92px]">
        <a href="#" className="flex items-center">
          <img
            src="src/assets/logo.png"
            height={92}
            width={92}
            alt="uav helpline"
          />{" "}
          <span className="text-4xl font-bold text-accent font-sans">
            UAV Helpline
          </span>
        </a>
        <div className="flex items-center text-lg gap-12">
          <div className="space-x-12">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Blogs</a>
            <a href="#">Industry Directory</a>
          </div>
          <Button styleType={"solid"} onClick={()=> console.log("hello")}>Get in touch</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
