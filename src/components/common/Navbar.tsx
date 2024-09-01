import Logo from "./Logo";
import Button from "./Button";
import clsx from "clsx";
import React from "react";
import { NavLink } from "react-router-dom";
import * as Router from "../router";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const navbarButtons = [
    { title: "Beranda", to: Router.BASE_URL + "/" },
    { title: "Panduan", to: Router.GUIDE_URL },
    { title: "Pengembang", to: Router.DEVELOP_URL },
  ];

  return (
    <nav
      className={clsx(
        "w-full flex justify-between items-center p-4 px-16 font-bold",
        className
      )}
    >
      {/* Logo on the left */}
      <Logo showLogo className="text-3xl text-hijau">
        GreenTech
      </Logo>

      {/* Buttons on the right */}
      <div className="flex gap-x-20">
        {navbarButtons.map((btn) => (
          <NavLink key={btn.title} to={btn.to}>
            {() => {
              const isActive = location.pathname === btn.to;
              return (
                <Button
                  variant={isActive ? "underlined" : "default"}
                  isActive={isActive}
                  to={btn.to}
                  className="text-xl"
                >
                  {btn.title}
                </Button>
              );
            }}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
