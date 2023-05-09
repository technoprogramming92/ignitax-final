import Breadcrumb from "@/components/Common/Breadcrumb";
import TwoParaTitle from "@/components/Common/TwoParaTitle";
import Image from "next/image";
import Link from "next/link";
import GraphicsGallery from "@/components/GraphicsGallery";

const checkIcon = (
    <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
      <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
    </svg>
  );

const Graphic = () => {
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
        <Breadcrumb
        pageName="Graphics Designing" />

<section id="about" className="pt-12 md:pt-15 lg:pt-19">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <TwoParaTitle
                  title="Graphic Designing"
                  paragraph="Our talented team of visual artists brings your ideas to life through stunning graphics and designs that capture the essence of your brand. Whether you need a logo, brochure, or website design, our creative gurus have got you covered. We use the latest design tools and techniques to craft unique and impactful visuals that will make your brand stand out from the crowd."
                  paragraph2="With a keen eye for detail and a passion for creativity, our designers are committed to delivering outstanding results that exceed your expectations. Let us help you create a visual identity that speaks volumes about your brand and captures the hearts of your customers."
                  mb="44px"
                />

                <div
                  className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                  data-wow-delay=".15s"
                >
                  <div className="mx-[-12px] flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="Banners" />
                      <List text="Billboards" />
                      <List text="Brochures" />
                      <List text="Envelopes" />
                      <List text="Flyers" />
                      <List text="Infographics" />
                      <List text="Menus" />
                      <List text="Newsletters" />
                      <List text="Packaging Design" />
                      <List text="Vector Art" />
                    </div>

                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="Business Cards" />
                      <List text="Business forums" />
                      <List text="Catalogues" />
                      <List text="Invitations" />
                      <List text="Letterheads" />
                      <List text="Logos" />
                      <List text="Posters" />
                      <List text="Social Media Posts" />
                      <List text="Stickers and Labels" />
                      <List text="Vehicle Wraps" />
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
                    src="/images/pages-images/graphics-service.png"
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
      <GraphicsGallery />
    </div>
  )
}

export default Graphic