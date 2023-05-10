import Link from "next/link";
import SingleFeature from "./SingleFeature";
import featureData from "./featureData";

const ContentFeatures = () => {
  return (
    <section id="blog" className="bg-primary/5 py-8 md:py-10 lg:py-11">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {featureData.map((feature) => (
            <div key={feature.id} className="w-full">
              <SingleFeature feature={feature} />
            </div>
          ))}
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
    </section>
  );
};

export default ContentFeatures;
