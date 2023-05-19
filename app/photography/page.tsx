import Breadcrumb from "@/components/Common/Breadcrumb";
import TwoParaTitle from "@/components/Common/TwoParaTitle";
import Image from "next/image";
import Link from "next/link";
import PhotoGallery from "@/components/PhotGallery";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IGNITAX - Professional Photography Services",
  description:
    "We Capture your moments with our professional photography services. From product photography to event coverage, We deliver stunning visuals just as you want.",
  keywords:
    "Professional photography services, Event photography, Product photography, Wedding photography, Portrait photography, Commercial photography, Fashion photography, Lifestyle photography, Corporate photography, Photo editing services, Virtual photography services, Virtual assistant photography",
  authors: [{ name: "Ignitax" }],
  openGraph: {
    title: "IGNITAX - Professional Photography Services",
    description:
      "We Capture your moments with our professional photography services. From product photography to event coverage, We deliver stunning visuals just as you want.",
    url: "https://www.ignitax.com/services/photography",
  },

  twitter: {
    title: "IGNITAX - Professional Photography Services",
    description:
      "We Capture your moments with our professional photography services. From product photography to event coverage, We deliver stunning visuals just as you want.",
  },

  robots: "index, follow",
  icons: "/favicons/android-chrome-192x192.png",

  formatDetection: {
    telephone: false,
  },
  themeColor: "1F385D",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
  },
};

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const Photography = () => {
  const List = ({ text }: any) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );
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
      <Breadcrumb pageName="Photography" />
      <section id="about" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <TwoParaTitle
                  title="Photography"
                  paragraph="Our team of skilled photographers captures your memories in stunning detail. From product photography to Event photography, we offer a wide range of services to meet your needs. We use high-end cameras and lighting equipment to ensure that your images are crisp, clear, and visually appealing."
                  paragraph2=""
                  mb="44px"
                />

                <div
                  className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                  data-wow-delay=".15s"
                >
                  <div className="mx-[-12px] flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="Product Photography" />
                      <List text="Event Photography" />
                      <List text="Wedding Photography" />
                    </div>

                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="Real Estate Photography" />
                      <List text="Portrait Photography" />
                      <List text="Photo Editing and Retouching" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div
                  className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                  data-wow-delay=".2s"
                >
                  <Image
                    src="/images/all services/photography.svg"
                    alt="about-image"
                    fill
                    className="mx-auto max-w-full lg:mr-0"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center content-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mt-10">
              <Link
                href="/contact"
                className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </section>
      <PhotoGallery />
    </div>
  );
};

export default Photography;
