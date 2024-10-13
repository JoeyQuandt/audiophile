import { Button } from "./ui/button";
import Link from "next/link";

export default function BannerTwo() {
  return (
    <div className="bg-[url('/images/zx7_banner.jpg')] bg-cover bg-no-repeat bg-center rounded-[8px] py-28 pl-6 max-lg:pl-16 lg:pl-24 col-span-2">
      <h2 className="mb-8">ZX7 SPEAKER</h2>
      <Button variant="outline" asChild>
        <Link href="/">See Products</Link>
      </Button>
    </div>
  );
}
