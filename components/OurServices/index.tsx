import Link from "next/link";
import ServicesTitle from "../Common/ServicesTitle";
import ourServicesData from "./ourServicesData";
import SingleService from "./singleService";

const OurServices = () => {
  return (
    <section id="ourservices" className="bg-primary/5 py-10 md:py-14 lg:py-21">
      <div className="container">
        <ServicesTitle
          title="Our Services"
          paragraph="Grab a cup of coffee and take a peek at the services Ignitax offers for your ease."
          center
        />
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {ourServicesData.map((service) => (
            <div key={service.id} className="w-full">
              <SingleService service={service} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center content-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mt-10">
        <Link
          href="/AllServices/page"
          className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
        >
          Load More Services
        </Link>
      </div>
    </section>
  );
};

export default OurServices;
