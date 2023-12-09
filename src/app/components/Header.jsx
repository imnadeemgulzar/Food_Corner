"use client";
import { auth } from "@/firebase/config";
import { signOut } from "firebase/auth";
import Link from "next/link";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
const Header = () => {
  const [user] = useAuthState(auth);
  console.log({ user });
  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error);
    }
  };
  const navItems = [
    { id: 1, href: "/", title: "Home" },
    { id: 2, href: "/menu", title: "Menu" },
    { id: 3, href: "/about", title: "About" },
    { id: 4, href: "/contact", title: "Contact" },
  ];
  return (
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
        {!user ? (
          <Link
            href="/login"
            className="rounded-full bg-[#2D5E2E] px-6 py-1 text-slate-200 font-semibold"
          >
            Login
          </Link>
        ) : (
          <button
            onClick={handleLogout}
            className="rounded-full bg-[#2D5E2E] px-6 py-1 text-slate-200 font-semibold"
          >
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
