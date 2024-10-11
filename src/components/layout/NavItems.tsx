"use client";

import { NavbarProps } from "./Navbar";
import { usePathname } from "next/navigation";

export default function NavItems({ links, ...props }: NavbarProps) {
  const pathname = usePathname();

  return (
    <ul {...props}>
      {links.map((item, index) => {
        return (
          <li
            className={`navItem ${
              pathname === item.href ? "text-theme-orange" : "text-theme-white"
            }`}
          >
            <a key={index} href={item.href}>
              {item.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
