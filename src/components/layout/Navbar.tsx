"use client";
import { NavbarProps } from "./NavItems";

import { Logo, ShoppingCard } from "../icons";
import Link from "next/link";
import NavItems from "./NavItems";
import NavItemsMobile from "./NavItemsMobile";

export default function Navbar({ links }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 w-full bg-black lg:pt-8 lg:pb-9 max-lg:py-8">
      <nav className="layout flex lg:justify-between max-md:justify-between items-center text-theme-white">
        <NavItemsMobile links={links} />
        <Link href="/">
          <Logo className="hover:text-theme-orange transition ease-in duration-200" />
        </Link>
        <NavItems links={links} className="flex gap-[34px] max-lg:hidden" />
        <button className="max-lg:ml-auto max-md:ml-0">
          <ShoppingCard className="hover:text-theme-orange transition ease-in duration-200" />
        </button>
      </nav>
    </header>
  );
}
