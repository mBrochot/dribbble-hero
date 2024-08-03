import React from "react";

// Find designers
// Designer search
// Quickly find your next designer
// Post your job
// The #1 job board for design talent
// Inspiration
// Jobs
// Go Pro

const links = ["Find designers", "Inspiration", "Jobs", "Go Pro"];

const Header = () => {
  return (
    <nav className="p-10">
      <ul className="text-sm font-semibold flex space-x-2">
        {links.map((link) => (
          <li key={link}>
            <a href="#">{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
