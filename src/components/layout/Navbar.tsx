"use client";
import { NavbarProps } from "./NavItems";
import { motion, useScroll } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Logo, ShoppingCard } from "../icons";
import Link from "next/link";
import NavItems from "./NavItems";
import NavItemsMobile from "./NavItemsMobile";

export default function Navbar({ links }: NavbarProps) {
  const [isHidden, setIsHidden] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const { scrollY } = useScroll();
  const lastYRef = useRef(0);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((y) => {
      const difference = y - lastYRef.current;
      if (Math.abs(difference) > 50) {
        setIsHidden(difference > 0);
        lastYRef.current = y;
      }
      setHasScrolled(y > 100);
    });

    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.header
      animate={isHidden ? "hidden" : "visible"}
      variants={{
        hidden: {
          y: "-100%",
        },
        visible: {
          y: "0%",
          backgroundColor: hasScrolled ? "#000000" : "transparent",
        },
      }}
      transition={{ duration: 0.2 }}
      className="fixed z-50 top-0 left-0 w-full lg:pt-8 lg:pb-9 max-lg:py-8"
    >
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
    </motion.header>
  );
}
