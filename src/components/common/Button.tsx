import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  rounded: "none" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  block: boolean;
}

const Button = (props: Partial<ButtonProps>) => {
  const {
    type = "submit",
    className,
    children,
    rounded = "lg",
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

  return (
    <button
      type={type}
      className={clsx(
        roundedStyles[rounded],
        {
          "w-full": block,
        },
        className
      )}
      {...OtherProps}
    >
      {children}
    </button>
  );
};

export default Button;
