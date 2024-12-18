import React from "react";

type ButtonProps = {
  onClick: () => void;
  styleType?: "solid" | "outline"; // Optional prop to choose button style
  children?: React.ReactNode;
  height?: string; // Optional height prop for dynamic height
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  styleType = "solid",
  height,
}) => {
  return (
    <button
      data-aos={`${styleType === "outline" ? "fade-in" : ""}`}
      onClick={onClick}
      className={`group transition-colors duration-300 ${
        height ? `h-[${height}]` : "" // Apply dynamic height if provided
      } ${
        styleType === "outline"
          ? "bg-transparent border-2 text-accent hover:text-primary hover:bg-accent border-accent inset-0"
          : "hover:text-neutral"
      }`}
    >
      {/* Hover background effect for solid style only */}
      {styleType === "solid" && (
        <span
          className={`absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left bg-accent2`}
        ></span>
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
};

export default Button;
