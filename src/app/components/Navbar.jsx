/** @format */

import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";

const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    path: "/about",
    title: "About",
  },
  {
    path: "/profile",
    title: "Profile",
  },
  {
    path: "/blogs",
    title: "Blogs",
  },
  {
    path: "/dashboard",
    title: "Dashboard",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-slate-500 py-2">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">Next Hero</Link>
        <ul className="flex items-center gap-10 justify-center">
          {navLinks.map(({ path, title }) => {
            return (
              <li key={path}>
                <NavLink
                  activeClassName={"text-orange-400"}
                  className="hover:text-orange-400"
                  href={path}
                  inActiveClassName={"text-white"}
                >
                  {title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
