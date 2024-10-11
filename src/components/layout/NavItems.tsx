"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export type NavbarProps = {
  links: {
    name: string;
    href: string;
    id: number;
  }[];
  className?: string;
};

export default function NavItems({ links, ...props }: NavbarProps) {
  const pathname = usePathname();

  return (
    <ul {...props}>
      {links.map((item) => {
        return (
          <li
            key={item.id}
            className={`navItem ${
              pathname === item.href ? "text-theme-orange" : "text-theme-white"
            }`}
          >
            <Link href={item.href}>{item.name}</Link>
          </li>
        );
      })}
    </ul>
  );
}
