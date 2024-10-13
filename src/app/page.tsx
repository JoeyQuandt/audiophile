import Hero from "@/components/Hero";
import ProductCards from "@/components/ProductCards/ProductCards";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductCards />
    </>
  );
}
