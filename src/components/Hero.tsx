import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#121212] max-lg:bg-[url('/images/hero_mobile.jpg')] lg:bg-[url('/images/hero_desktop.jpg')] max-lg:bg-cover lg:bg-contain bg-no-repeat bg-center pt-24 pb-40 ">
      <div className="layout">
        <Separator className="lg:mb-16 mb-32" />
        <section className="flex max-lg:text-center max-lg:justify-center items-center text-theme-white">
          <div>
            <p className="mb-6 subtitleGray">new product</p>
            <h1 className="mb-6 max-w-[396px] max-lg:mx-auto">
              XX99 Mark II HeadphoneS
            </h1>
            <p className="opacity-75 mb-10 font-medium max-w-[349px] max-lg:mx-auto">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Button asChild>
              <Link href="/">See Product</Link>
            </Button>
          </div>
        </section>
      </div>
    </section>
  );
}
