import Hero from "@/components/Hero";
import ProductCards from "@/components/ProductCards/ProductCards";
import Banner from "@/components/Banner";
import BannerTwo from "@/components/BannerTwo";

export default function Home() {
  return (
    <>
      <Hero />
      <ProductCards />
      <section className="layout grid grid-cols-2 gap-6 max-lg:gap-8 lg:gap-12 pb-52">
        <Banner />
        <BannerTwo />
      </section>
    </>
  );
}
