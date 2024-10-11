"use client";

import { Logo, ShoppingCard, Hamburger } from "../icons";
import NavItems from "./NavItems";

export type NavbarProps = {
  links: {
    name: string;
    href: string;
  }[];
  className?: string;
};

export default function Navbar({ links }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 w-full bg-black lg:pt-8 lg:pb-9 max-lg:py-8">
      <nav className="layout flex lg:justify-between max-md:justify-between items-center text-theme-white">
        <Hamburger className="lg:hidden max-lg:block md:mr-10" />
        <a href="/">
          <Logo className="hover:text-theme-orange transition ease-in duration-200" />
        </a>
        <NavItems links={links} className="flex gap-[34px] max-lg:hidden" />
        <button className="max-lg:ml-auto max-md:ml-0">
          <ShoppingCard className="hover:text-theme-orange transition ease-in duration-200" />
        </button>
      </nav>
    </header>
  );
}
