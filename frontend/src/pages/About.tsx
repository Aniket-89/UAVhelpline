import { AboutBannnerImage } from "../assets/assets";

const About = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="w-full text-center md:bg-blue-white bg-accent4 flex flex-col md:flex-row items-center lg:h-[400px] md:h-[360px] h-[50vh]">
        <div className="container h-full flex justify-center items-center">
          <h1 className="text-light">About Us</h1>
        </div>
        <div className="overflow-hidden h-full bg-transparent">
          <img
            src={AboutBannnerImage}
            alt=""
            className="h-full max-w-1/2 object-contain object-bottom"
          />
        </div>
      </div>

      <div className="container md:h-[300px] flex items-center">
        <p className="alt-h text-justify">
          At UAVHelpline.com, we provide expert support and solutions for all
          your drone-related needs. From troubleshooting to technical
          assistance, we ensure your UAV operations stay smooth and hassle-free.
          Trust us to be your go-to helpline for reliable drone guidance and
          care.
        </p>
      </div>

      {/* vision section */}
      <div className="flex container gap-2 overflow-hidden mb-8">
        <span className="w-8 mt-8 bg-accent" data-aos="fade-down"></span>
        <div className="overflow-hidden">
          <h2>Our Vision</h2>
          <p className="alt-h" data-aos="fade-right" data-aos-delay="300">
            "To revolutionize drone support services by delivering seamless,
            innovative, and accessible solutions that empower individuals and
            businesses to unlock the full potential of UAV technology."
          </p>
        </div>
      </div>

      {/* mission section */}
      <div className="flex container gap-2 overflow-hidden mb-8">
        <span className="w-8 mt-8 bg-accent" data-aos="fade-down"></span>
        <div className="overflow-hidden">
          <h2>Our Mission</h2>
          <p className="alt-h" data-aos="fade-right" data-aos-delay="300">
            "Our mission at UAVHelpline.com is to provide reliable, expert
            support and education for drone users, fostering safe and efficient
            UAV operations while driving innovation and accessibility in the
            drone industry."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
