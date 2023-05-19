import Hero from "@/components/Hero";
import NewWhyUs from "@/components/NewWhyUs";
//import Whys from "@/components/Whys";
import OurServices from "@/components/OurServices";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";
import Script from "next/script";


export const metadata: Metadata = {
  title: "IGNITAX - Your Trusted Virtual Service Provider",
  description:
    "Ignitax is a leading Virtual Service, Virtual Staff & Virtual Assistant provider company we offers wide range of virtual assistance and support services over the globe.",
  keywords:
    "virtual service provider, virtual assistance, virtual support, virtual solutions, professional virtual services",
  authors: [{ name: "Ignitax" }],
  openGraph: {
    title: "IGNITAX - Your Trusted Virtual Service Provider",
    description:
      "Ignitax is a leading Virtual Service, Virtual Staff & Virtual Assistant provider company we offers wide range of virtual assistance and support services over the globe.",
    images: "/images/ignitax-logo.png",  
  },
  twitter: {
    title: "IGNITAX - Your Trusted Virtual Service Provider",
    description:
      "Ignitax is a leading Virtual Service, Virtual Staff & Virtual Assistant provider company we offers wide range of virtual assistance and support services over the globe.",
  },
  robots: "index, follow",
  formatDetection: {
    telephone: false,
  },
  themeColor: "1F385D",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
  },
};

export default function Home() {
  return (
    <div>
      <Script async src={`https://www.googletagmanager.com/gtag/js?id=G-1PDC560M10`}
        strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-1PDC560M10');`}
      </Script>
      <Hero />
      <OurServices />
      <NewWhyUs />
      <Testimonials />
    </div>
  );
}
