import React from "react";
type IconCardProps = {
  src: string;
  children: string;
};
const IconCard: React.FC<IconCardProps> = ({ children, src }) => {
  return (
    <div className="bg-primary border border-accent flex flex-col justify-around text-center items-center hover:bg-accent2 h-28 w-24 md:h-40 md:w-32 xl:h-44 xl:w-36">
      <img src={src} alt={children} className="md:size-28 size-12" />
      <h6 className="alt-p">{children}</h6>
    </div>
  );
};

export default IconCard;
