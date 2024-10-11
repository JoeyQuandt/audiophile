import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home | Audiophile",
  description:
    "Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.",
  icons: {
    icon: "/favicons/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links = [
    {
      name: "Home",
      href: "/",
      id: 1,
    },
    {
      name: "Headphones",
      href: "/headphones",
      id: 2,
    },
    {
      name: "Speakers",
      href: "/speakers",
      id: 3,
    },
    {
      name: "Earphones",
      href: "/earphones",
      id: 4,
    },
  ];
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicons/favicon-48x48.png"
          sizes="48x48"
        />
        <link rel="icon" type="image/svg+xml" href="/favicons/favicon.svg" />
        <link rel="shortcut icon" href="/favicons/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="audiophile" />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <meta property="og:title" content="Home | Audiophile" />
        <meta property="og:type" content="image" />
        <meta property="og:image" content="/default-seo-image.jpg" />

        <meta name="twitter:image" content="/default-seo-image.jpg" />
        <meta name="twitter:title" content="Home | Audiophile" />
        <meta name="twitter:description" content="Agent" />
      </head>
      <body>
        <Navbar links={links} />
        <main className="min-h-screen">{children}</main>
        <Footer links={links} />
      </body>
    </html>
  );
}
