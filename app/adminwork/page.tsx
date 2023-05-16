import React from 'react'
import Breadcrumb from "@/components/Common/Breadcrumb";
import ThreeParaTitle from "@/components/Common/ThreeParaTitle";
import Image from "next/image";
import Link from "next/link";
import Adminfeatures from '@/components/Adminfeatures';

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IGNITAX - Virtual Admin Services | Virtual Administrative Support",
  description:
    "We provides best virtual admin services for businesses. Our skilled virtual assistants offer efficient support in managing schedules, emails, bookkeeping, and more. Contact us for reliable and professional administrative assistance.",
  keywords:
    "Virtual admin services, Virtual assistant provider, Administrative support Virtual office assistance, Online administrative tasks, Efficient admin solutions, Remote administrative services, Professional virtual assistants, Administrative task management, Virtual scheduling and organization",
  authors: [{ name: "Ignitax" }],
  openGraph: {
    title: "IGNITAX - Virtual Admin Services | Virtual Administrative Support",
    description:
      "We provides best virtual admin services for businesses. Our skilled virtual assistants offer efficient support in managing schedules, emails, bookkeeping, and more. Contact us for reliable and professional administrative assistance.",
    url: "https://www.ignitax.com/adminwork",
  },

  twitter: {
    title: "IGNITAX - Virtual Admin Services | Virtual Administrative Support",
    description:
      "We provides best virtual admin services for businesses. Our skilled virtual assistants offer efficient support in managing schedules, emails, bookkeeping, and more. Contact us for reliable and professional administrative assistance.",
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
  const AdminWork = () => {
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
        <Breadcrumb pageName="Content Writing" />
        <section id="about" className="pt-16 md:pt-10 lg:pt-14">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-15 lg:pb-20">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <ThreeParaTitle
                  title="Admin Work And Assistance"
                  paragraph="Do you find yourself struggling to keep up with the day-to-day administrative tasks of running your business? At our virtual assistant company, we understand the importance of having an organized and efficient workflow. That's why we offer top-notch virtual admin services to help lighten your load."
                  paragraph2="Our team of experienced virtual assistants are well-versed in managing schedules, email inboxes, bookkeeping, data entry, and more. We pay close attention to detail and always strive to cater to your unique needs and preferences."
                  paragraph3="By partnering with us for virtual admin services, you can shift your focus to growing your business while we take care of the time-consuming administrative tasks. Rest easy knowing that your business is in capable hands with our reliable and professional team.!"
                  mb="30px"
                />

                <div
                  className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                  data-wow-delay=".15s"
                >
                  <div className="mx-[-12px] flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2"></div>

                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2"></div>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div
                  className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                  data-wow-delay=".2s"
                >
                  <Image
                    src="/images/all services/Admin work and assistance.svg"
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
      <section>
      <Adminfeatures />
      </section>
    </div>
  )
}


export default AdminWork






    
    

