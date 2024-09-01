import clsx from "clsx";
import React, { ReactNode } from "react";
// import icGreentech from "../../assets/ic-greentech.svg";
import icGreentech from "../../assets/ic-greentech(logoGreen).svg";

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
      {showLogo ? <img src={icGreentech} className="size-20" /> : null}
      {children}
    </div>
  );
};

export default Logo;
