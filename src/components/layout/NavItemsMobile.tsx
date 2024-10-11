import { NavbarProps } from "./NavItems";

import { Logo, Hamburger, Facebook, Twitter, Instagram } from "../icons";
import { X } from "lucide-react";
import Link from "next/link";
import NavItems from "./NavItems";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";

export default function NavItemsMobile({ links }: NavbarProps) {
  return (
    <div className="max-lg:block hidden">
      <Drawer direction="top">
        <DrawerTrigger>
          <Hamburger className="lg:hidden max-lg:block md:mr-10" />
        </DrawerTrigger>
        <DrawerContent className="bg-theme-lightBlack pt-10 pb-10 border-none text-theme-white  max-lg:block hidden px-6">
          <div className="min-w-[101px] h-[4px] bg-theme-orange absolute top-0  left-1/2 transform -translate-x-1/2"></div>
          <DrawerHeader className="flex w-full mb-8">
            <DrawerClose className="mr-auto">
              <X />
            </DrawerClose>
            <Link href="/">
              <Logo className="hover:text-theme-orange absolute  left-1/2 transform -translate-x-1/2 transition ease-in duration-200" />
            </Link>
          </DrawerHeader>
          <NavItems
            links={links}
            className="flex gap-4 flex-col items-center justify-center mb-10"
          />
          <DrawerFooter>
            <ul className="gap-4 mt-auto flex items-center justify-center">
              <li>
                <a href="/facebook" target="_blank">
                  <Facebook className="hover:text-theme-orange text-theme-white transition ease-in duration-200" />
                </a>
              </li>
              <li>
                <a href="/facebook" target="_blank">
                  <Twitter className="hover:text-theme-orange text-theme-white transition ease-in duration-200" />
                </a>
              </li>
              <li>
                <a href="/facebook" target="_blank">
                  <Instagram className="hover:text-theme-orange text-theme-white transition ease-in duration-200" />
                </a>
              </li>
            </ul>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
