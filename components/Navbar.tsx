import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { navLinks } from "@/constants";
import Hamburger from "./Hamburger";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="h-16 w-full flex items-center justify-between container sticky top-0 inset-x-0 bg-white/90 backdrop-blur-sm">
      <Logo />
      {/* desktop navigation */}
      <ul className="space-x-6 lg:space-x-8 hidden md:flex">
        {navLinks.map(({ id, text, href }) => (
          <li key={id}>
            <NavLink href={href}>
              {/* <Link href={href}>{text}</Link> */}
              {text}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* mobile hamburger */}
      <Hamburger />
    </nav>
  );
};

export default Navbar;
