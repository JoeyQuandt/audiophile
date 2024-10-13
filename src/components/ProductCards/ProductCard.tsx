import { Button } from "../ui/button";
import { Shadow } from "../icons";
import Image from "next/image";
import Link from "next/link";

export type ProductCardProps = {
  image: string;
  title: string;
  href: string;
};

export default function ProductCard({ image, title, href }: ProductCardProps) {
  return (
    <div className="flex flex-col items-center justify-center bg-theme-lightGray w-full rounded-[8px] pb-7 relative">
      <Image
        src={image}
        alt="Product Image"
        width={122}
        height={160}
        className="absolute max-md:top-[-40px] top-[-95px] max-md:max-w-[79px] h-auto"
      />
      <Shadow />
      <h6 className="mb-4">{title}</h6>
      <Button variant="link" asChild>
        <Link href={href}>Shop</Link>
      </Button>
    </div>
  );
}
