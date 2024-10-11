"use client";

import { usePathname } from "next/navigation";

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
            <a href={item.href}>{item.name}</a>
          </li>
        );
      })}
    </ul>
  );
}
