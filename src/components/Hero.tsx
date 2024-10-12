import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#121212] pt-24 pb-28">
      <div className="layout">
        <Separator className="mb-16" />
        <section className="flex items-center justify-between text-theme-white">
          <div>
            <p className="mb-6 opacity-50 text-sm uppercase tracking-[10px]">
              new product
            </p>
            <h1 className="mb-6">XX99 Mark II HeadphoneS</h1>
            <p className="opacity-75 mb-10 font-medium max-w-[349px]">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Button asChild>
              <Link href="/">See Product</Link>
            </Button>
          </div>
          <div className="image-wrapper">
            <Image
              src="/images/hero_headphone.png"
              alt="Headphone image hero"
              sizes="(max-width:768px) 100vw, 700px"
              fill
              priority
              className="object-cover  min-h-[522px]"
            />
          </div>
        </section>
      </div>
    </section>
  );
}
