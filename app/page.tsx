import Hero from "@/components/Hero";
import NewWhyUs from "@/components/NewWhyUs";
//import Whys from "@/components/Whys";
import OurServices from "@/components/OurServices";
import Testimonials from "@/components/Testimonials";
import { Metadata } from "next";

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
      <Hero />
      <OurServices />
      <NewWhyUs />
      <Testimonials />
    </div>
  );
}
