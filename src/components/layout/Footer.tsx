import { NavbarProps } from "./NavItems";

import NavItems from "./NavItems";
import { Logo, Facebook, Twitter, Instagram } from "../icons";

export default function Footer({ links }: NavbarProps) {
  return (
    <footer className="bg-theme-lightBlack lg:pt-20 lg:pb-12 max-lg:pt-14 max-lg:pb-11 max-sm:pt-14 max-sm:pb-8 relative">
      <section className="layout">
        <div className="min-w-[101px] h-[4px] bg-theme-orange absolute top-0  max-sm:left-1/2 max-sm:transform max-sm:-translate-x-1/2"></div>
        <div className="flex max-lg:flex-col justify-between  text-theme-white max-sm:items-center">
          <Logo className="max-lg:mb-8 max-sm:mb-12" />
          <NavItems
            links={links}
            className="flex max-sm:flex-col max-sm:items-center md:gap-[34px] gap-4 max-sm:mb-12"
          />
        </div>
        <div className="flex justify-between">
          <p className="text-theme-white opacity-50 max-w-[540px] lg:mt-9 max-lg:mt-8 max-lg:mb-20 lg:mb-14 max-sm:text-center max-sm:mb-12">
            {`Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.`}
          </p>
          <ul className="gap-4 mt-auto max-lg:hidden lg:flex">
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
        </div>
        <div className="flex justify-between max-sm:flex-col  max-sm:items-center max-sm:gap-12">
          <p className="text-theme-white opacity-50 font-bold">
            Copyright {new Date().getFullYear()} All Rights Reserved
          </p>
          <ul className="gap-4 mt-auto max-lg:flex hidden items-center">
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
        </div>
      </section>
    </footer>
  );
}
