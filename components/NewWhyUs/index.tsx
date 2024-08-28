import React from "react";
import ServicesTitle from "../Common/ServicesTitle";
import Image from "next/image";

const NewWhyUs = () => {
  return (
    <section className='relative z-10 bg-primary/[.03] py-12 md:py-15 lg:py-18'>
      <div className='container'>
        <ServicesTitle
          title='Why Choose Us'
          paragraph="We're your virtual assistant matchmakers, and we'll find you the perfect match without the awkward first date."
          center
        />
        <div className='flex flex-wrap -m-4'>
          <div className='xl:w-1/3 md:w-1/2 p-4'>
            <div className='border border-gray-200 p-6 rounded-lg bg-white shadow-one dark:bg-primary'>
              <div className='w-12 h-12 inline-flex items-center justify-center rounded-full mb-4'>
                <Image
                  src='/favicons/productivity.png'
                  alt='pajama'
                  height={70}
                  width={70}
                />
              </div>
              <h2 className='text-xl text-gray-900 font-bold title-font mb-2'>
                Pajamas & Productivity
              </h2>
              <p className='leading-relaxed text-base'>
                With our virtual services, you can collaborate with top-notch
                professionals from anywhere in the world, all while staying cozy
                in your pajamas.
              </p>
            </div>
          </div>
          <div className='xl:w-1/3 md:w-1/2 p-4'>
            <div className='border border-gray-200 p-6 rounded-lg bg-white shadow-one dark:bg-primary'>
              <div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4'>
                <Image
                  src='/favicons/guru.png'
                  alt='pajama'
                  height={70}
                  width={70}
                />
              </div>
              <h2 className='text-xl text-gray-900 font-bold title-font mb-2'>
                Jack of All Trades, Master of All
              </h2>
              <p className='leading-relaxed text-base'>
                Our team comprises experts from diverse fields like IT,
                marketing, design, and content creation. From start to end, we
                have your back.
              </p>
            </div>
          </div>
          <div className='xl:w-1/3 md:w-1/2 p-4'>
            <div className='border border-gray-200 p-6 rounded-lg bg-white shadow-one dark:bg-primary'>
              <div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4'>
                <Image
                  src='/favicons/bank.png'
                  alt='pajama'
                  height={70}
                  width={70}
                />
              </div>
              <h2 className='text-xl text-gray-900 font-bold title-font mb-2'>
                More Bang for Your Buck
              </h2>
              <p className='leading-relaxed text-base'>
                Our virtual services are priced affordably, providing you with
                top-notch expertise without breaking the bank. So, you can go
                for the international trip.
              </p>
            </div>
          </div>
          <div className='xl:w-1/3 md:w-1/2 p-4'>
            <div className='border border-gray-200 p-6 rounded-lg bg-white shadow-one dark:bg-primary'>
              <div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4'>
                <Image
                  src='/favicons/number.png'
                  alt='pajama'
                  height={70}
                  width={70}
                />
              </div>
              <h2 className='text-xl text-gray-900 font-bold title-font mb-2'>
                You're Not Just a Number to Us
              </h2>
              <p className='leading-relaxed text-base'>
                We take the time to understand your unique requirements and
                objectives, ensuring personalized attention at every stage.
              </p>
            </div>
          </div>
          <div className='xl:w-1/3 md:w-1/2 p-4'>
            <div className='border border-gray-200 p-6 rounded-lg bg-white shadow-one dark:bg-primary'>
              <div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4'>
                <Image
                  src='/favicons/box.png'
                  alt='pajama'
                  height={70}
                  width={70}
                />
              </div>
              <h2 className='text-xl text-gray-900 font-bold title-font mb-2'>
                Thinking Outside the Box
              </h2>
              <p className='leading-relaxed text-base'>
                Because Innovation in our DNA: We constantly explore novel and
                innovative ways to help our clients achieve success. Expect
                fresh ideas from us.
              </p>
            </div>
          </div>
          <div className='xl:w-1/3 md:w-1/2 p-4'>
            <div className='border border-gray-200 p-6 rounded-lg bg-white shadow-one dark:bg-primary'>
              <div className='w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4'>
                <Image
                  src='/favicons/hidden.png'
                  alt='pajama'
                  height={70}
                  width={70}
                />
              </div>
              <h2 className='text-xl text-gray-900 font-bold title-font mb-2'>
                No Hidden Agendas
              </h2>
              <p className='leading-relaxed text-base'>
                We believe in open and honest communication with our clients,
                its our assurance that you will stay in the loop with every
                project.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute left-0 bottom-0 z-[-1]'>
        <svg
          width='239'
          height='601'
          viewBox='0 0 239 601'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <rect
            opacity='0.3'
            x='-184.451'
            y='600.973'
            width='196'
            height='541.607'
            rx='2'
            transform='rotate(-128.7 -184.451 600.973)'
            fill='url(#paint0_linear_93:235)'
          />
          <rect
            opacity='0.3'
            x='-188.201'
            y='385.272'
            width='59.7544'
            height='541.607'
            rx='2'
            transform='rotate(-128.7 -188.201 385.272)'
            fill='url(#paint1_linear_93:235)'
          />
          <defs>
            <linearGradient
              id='paint0_linear_93:235'
              x1='-90.1184'
              y1='420.414'
              x2='-90.1184'
              y2='1131.65'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#4A6CF7' />
              <stop offset='1' stopColor='#4A6CF7' stopOpacity='0' />
            </linearGradient>
            <linearGradient
              id='paint1_linear_93:235'
              x1='-159.441'
              y1='204.714'
              x2='-159.441'
              y2='915.952'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#4A6CF7' />
              <stop offset='1' stopColor='#4A6CF7' stopOpacity='0' />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default NewWhyUs;
