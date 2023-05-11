import Breadcrumb from "@/components/Common/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import FourParaTitle from "@/components/Common/FourParaTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);
const Editing = () => {
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
      <Breadcrumb pageName="Editing" />

      <section id="editing" className="pt-11 md:pt-10 lg:pt-12">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-15 lg:pb-20">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <FourParaTitle
                  title="Editing"
                  paragraph="Our team of proficient experts provides a diverse range of services to enhance the visual appeal of your content and transform your ideas into reality."
                  paragraph2="Whether you need to adjust the lighting and color balance of your photos or want to add special effects and animations to your videos, we possess the necessary tools and expertise to cater to your requirements."
                  mb="44px"
                  paragraph3="We acknowledge the significance of visual content in today's digital landscape and endeavor to deliver the highest quality services to our clients to help them stand out in the crowd. Allow us to assist you in creating visually striking content that captivates your audience and creates a lasting impact. Get in touch with us today to explore our photo and video editing services further."
                  paragraph4=""
                />

                <div
                  className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                  data-wow-delay=".15s"
                >
                  <div className="mx-[-12px] flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="Color correction and enhancement" />
                      <List text="Removal of blemishes and imperfections" />
                      <List text="Image resizing and cropping" />
                      <List text="Background removal and replacement" />
                      <List text="Restoration of old or damaged photos" />
                      <List text="Retouching and manipulation of images" />
                      <List text="Adding filters and special effects" />
                      <List text="Photo compositing and collage creation " />
                    </div>

                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="Cutting and splicing of video footage" />
                      <List text="Color correction and grading" />
                      <List text="Adding visual effects and animation" />
                      <List text="Sound editing and mixing" />
                      <List text="Adding music and sound effects" />
                      <List text="Subtitling and captioning" />
                      <List text="Video compression and optimizationt" />
                      <List text="Video montage and compilation" />
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
                    src="/images/all services/Edit photo.svg"
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
    </div>
  );
};

export default Editing;
