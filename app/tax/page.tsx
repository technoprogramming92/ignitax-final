import Breadcrumb from "@/components/Common/Breadcrumb"
import FourParaTitle from "@/components/Common/FourParaTitle";
import TwoParaTitle from "@/components/Common/TwoParaTitle"
import Image from "next/image";
import Link from "next/link";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'IGNITAX - Tax and Bookkeeping Virtual Services',
  description: 'Get Professional Tax Planning, Tax Preparation, And Bookkeeping Services For Individuals And Businesses. Our Experts Ensure Accuracy, Compliance, And Financial Peace Of Mind. Contact Us Today!',
  keywords: 'Tax Planning Services,tax Preparation Services, Bookkeeping Services, Virtual Tax Consulting, Small Business Tax Planning, Individual Tax Planning, Corporate Tax Planning, Tax Saving Strategies, Income Tax Preparation, Financial Statement Preparation, Payroll Services, Tax Compliance Services, Tax Advisory Services, Tax Optimization, Tax Deductions And Credits, Irs Tax Help, Tax Audit Assistance, Virtual Bookkeeping Services, Virtual Bookkeeper',
  authors: [{name: 'Ignitax'}],
  openGraph: {
    title: 'IGNITAX - Tax and Bookkeeping Virtual Services',
    description: 'Get Professional Tax Planning, Tax Preparation, And Bookkeeping Services For Individuals And Businesses. Our Experts Ensure Accuracy, Compliance, And Financial Peace Of Mind. Contact Us Today!',
    url: 'https://www.ignitax.com'
  },

  twitter:{
    title: 'IGNITAX - Tax and Bookkeeping Virtual Services ',
    description: 'Get Professional Tax Planning, Tax Preparation, And Bookkeeping Services For Individuals And Businesses. Our Experts Ensure Accuracy, Compliance, And Financial Peace Of Mind. Contact Us Today!',
  },

  robots: 'index, follow',
  icons: '/favicons/favicon.ico',
  
  formatDetection: {
    telephone: false
  },
  themeColor: '1F385D',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default'
  }
};

const checkIcon = (
    <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
      <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
    </svg>
  );

const Tax = () => {
    const List = ({ text }: any) => (
        <p className="mb-5 flex items-center text-lg font-medium text-body-color">
          <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
            {checkIcon}
          </span>
          {text}
        </p>
      );
  return (
    <div>
        <Breadcrumb pageName="Bookkeeping And Tax" />
        <section id="about" className="pt-16 md:pt-10 lg:pt-14">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-15 lg:pb-20">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <TwoParaTitle
                  title="Bookkeeping"
                  paragraph="At Ignitax, we know that bookkeeping can be a tedious and time-consuming task. That's why we offer comprehensive bookkeeping services to small businesses and individuals, delivered virtually by a dedicated person or team of professionals to help you stay organised and in control of your finances."
                  paragraph2="Our virtual staff of bookkeeping has the expertise and knowledge to manage your financial records with precision and accuracy. We use reliable technology and systems to ensure that your records are up-to-date, organised, and easily accessible from anywhere."
                  mb="44px"
                />

                <div
                  className="wow fadeInUp mb-10 max-w-[570px] lg:mb-0"
                  data-wow-delay=".15s"
                >
                  <div className="mx-[-12px] flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="Accounts Payable and Receivable" />
                      <List text="Bank Reconciliations" />
                      <List text="UsPayroll Processing" />
                    </div>

                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="Sales Tax Compliance" />
                      <List text="Financial Statements Preparation" />
                      <List text="Day to Day Bookkeeping" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div
                  className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                  data-wow-delay=".2s"
                >
                  <Image
                    src="/images/all services/Book-Keeping.svg"
                    alt="about-image"
                    fill
                    className="mx-auto max-w-full lg:mr-0"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center content-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mt-8">
              <Link
                href="/contact"
                className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="pt-11 md:pt-10 lg:pt-12">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-15 lg:pb-20">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <FourParaTitle
                  title="Taxation"
                  paragraph="At Ignitax , we're proud to have a team of highly experienced tax professionals who are dedicated to providing our clients with exceptional service. Our team works closely with CPAs and EAs to ensure that all of our clients' tax needs are met."
                  paragraph2="We have extensive experience working with a wide range of tax forms, including the 1040, 1120, 1120S, 1065 and manymore. Our team stays up-to-date with the latest tax regulations and requirements, so that we can provide our clients with the most accurate and efficient service possible."
                  mb="44px"
                  paragraph3="In addition to our domestic tax services, we're also well-versed in foreign compliances, such as the FBAR, 5471, 5472, GILTI, FDII, and more. We understand the complexities of international tax laws and regulations, and we work tirelessly to ensure that our clients remain compliant and avoid any potential penalties or fines.Our team is also well-versed in the R&D tax credit (Form 6765) and the Employee Retention Tax Credit (ERTC). We work closely with our clients to identify any eligible credits and deductions, and we help them navigate the application process to ensure that they receive the maximum benefits."
                  paragraph4="Our goal is to provide our clients with the best possible tax services, and to make the process as simple and hassle-free as possible. Contact us today to learn more about how Ignitax can help you with your tax needs!"
                />

                <div
                  className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                  data-wow-delay=".15s"
                >
                  <div className="mx-[-12px] flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="Tax Preparation " />
                      <List text="Tax Planning and Consultation" />
                      <List text="Foreign Compliances" />
                      <List text="R&D Tax Credit (Form 6765)" />
                    </div>

                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="Employee Retention Tax Credit" />
                      <List text="Filing Extensions" />
                      <List text="Deadline Management" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div
                  className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                  data-wow-delay=".2s"
                >
                  <Image
                    src="/images/all services/tax.svg"
                    alt="about-image"
                    fill
                    className="mx-auto max-w-full lg:mr-0"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center content-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 mt-10">
              <Link
                href="/Contact/page"
                className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
              >
                Book a Call
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Tax