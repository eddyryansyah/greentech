import clsx from "clsx";
import React from "react";

interface LogoProps {
  className?: string;
  showLabel?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className, showLabel = false }) => {
  return (
    <div className={clsx("flex items-center space-x-4", className)}>
      <img src="icon.png" alt="Plant-T" className="size-12" />
      {showLabel ? <h1>Plant -T</h1> : null}
    </div>
  );
};

export default Logo;
