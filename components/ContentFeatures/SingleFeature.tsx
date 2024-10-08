import Image from "next/image";
import Link from "next/link";
import { Feature } from "@/types/feature";

import React from "react";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { title, image, paragraph } = feature;
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
            href='/'
            className='mb-4 block text-xl font-bold text-black  dark:text-white  sm:text-2xl'
          >
            {title}
          </Link>
        </h3>
        <p className='mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:text-white dark:border-white dark:border-opacity-10'>
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
