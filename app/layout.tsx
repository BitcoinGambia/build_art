import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Footer from "components/layout/Footer";
import Header from "components/layout/Header";
import SmoothScroll from "components/layout/SmoothScroll";

export const metadata: Metadata = {
  title: {
    default: "BuildArt Global",
    template: "BuildArt Global | %s",
  },
  icons: {
    icon: "/assets/images/Build-art-global-logo-02-1.png",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=manrope@200,300,400,500,600,700,800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=boska@200,201,300,301,400,401,500,501,700,701,900,901&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/splitting@1.0.6/dist/splitting.css"
        />
      </head>
      <body>
        <SmoothScroll />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
