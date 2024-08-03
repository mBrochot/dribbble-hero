import React from "react";
import clsx from "clsx";

import { Logo } from "../svgs";

const Header = () => {
  const links = ["Find designers", "Inspiration", "Jobs", "Go Pro"];

  return (
    <nav className="px-10 py-8 flex justify-between items-center">
      <ul className="text-sm font-semibold flex space-x-4">
        {links.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
      <Logo className="w-24 h-auto" />
      <button
        className={clsx(
          "text-sm font-semibold text-white",
          "bg-custom-black",
          "px-6 py-4 rounded-full"
        )}
      >
        Sign up
      </button>
    </nav>
  );
};

export default Header;
