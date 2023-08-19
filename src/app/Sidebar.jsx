/** @format */

import Link from "next/link";
import NavLink from "./components/NavLink";

const navLinks = [
  {
    path: "/dashboard",
    title: "Dashboard",
  },
  {
    path: "/dashboard/add-product",
    title: "Add Product",
  },
  {
    path: "/dashboard/manage-product",
    title: "Manage Product",
  },
  {
    path: "/",
    title: "Home",
  },
];

const Sidebar = () => {
  return (
    <aside className="bg-slate-500 py-5 h-[80vh] rounded-md px-3">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <ul className="flex items-start gap-5 mt-10 flex-col">
        {navLinks.map(({ path, title }) => (
          <li className="" key={path}>
            <NavLink
              className="px-3 py-1 shadow-md shadow-slate-300 rounded-lg"
              activeClassName={"bg-orange-400"}
              incctiveclassName={"bg-slate-700"}
              href={path}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
