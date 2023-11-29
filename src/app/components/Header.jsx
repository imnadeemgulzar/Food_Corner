import Link from "next/link";
import React from "react";

const Header = () => {
  const navItems = [
    { id: 1, href: "/", title: "Home" },
    { id: 2, href: "/menu", title: "Menu" },
    { id: 2, href: "/about", title: "About" },
    { id: 3, href: "/contact", title: "Contact" },
  ];
  return (
    // <header className="flex items-center justify-between shadow-md px-4 rounded-md bg-[#98BC62]">
    <header className="flex items-center justify-between shadow-md px-4 rounded-md bg-[#cff0d0fb]">
      <h1 className="text-[#2D5E2E] text-2xl font-bold cursor-pointer">
        Food Corner
      </h1>
      <nav className="flex gap-4 py-3">
        {navItems.map((nav) => (
          <Link
            key={nav.id}
            href={nav.href}
            className="rounded-sm px-4 py-1 text-[#317874] font-semibold"
          >
            {nav.title}
          </Link>
        ))}
        <Link
          href=""
          className="rounded-full bg-[#2D5E2E] px-6 py-1 text-slate-200 font-semibold"
        >
          Login
        </Link>
      </nav>
    </header>
  );
};

export default Header;
