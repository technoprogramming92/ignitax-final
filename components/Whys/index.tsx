import { Why } from "@/types/why";
import SingleWhy from "./SingleWhy";
import HeroTitle from "../Common/HeroTitle";
import whyData from "./whyData";

const Whys = () => {
  return (
    <div>
      <section className="relative z-10 bg-primary/[.03] py-12 md:py-15 lg:py-18">
        <div className="container">
          <HeroTitle
            title="Frequently Asked Questions"
            paragraph="Your Burning Questions, Answered Below!"
            center
          />
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {whyData.map((why) => (
              <SingleWhy key={why.id} why={why} />
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-[-1]">
          <img src="/images/shape.svg" alt="shape" className="w-full" />
        </div>
      </section>
    </div>
  );
};

export default Whys;
