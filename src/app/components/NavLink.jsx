/** @format */

"use client";

import classNames from "@/utils/classNames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({
  children,
  href,
  activeClassName,
  inActiveClassName,
  ...props
}) => {
  const path = usePathname();
  const isActive = path === href;

  const classes = classNames(
    props.className,
    isActive ? activeClassName : inActiveClassName
  );

  if (classes) {
    props.className = classes;
  }

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
};

export default NavLink;
