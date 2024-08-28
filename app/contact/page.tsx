"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import NewsLatterBox from "@/components/NewsLatterBox";
import Script from "next/script";
import React, { FormEvent, useState } from "react";

const Contact = () => {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const formEle = document.querySelector("form")!;
    console.log("Submitted");
    const formData = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbyv1TixDIEneuh94p06LzcViGS5uEcVUMGnQ5YRW89NOy0dKQgRz8B8imHAbZwCiZfneA/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-1PDC560M10`}
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-1PDC560M10');`}
      </Script>
      <Breadcrumb pageName='Contact Us' />
      <section id='contact' className='overflow-hidden py-16 md:py-20 lg:py-28'>
        <div className='container'>
          <div className='mx-4 flex flex-wrap'>
            <div className='w-full px-4 lg:w-7/12 xl:w-8/12'>
              <div
                className='wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]'
                data-wow-delay='.15s'
              >
                <h2 className='mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl'>
                  Get In Touch With IgniTax.
                </h2>
                <p className='mb-12 text-base font-medium text-body-color'>
                  Our Expert Team Will Get Back To You ASAP Via Email For
                  Further Assistance.
                </p>

                <form className='form' onSubmit={(e) => handleSubmit(e)}>
                  <div className='-mx-4 flex flex-wrap'>
                    <div className='w-full px-4 md:w-1/2'>
                      <div className='mb-8'>
                        <label
                          htmlFor='Name'
                          className='mb-3 block text-sm font-medium text-dark dark:text-white'
                        >
                          Your Name
                        </label>
                        <input
                          id='Name'
                          name='Name'
                          type='text'
                          placeholder='Enter your name'
                          className='w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp'
                        />
                      </div>
                    </div>
                    <div className='w-full px-4 md:w-1/2'>
                      <div className='mb-8'>
                        <label
                          htmlFor='Email'
                          className='mb-3 block text-sm font-medium text-dark dark:text-white'
                        >
                          Your Email
                        </label>
                        <input
                          id='Email'
                          name='Email'
                          type='email'
                          placeholder='Enter your email'
                          className='w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp'
                        />
                      </div>
                    </div>
                    <div className='w-full px-4'>
                      <div className='mb-8'>
                        <label
                          htmlFor='Phone'
                          className='mb-3 block text-sm font-medium text-dark dark:text-white'
                        >
                          Phone Number
                        </label>
                        <input
                          id='Phone'
                          name='Phone'
                          type='tel'
                          placeholder='Enter your phone'
                          className='w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp'
                        />
                      </div>
                    </div>
                    <div className='w-full px-4'>
                      <div className='mb-8'>
                        <label
                          htmlFor='Message'
                          className='mb-3 block text-sm font-medium text-dark dark:text-white'
                        >
                          Your Message
                        </label>
                        <textarea
                          id='Message'
                          name='Message'
                          rows={5}
                          placeholder='Enter Your Message Regarding To Your Requirement'
                          className='w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp'
                        ></textarea>
                      </div>
                    </div>
                    <div className='w-full px-4'>
                      <button
                        type='submit'
                        className='rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp'
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className='w-full px-4 lg:w-5/12 xl:w-4/12'>
              <NewsLatterBox />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
