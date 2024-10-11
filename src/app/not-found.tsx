import { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 | Audiophile",
};

export default function NotFound() {
  return (
    <section className="grid items-center h-screen">
      <div className="text-center">
        <h1 className="mb-8 md:text-9xl">404</h1>
        <p className="mb-10">
          The page you're trying to visit doesn't exist (anymore)
        </p>
        <Button asChild>
          <Link href="/">Return to the homepage</Link>
        </Button>
      </div>
    </section>
  );
}
