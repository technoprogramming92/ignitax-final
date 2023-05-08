import Breadcrumb from "@/components/Common/Breadcrumb";
import FourParaTitle from "@/components/Common/FourParaTitle";
import ITFeatures from "@/components/ITFeatures";
import Image from "next/image";
import Link from "next/link";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const ITsupport = () => {
  return (
    <div>
      <Breadcrumb pageName="IT Services" />
      <section id="about" className="pt-16 md:pt-10 lg:pt-14">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <FourParaTitle
                  title="IT and Support"
                  paragraph="Are you tired of being your own IT department? Do you dread the thought of having to troubleshoot your own tech issues? Fear not, because we're here to rescue you from the woes of computer glitches and software snafus."
                  paragraph2="At IGNITAX, we specialize in providing top-notch IT and support services to businesses just like yours. Whether you're dealing with a pesky virus, struggling with software updates, or simply need some expert advice, we've got you covered."
                  paragraph3="Our team of tech wizards will swoop in to save the day with lightning-fast response times and a can-do attitude. We'll work tirelessly to ensure your systems are running smoothly, leaving you free to focus on what you do best - growing your business."
                  paragraph4="So say goodbye to the headaches of DIY IT and hello to the peace of mind that comes with having a team of pros in your corner. Contact us today to learn more about how we can help you get the most out of your technology."
                  mb="44px"
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
                    src="/images/pages-images/IT-service.png"
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
      <ITFeatures />
    </div>
  );
};

export default ITsupport;
