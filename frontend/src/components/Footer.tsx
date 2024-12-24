import React from "react";
import { IoIosMail } from "react-icons/io";
import {
  FaSquareFacebook,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const SOCIAL_LINKS = [
  { Icon: FaSquareFacebook, href: "https://www.instagram.com/uavhelpline/profilecard/?igsh=MXFpeXNjZmVzMjRrcA==" },
  { Icon: FaLinkedinIn, href: "/comingSoon"},
  { Icon: FaInstagram, href: "https://www.instagram.com/uavhelpline/profilecard/?igsh=MXFpeXNjZmVzMjRrcA==" },
  { Icon: FaYoutube, href: "/comingSoon"},
  { Icon: FaXTwitter, href: "/comingSoon"},
  { Icon: IoIosMail, href: "https://www.instagram.com/uavhelpline/profilecard/?igsh=MXFpeXNjZmVzMjRrcA==" },
];

const POLICIES_LINKS = [
  { label: "About DOT", href: "/comingSoon"},
  { label: "Budget and Performance", href: "/comingSoon"},
  { label: "Civil Rights", href: "/comingSoon"},
  { label: "Information Quality", href: "/comingSoon"},
  { label: "No FEAR Act", href: "/comingSoon"},
  { label: "Office of Inspector General", href: "/comingSoon"},
  { label: "Privacy Policy", href: "/comingSoon"},
  { label: "Web Policies and Notices", href: "/comingSoon"},
];

const LINKS = [
  {
    title: "Get Important Info/Data",
    links: [
      { label: "Accident & Incident Data", href: "/comingSoon"},
      { label: "Airport Data & Information Portal (ADIP)", href: "/comingSoon"},
      { label: "Charting & Data", href: "/comingSoon"},
      { label: "Flight Delay Information", href: "/comingSoon"},
      { label: "Supplemental Type Certificates", href: "/comingSoon"},
      { label: "Type Certificate Data Sheets (TCDS)", href: "/comingSoon"},
    ],
  },
  {
    title: "Review Documents",
    links: [
      { label: "Aircraft Handbooks & Manuals", href: "/comingSoon"},
      { label: "Airport Diagrams", href: "/comingSoon"},
      { label: "Aviation Handbooks & Manuals", href: "/comingSoon"},
      { label: "Examiner & Inspector", href: "/comingSoon"},
      { label: "Performance Reports & Plans", href: "/comingSoon"},
    ],
  },
  {
    title: "Learn About NextGen",
    links: [
      {
        label: "Next Generation Air Transportation System (NextGen)",
        href: "#",
      },
      { label: "NextGen Today", href: "/comingSoon"},
      { label: "NextGen Programs and Resources", href: "/comingSoon"},
      { label: "Performance Reporting and Benefits", href: "/comingSoon"},
    ],
  },
  
];

const SocialLinks = () => (
  <div className="flex gap-4 py-6 justify-center">
    {SOCIAL_LINKS.map(({ Icon, href }) => (
      <a
        key={href}
        href={href}
        className="bg-primary bg-opacity-85 size-10 flex items-center justify-center rounded-full"
      >
        <Icon className="hover:-translate-y-3 size-6 text-white hover:text-accent3 transition-all duration-200 ease-in" />
      </a>
    ))}
  </div>
);

interface LinkSectionProps {
  title: string;
  links: { label: string; href: string }[];
}

const LinkSection: React.FC<LinkSectionProps> = ({ title, links }) => (
  <div className="flex flex-col gap-2">
    <h4 className="font-semibold">{title}</h4>
    {links.map(({ label, href }) => (
      <a
        key={label}
        href={href}
        className="text-[14px] text-white underline hover:no-underline"
      >
        {label}
      </a>
    ))}
  </div>
);

const Footer = () => {
  return (
    <div>
      <div className="bg-neutral2 py-16 text-white">
        <div className="container grid lg:grid-cols-4 gap-8 sm:grid-cols-2">
          {/* Address */}
          <address className="text-[15px] not-italic space-y-4 text-white">
            <h4 className="font-semibold">UAV Helpline</h4>
            <p>
            Your global support for UAV guidance, safety, and regulations. We're here to help drone operators navigate the skies with confidence.
            </p>
            <a
              href="#"
              className="text-[14px] text-white underline hover:no-underline"
            >
              Contact Us
            </a>
          </address>

          {LINKS.map(({ title, links }) => (
            <LinkSection key={title} title={title} links={links} />
          ))}
        </div>
      </div>

      <div className="bg-transparent py-8">
        <div className="container flex flex-col-reverse lg:flex-row gap-4 justify-between text-white">
          <div>
            <h5 className="text-[15px] text-lightBg mb-4">
              POLICIES, RIGHTS & LEGAL
            </h5>
            <div className="flex flex-col md:flex-row flex-wrap gap-2">
              {POLICIES_LINKS.map(({ label, href }) => (
                <React.Fragment key={label}>
                  <a
                    href={href}
                    className="text-[14px] text-white underline hover:no-underline"
                  >
                    {label}
                  </a>
                  <span className="hidden md:flex">|</span>
                </React.Fragment>
              ))}
            </div>
          </div>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
};

export default Footer;
