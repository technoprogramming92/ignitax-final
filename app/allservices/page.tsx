import Breadcrumb from "@/components/Common/Breadcrumb";
import Services from "@/components/Services";
import Link from "next/link";
import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "IGNITAX - All Virtual Services",
  description:
    "Discover Our Range Of Services Designed To Meet Your Business Needs Like Tax & Bookeeeping, Web Design, Software Dev, SEO, Content Writing, Graphic Designing, Admin Work And More.",
  keywords:
    "Virtual Assistant Services, Remote Work Solutions, Online Business Support, Digital Marketing Agency, Website Design And Development, Content Writing Services, SEO Optimization Services, Social Media Management, Graphic Design Services, E-commerce Solutions, It Support Services, Data Entry And Management, Video Editing Services, Photo Retouching And Enhancement, Business Process Outsourcing, Tax Planning And Preparation Services, Bookkeeping Services, Customize Software Development Services",
  authors: [{ name: "Ignitax" }],
  openGraph: {
    title: "IGNITAX - Your Trusted Virtual Service & Virtual Staff Provider",
    description:
      "Ignitax is a leading Virtual Service, Virtual Staff & Virtual Assistant provider company we offers wide range of virtual assistance and support services over the globe.",
    url: "https://www.ignitax.com",
  },

  twitter: {
    title: "IGNITAX - Your Trusted Virtual Service & Virtual Staff Provider",
    description:
      "Ignitax is a leading Virtual Service, Virtual Staff & Virtual Assistant provider company we offers wide range of virtual assistance and support services over the globe.",
  },

  robots: "index, follow",
  icons: "/favicons/favicon.ico",

  formatDetection: {
    telephone: false,
  },
  themeColor: "1F385D",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
  },
};

const AllServices = () => {
  return (
    <div>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-1PDC560M10`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-1PDC560M10');`}
      </Script>

      <Breadcrumb pageName="All Virtual Services" />
      <Services />
      <div className="flex flex-col items-center content-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mt-10">
        <Link
          href="/contact"
          className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
        >
          Book a Call
        </Link>
      </div>
      <div>
        {" "}
        <p>&nbsp;</p>{" "}
      </div>
    </div>
  );
};

export default AllServices;
