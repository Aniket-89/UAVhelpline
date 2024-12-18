import { Link } from 'react-router-dom';
import Button from "../Button/Button";
import Input from "../../components/Input/Input";
import { Logo, phoneNumber, mail } from "../../assets/assets";
import {
  FaSquareFacebook,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const NAVIGATION_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blogs", label: "Blogs" },
  { href: "/industry-directory", label: "Industry Directory" },
  { href: "/contact", label: "Contact Us" },
];

const SOCIAL_LINKS = [
  { Icon: FaSquareFacebook, href: "#" },
  { Icon: FaLinkedinIn, href: "#" },
  { Icon: FaInstagram, href: "#" },
  { Icon: FaYoutube, href: "#" },
  { Icon: FaXTwitter, href: "#" },
];

const LEGAL_LINKS = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Use" },
  { href: "#", label: "Sitemap" },
];

const Footer = () => {
  const accent = "#1D1C30";

  const handleGetInTouch = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const LogoSection = () => (
    <div className="flex flex-col gap-2">
      <Link to="/" className="flex items-center ml-2">
        <img
          src={Logo}
          height={100}
          width={100}
          alt="uav helpline"
        />
        <span className="text-5xl font-bold text-accent font-sans">
          UAV Helpline
        </span>
      </Link>
      <p>
        UAV helpline is a not-for-profit initiative run by volunteers across
        INDIA.
      </p>
    </div>
  );

  const ContactSection = () => (
    <div className="grid gap-2">
      <address className="flex flex-col">
        <a href={`tel:${phoneNumber}`} >+91 9507207645</a>
        <a href={`mailto:${mail}`}>contact@uavhelpline.com</a>
      </address>
      <Button
        styleType="outline"
        onClick={handleGetInTouch}
      >
        Get in touch
      </Button>
    </div>
  );

  const NavigationLinks = () => (
    <ul className="self-center grid grid-cols-2 lg:grid-cols-1">
      {NAVIGATION_LINKS.map(({ href, label }) => (
        <li key={href}>
          <Link to={href} className="text-lg">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );

  const SocialLinks = () => (
    <div className="flex gap-4 mb-2">
      {SOCIAL_LINKS.map(({ Icon, href }) => (
        <a key={href} href={href}>
          <Icon color={accent} size={32} className='hover:-translate-y-2 transition-transform duration-200 ease-in'/>
        </a>
      ))}
    </div>
  );

  const NewsletterSection = () => (
    <div>
      <Input label="Enter your email..." />
      <Button 
        styleType="solid" 
        onClick={() => console.log("subscribed")}
      >
        Subscribe
      </Button>
    </div>
  );

  const LegalLinks = () => (
    <ul className="flex gap-2">
      {LEGAL_LINKS.map(({ href, label }) => (
        <li key={href}>
          
           <a  className="text-xs underline hover:text-accent2 text-gray-600"
            href={href}
           >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="container flex flex-col gap-4 py-4 justify-between">
      <div className="grid lg:grid-cols-3 gap-4 items-center lg:place-items-center">
        <LogoSection />
        <ContactSection />
        <NavigationLinks />
      </div>

      <div className="flex flex-col-reverse items-center lg:flex-row gap-4 justify-between">
        <div>
          <p className="text-xs">
            UAV helpline is a not-for-profit organization. c2024 UAV Helpline.
            All rights reserved
          </p>
          <LegalLinks />
        </div>
        <SocialLinks />
        <NewsletterSection />
      </div>
    </div>
  );
};

export default Footer;