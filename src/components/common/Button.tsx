import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  rounded: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  block: boolean;
  variant?: "default" | "outline" | "danger" | "underlined" | "solid";
  to?: string;
  onClick?: () => void;
  isActive?: boolean;
}

const Button = (props: Partial<ButtonProps>) => {
  const {
    variant = "default",
    onClick,
    type = "submit",
    className,
    children,
    rounded = "none",
    block = false,
    ...OtherProps
  } = props;

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
    outline:
      "bg-transparent border-2 border-hijauNormal text-hijauNormal hover:bg-hijauLightHover hover:text-hitamNormal focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-hijauDarkHover active:text-whiteLightActive",
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
      className={clsx(
        roundedStyles[rounded],
        styles[variant],
        {
          "w-full": block,
        },
        className
      )}
      onClick={onClick}
      {...OtherProps}
    >
      {children}
    </button>
  );
};

export default Button;
