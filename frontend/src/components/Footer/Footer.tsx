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

const Footer = () => {
  const accent = "#1D1C30";
  return (
    <div className="container flex flex-col gap-4 py-4 justify-between">
      <div className="grid lg:grid-cols-3 gap-4 items-center lg:place-items-center">
        <div className="flex flex-col gap-2">
          <a href="#" className="flex items-center ml-2">
            <img
              src={Logo}
              height={120}
              width={120}
              alt="uav helpline"
            />
            <span className="text-5xl font-bold text-accent font-sans">
              UAV Helpline
            </span>
          </a>

          <p>
            UAV helpline is a not-for-profit initiative run by volunteers across
            INDIA.
          </p>
        </div>

        <div className="grid gap-2">
          <address className="flex flex-col">
            <a href={`tel:${phoneNumber}`} className="hover:text-accent">+91 9507207645</a>
            <a href={`mailto:${mail}`}>contact@uavhelpline.com</a>
          </address>
          <Button
            styleType="solid"
            onClick={() => (window.location.href = `tel:${phoneNumber}`)}
          >
            Get in touch
          </Button>
        </div>

        <ul className="self-center grid grid-cols-2 lg:grid-cols-1 ">
          <li>
            <a href="#" className="text-lg">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-lg">
              About
            </a>
          </li>
          <li>
            <a href="#" className="text-lg">
              Blogs
            </a>
          </li>
          <li>
            <a href="#" className="text-lg">
              Industry Directory
            </a>
          </li>
          <li>
            <a href="#" className="text-lg">
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col-reverse items-center lg:flex-row gap-4 justify-between">
        <div className="">
          <p className="text-xs">
            UAV helpline is a not-for-profit organization. c2024 UAV Helpline.
            All rights reserved
          </p>
          <ul className="flex gap-2 ">
            <li>
              <a
                className="text-xs underline hover:text-accent2 text-gray-600"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className="text-xs underline hover:text-accent2 text-gray-600"
                href="#"
              >
                Terms of Use
              </a>
            </li>
            <li>
              <a
                className="text-xs underline hover:text-accent2 text-gray-600"
                href="#"
              >
                Sitemap
              </a>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 mb-2">
          <a href="#">
            <FaSquareFacebook color={accent} size={32}></FaSquareFacebook>
          </a>
          <a href="#">
            <FaLinkedinIn color={accent} size={32}></FaLinkedinIn>
          </a>
          <a href="#">
            <FaInstagram color={accent} size={32}></FaInstagram>
          </a>
          <a href="#">
            <FaYoutube color={accent} size={32}></FaYoutube>
          </a>
          <a href="#">
            <FaXTwitter color={accent} size={32}></FaXTwitter>
          </a>
        </div>

        <div className="">
          <Input label="Enter your email..." />{" "}
          <Button styleType="solid" onClick={() => console.log("subscribed")}>
            Subscribe
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
