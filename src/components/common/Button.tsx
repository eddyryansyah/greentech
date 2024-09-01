import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean; // Custom prop
  type?: "button" | "submit" | "reset";
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  block?: boolean;
  variant?: "default" | "contained" | "danger" | "underlined" | "solid";
  to?: string;
  onClick?: () => void;
  iconSuffix?: React.ReactNode;
}

const Button: React.FC<Partial<ButtonProps>> = ({
  variant = "default",
  onClick,
  type = "submit",
  className,
  children,
  rounded = "none",
  block = false,
  iconSuffix,
  isActive = false, // Custom prop
  ...OtherProps
}) => {
  const roundedStyles = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded",
    lg: "rounded-lg",
    xl: "rounded-xl",
    "2xl": "rounded-2xl",
    full: "rounded-full",
  };

  const styles = {
    default: "font-bold",
    contained: "bg-hijau text-white p-2",
    danger:
      "bg-merahNormal border border-merahNormal text-white hover:bg-putihNormalHover hover:text-hitamNormal focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
    disabled:
      "opacity-50 cursor-not-allowed bg-putihDarkHover hover:bg-putihDarker",
    underlined: "border-b-4 border-coklat",
    solid: "bg-hijau rounded-lg",
  };

  return (
    <button
      type={type}
      className={clsx("flex justify-center items-center gap-1",
        roundedStyles[rounded],
        styles[variant],
        {
          "w-full": block,
          "border-b-4 border-coklat": isActive && variant === "underlined",
        },
        className
      )}
      onClick={onClick}
      {...OtherProps} // Spread remaining props except isActive
    >
      {children}
      {iconSuffix ? <div>{iconSuffix}</div> : null}
    </button>
  );
};

export default Button;
