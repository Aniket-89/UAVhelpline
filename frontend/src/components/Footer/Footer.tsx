import { Link } from "react-router-dom";
import Button from "../Button/Button";
import NewsletterSection from "../NewsletterSection/NewsletterSection";
import { IoCallSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { LuMapPin } from "react-icons/lu";
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
  const handleGetInTouch = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const LogoSection = () => (
    <div className="flex flex-col gap-2">
      <Link to="/" className="flex items-center ml-2">
        <img src={Logo} height={100} width={100} alt="uav helpline" />
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
    <div className="grid gap-2 md:w-fit w-full">
      <address className="flex flex-col gap-1 font-medium">
        <a href={`tel:${phoneNumber}`} className="flex gap-2 items-center">
          <IoCallSharp color="green" />
          {phoneNumber}
        </a>
        <a href={`mailto:${mail}`} className="flex gap-2 items-center">
          <IoIosMail color="brown" />
          contact@uavhelpline.com
        </a>
        <div className="my-2">
          <span className="flex gap-2">
            <LuMapPin color="red" /> 7272 Greenville Ave
          </span>
          <span>New Delhi, ND 123456</span>
        </div>
      </address>
      <Button styleType="outline" onClick={handleGetInTouch}>
        Get in touch
      </Button>
    </div>
  );

  const NavigationLinks = () => (
    <ul className="grid grid-cols-2 gap-1 lg:grid-cols-1 ml-4">
      {NAVIGATION_LINKS.map(({ href, label }) => (
        <li key={href}>
          <Link to={href} className="md:text-lg text-xl font-medium">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );

  const SocialLinks = () => (
    <div className="flex gap-4 justify-center">
      {SOCIAL_LINKS.map(({ Icon, href }) => (
        <a
          key={href}
          href={href}
          className="bg-accent bg-opacity-85 rounded-full p-[6px]"
        >
          <Icon
            size={30}
            className="hover:-translate-y-3 text-primary hover:text-accent3 transition-all duration-200 ease-in"
          />
        </a>
      ))}
    </div>
  );

  const LegalLinks = () => (
    <ul className="flex justify-center gap-2 my-4">
      {LEGAL_LINKS.map(({ href, label }) => (
        <li key={href}>
          <a
            className="text-xs underline hover:text-accent2 text-gray-600"
            href={href}
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="flex flex-col gap-10 md:py-16 py-6 justify-between bg-light">
      <div className="container grid lg:grid-cols-3 gap-10 items-start lg:place-items-center">
        <div className="space-y-8">
          <LogoSection />
        </div>
        <ContactSection />

        <NavigationLinks />
      </div>
      <div className="flex flex-col items-center gap-4 justify-between">
        <div className=" border-y border-primary w-full">
          <div className="container md:py-8 items-center flex flex-col gap-12 md:flex-row justify-between w-full">
            <SocialLinks />
            <NewsletterSection />
          </div>
        </div>
        <div>
          <LegalLinks />
          <p className="text-xs text-center">
            UAV helpline is a not-for-profit organization. &copy;2024 UAV
            Helpline. All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
