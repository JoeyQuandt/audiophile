import ProductCard from "./ProductCard";

export default function ProductCards() {
  const products = [
    {
      title: "Headphones",
      image: "/images/headphones.png",
      href: "/headphones",
      id: 1,
    },
    {
      title: "Speakers",
      image: "/images/speakers.png",
      href: "/speakers",
      id: 2,
    },
    {
      title: "Earphones",
      image: "/images/earphones.png",
      href: "/earphones",
      id: 3,
    },
  ];
  return (
    <section className="layout flex justify-between pt-24 pb-32 md:pt-36 md:pb-24 lg:pt-52 lg:pb-44 gap-7 max-md:gap-16 max-md:flex-col">
      {products.map((item) => {
        return (
          <ProductCard
            key={item.id}
            image={item.image}
            title={item.title}
            href={item.href}
          />
        );
      })}
    </section>
  );
}
