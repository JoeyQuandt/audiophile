import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Banner() {
  return (
    <div className=" bg-theme-orange rounded-[8px] max-lg:flex-col max-lg:justify-center max-lg:items-center flex max-lg:gap-16 lg:gap-32 gap-8 justify-between items-center  max-lg:pb-16 relative lg:pl-32 lg:pr-24 pt-24 col-span-2">
      <Image
        src="/images/zx9speaker_banner.png"
        alt="Zx7 banner"
        className="relative z-10 max-lg:max-w-[197px] h-auto "
        width={410}
        height={439}
      />
      <div className="text-theme-white relative z-10 max-w-[349px] max-lg:mx-auto max-lg:text-center">
        <h2 className="mb-6 max-w-[261px] max-lg:mx-auto">ZX9 SPEAKER</h2>
        <p className="mb-10">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <Button variant="secondary" asChild>
          <Link href="/">See Product</Link>
        </Button>
      </div>
    </div>
  );
}
