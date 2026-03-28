import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const centralAvenuePro = localFont({
  src: "../../public/Central_Avenue_Bold.woff2",
  display: "swap",
  variable: "--font-centralAvenuePro",
});

const ibmPlexMono = localFont({
  src: "../../public/IBM_Plex_Mono.woff2",
  display: "swap",
  variable: "--font-ibmPlexMono",
});

export const metadata: Metadata = {
  title: "P&Co - A Mindset For Purposeful Living",
  description:
    "Discover the quality of P&Co - A mindset for purposeful living. Free worldwide shipping available.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexMono.variable} ${centralAvenuePro.variable} antialiased`}
    >
      <body className="flex flex-col">asdfsdfadf{children}</body>
    </html>
  );
}
