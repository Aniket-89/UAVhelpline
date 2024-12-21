import { useCallback, useEffect, useState } from "react";
import Button from "../Button/Button";
import { phoneNumber, BannerImage, DaDrone, SurveillanceImage } from "../../assets/assets";


const mockBannerImages = [
    BannerImage,
    DaDrone,
    SurveillanceImage
  ];

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const nextImage = useCallback(() => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentImageIndex((prevIndex) => 
        prevIndex === mockBannerImages.length - 1 ? 0 : prevIndex + 1
      );
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 750); // Longer duration for smoother fade
    }
  }, [isTransitioning]);

  useEffect(() => {
    const intervalId = setInterval(nextImage, 5000);
    return () => clearInterval(intervalId);
  }, [nextImage]);

  
  return (
    <div className="bg-royal flex lg:h-[500px]  md:h-[468px] sm:h-[58vh] w-full mb-24">
      <div className="flex mx-auto items-center container">
        <div className="p-4 lg:px-0 lg:py-8 w-full h-full flex flex-col">
          <h3 className="text-primary leading-tight">
            World's Best Hotline for Everything UAV
          </h3>
          <div className="flex flex-col gap-6 md:flex-row justify-between">
            <div className="space-y-4">
              <p className="text-primary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
                Sunt error reprehenderit, nisi ea molestias iusto <br />
                modi cupiditate blanditiis optio? Autem.
              </p>
              <h4 className="text-primary alt-h ">{phoneNumber}</h4>
              <Button
                onClick={() => (window.location.href = `tel:${phoneNumber}`)}
                styleType="solid"
              >
                Call Now
              </Button>
            </div>
            <div className="bg-transparent relative aspect-[3/2] lg:block sm:h-72 lg:h-96">
            {mockBannerImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Banner slide ${index + 1}`}
                  className={`absolute md:top-[10%] xl:top-[20%] left-0 object-cover object-center h-full w-full transition-opacity duration-750 ease-in-out ${
                    currentImageIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
