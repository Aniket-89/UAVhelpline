import React from "react";
import {
  FaSquareFacebook,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const SOCIAL_LINKS = [
  { Icon: FaSquareFacebook, href: "#" },
  { Icon: FaLinkedinIn, href: "#" },
  { Icon: FaInstagram, href: "#" },
  { Icon: FaYoutube, href: "#" },
  { Icon: FaXTwitter, href: "#" },
];

const POLICIES_LINKS = [
  { label: "About DOT", href: "#" },
  { label: "Budget and Performance", href: "#" },
  { label: "Civil Rights", href: "#" },
  { label: "FOIA", href: "#" },
  { label: "Information Quality", href: "#" },
  { label: "No FEAR Act", href: "#" },
  { label: "Office of Inspector General", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Web Policies and Notices", href: "#" },
];

const LINKS = [
  {
    title: "Get Important Info/Data",
    links: [
      { label: "Accident & Incident Data", href: "#" },
      { label: "Airport Data & Information Portal (ADIP)", href: "#" },
      { label: "Charting & Data", href: "#" },
      { label: "Flight Delay Information", href: "#" },
      { label: "Supplemental Type Certificates", href: "#" },
      { label: "Type Certificate Data Sheets (TCDS)", href: "#" },
    ],
  },
  {
    title: "Review Documents",
    links: [
      { label: "Aircraft Handbooks & Manuals", href: "#" },
      { label: "Airport Diagrams", href: "#" },
      { label: "Aviation Handbooks & Manuals", href: "#" },
      { label: "Examiner & Inspector", href: "#" },
      { label: "FAA Guidance", href: "#" },
      { label: "Performance Reports & Plans", href: "#" },
    ],
  },
  {
    title: "Learn About NextGen",
    links: [
      {
        label: "Next Generation Air Transportation System (NextGen)",
        href: "#",
      },
      { label: "NextGen Today", href: "#" },
      { label: "NextGen Programs and Resources", href: "#" },
      { label: "Performance Reporting and Benefits", href: "#" },
    ],
  },
  {
    title: "Visit Other FAA Sites",
    links: [
      { label: "Airmen Inquiry", href: "#" },
      { label: "Airmen Online Services", href: "#" },
      { label: "N-Number Lookup", href: "#" },
      { label: "FAA Mobile", href: "#" },
      { label: "FAA Safety Team", href: "#" },
      { label: "Frequently Asked Questions", href: "#" },
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
        <div className="container grid lg:grid-cols-5 gap-8 sm:grid-cols-2">
          {/* Address */}
          <address className="text-[15px] not-italic space-y-4 text-white">
            <h4 className="font-semibold">U.S. Department of Transportation</h4>
            <p>
              Federal Aviation Administration 800 Independence Avenue, SW
              Washington, DC 20591 866.835.5322 (866-TELL-FAA)
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
