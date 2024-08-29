import clsx from "clsx";
import React, { ReactNode } from "react";

interface LogoProps {
  className?: string;
  showLogo?: boolean;
  children?: ReactNode;
}

const Logo: React.FC<LogoProps> = ({
  className,
  children,
  showLogo = false,
}) => {
  return (
    <div className={clsx("flex items-center space-x-4", className)}>
      {showLogo ? (
        <img src="icon.png" alt="Plant-T" className="size-12" />
      ) : null}
      {children}
    </div>
  );
};

export default Logo;
