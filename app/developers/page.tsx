import Breadcrumb from "@/components/Common/Breadcrumb";
import TwoParaTitle from "@/components/Common/TwoParaTitle";
import DevelopersFeatures from "@/components/DevelopersFeatures";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'IGNITAX - Skilled Developers for Your Digital Projects',
  description: 'Hire our team of experienced developers to bring your digital projects to life. From web development to software solutions, we deliver quality results tailored to your business needs.',
  keywords: 'Skilled developers, Web development services, Custom software development, Full-stack developers, Front-end development, Back-end development, Mobile app development, E-commerce solutions, CMS development, API integration, UI/UX design, Agile development process, Quality assurance and testing, Responsive web development, Scalable software solutions, Innovative technology development, Software engineering services, Code optimization, Database design and development, Cloud-based solutions',
  authors: [{name: 'Ignitax'}],
  openGraph: {
    title: 'IGNITAX - Skilled Developers for Your Digital Projects',
    description: 'Hire our team of experienced developers to bring your digital projects to life. From web development to software solutions, we deliver quality results tailored to your business needs.',
    url: 'https://www.ignitax.com'
  },

  twitter:{
    title: 'IGNITAX - Skilled Developers for Your Digital Projects',
    description: 'Hire our team of experienced developers to bring your digital projects to life. From web development to software solutions, we deliver quality results tailored to your business needs.',
  },

  robots: 'index, follow',
  icons: '/favicons/android-chrome-192x192.png',
  
  formatDetection: {
    telephone: false
  },
  themeColor: '1F385D',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default'
  }
};


const Developers = () => {
  return (
    <div>
        <Breadcrumb pageName="Developers" />
        <section id="developers" className="pt-8 md:pt-9 lg:pt-11">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-10 dark:border-white/[.15] md:pb-16 lg:pb-18">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <TwoParaTitle
                  title="Choose Developers"
                  paragraph="Welcome to our Developers section! We understand that the backbone of any tech project is the developers who build it. That's why we offer a variety of services to support your development needs."
                  paragraph2="If you're looking for a reliable development partner, look no further. Contact us today to learn more about our development services and how we can help you bring your ideas to life."
                  mb="44px"
                />

                <div
                  className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                  data-wow-delay=".15s"
                >
                  <div className="mx-[-12px] flex flex-wrap"></div>
                </div>
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div
                  className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                  data-wow-delay=".2s"
                >
                  <Image
                    src="/images/all services/programmer and developers.svg"
                    alt="about-image"
                    fill
                    className="mx-auto max-w-full lg:mr-0"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center content-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mt-10">
              <Link
                href="/Contact/page"
                className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </section>
      <DevelopersFeatures />
    </div>
  )
}

export default Developers