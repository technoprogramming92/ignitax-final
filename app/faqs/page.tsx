import Whys from "@/components/Whys";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";

const faqs = () => {
  return (
    <div>
      <Breadcrumb pageName="All Virtual Services" />
      <Whys />
      <div className="flex flex-col items-center content-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mt-10">
        <Link
          href="/contact"
          className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
        >
          Book a Call
        </Link>
      </div>
      <div>
        {" "}
        <p>&nbsp;</p>{" "}
      </div>
    </div>
  );
};

export default faqs;
