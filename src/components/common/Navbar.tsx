import Logo from "./Logo";
import Button from "./Button";
import clsx from "clsx";
import React from "react";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <nav
      className={clsx(
        "w-auto flex justify-between items-center p-4 mx-16",
        className
      )}
    >
      <Logo className="text-3xl">GreenTech</Logo>
      <div className="space-x-28 text-2xl text-hitam">
        <Button className="">Beranda</Button>
        <Button className="">Panduan</Button>
        <Button className="">Pengembang</Button>
      </div>
    </nav>
  );
};

export default Navbar;
