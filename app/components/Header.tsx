import React from "react";

import RoundedBlackButton from "./RoundedBlackButton";
import { Logo } from "../svgs";

const Header = () => {
  const links = ["Find designers", "Inspiration", "Jobs", "Go Pro"];

  return (
    <nav className="px-10 py-8 flex justify-between items-center">
      <div className="flex gap-x-10">
        <Logo className="w-24 h-auto xl:hidden" />
        <ul className="text-sm font-semibold hidden space-x-8 md:flex">
          {links.map((link) => (
            <li key={link}>
              <a href="#">{link}</a>
            </li>
          ))}
        </ul>
      </div>
      <Logo className="w-24 h-auto hidden xl:block" />
      <RoundedBlackButton label="Sign up" />
    </nav>
  );
};

export default Header;
