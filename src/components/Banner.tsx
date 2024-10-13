import Image from "next/image";
import { Button } from "./ui/button";
import { BackgroundBanner } from "./icons";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="layout bg-theme-orange rounded-[8px] flex justify-between items-center relative pl-32 pr-24 pt-24  mb-12">
      <BackgroundBanner className="absolute left-0 h-auto w-full" />
      <Image
        src="/images/zx9speaker_banner.png"
        alt="Zx7 banner"
        className="relative z-10"
        width={410}
        height={439}
      />
      <div className="text-theme-white relative z-10 max-w-[349px]">
        <h2 className="mb-6 max-w-[261px]">ZX9 SPEAKER</h2>
        <p className="mb-10">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button variant="secondary" asChild>
          <Link href="/">See Product</Link>
        </Button>
      </div>
    </section>
  );
}
