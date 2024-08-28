import { Service } from "@/types/service";
import Image from "next/image";
import Link from "next/link";

const SingleService = ({ service }: { service: Service }) => {
  const { title, image, paragraph, path } = service;

  return (
    <div
      className='wow fadeInUp relative overflow-hidden rounded-md bg-white shadow-one dark:bg-primary'
      data-wow-delay='.1s'
    >
      <Link href='/' className='relative block h-[220px] w-full'>
        <Image src={image} alt='image' fill />
      </Link>
      <div className='p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8'>
        <h3>
          <Link
            href={{
              pathname: path,
            }}
            className='mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl'
          >
            {title}
          </Link>
        </h3>
        <p className='mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium dark:text-white text-body-color dark:border-white dark:border-opacity-10'>
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleService;
