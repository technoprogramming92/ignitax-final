import ServicesTitle from "../Common/ServicesTitle";
import SingleService from "./SingleService";
import serviceData from "./serviceData";

const Services = () => {
  return (
    <section id="blog" className="pt-16 md:pt-10 lg:pt-14">
      <div className="container">
        <ServicesTitle
          title="All Virtual Services by Ignitax"
          paragraph="Our virtual Staff of professionals can provide you below services."
          center
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {serviceData.map((service) => (
            <div key={service.id} className="w-full">
              <SingleService service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
