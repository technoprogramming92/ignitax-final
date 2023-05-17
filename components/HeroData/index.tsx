import Image from "next/image";
import HeroTitle from "../Common/HeroTitle";

const HeroData = () => {
  return (
    <section className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <HeroTitle
          title="Empowering Clients And Employees Through Freedom And Meaningful Impact."
          paragraph=""
          center
        />
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-8 aspect-[28/26] max-w-[800px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/hero/ignitax-hero.png"
                alt="about image"
                fill
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[500px]" data-wow-delay=".2s">
              <div className="mb-9">
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We are here to provide dedicated Virtual Assistant, Virtual Team, Virtual Staff, and even various Virtual Services over a globe.
                </p>
              </div>
              <div className="mb-9">
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Are you a small business owner, online entrepreneur, internet marketer, finance professional, CPA, EA, podcaster or any other work professional? You may know those days where you feel like you are juggling too many things at once? No need to worry! We have got your back.
                </p>
              </div>
              <div className="mb-9">
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Let us be your circus clowns and take some of those balls off your hands and give you some fresh air to think of how to grow your business further by providing a virtual professional who will take over all that extra load that makes you feel burdened.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroData;
