import ClientInfoFeatures from "@/components/ClientInfoFeatures";
import Breadcrumb from "@/components/Common/Breadcrumb";
import TwoParaTitle from "@/components/Common/TwoParaTitle";
import ClientLogos from "@/components/Common/ClientLogos";

const ClientInfo = () => {
  return (
    <div>
      <Breadcrumb pageName='' />

      <ClientInfoFeatures />
      <section id='clients' className='pt-8 md:pt-9 lg:pt-11'>
        <div className='container'>
          <ClientLogos /> {/* Add the logo carousel here */}
        </div>
      </section>

      <section id='developers' className='pt-8 md:pt-9 lg:pt-11'>
        <div className='container'>
          <div className='border-b border-body-color/[.15] pb-10 dark:border-white/[.15] md:pb-16 lg:pb-18'>
            <div className='-mx-4 flex flex-wrap items-center'>
              <div className='w-full px-6 lg:w-1/2'>
                <TwoParaTitle
                  title='Address'
                  paragraph='A/427 Siddhivinayak Arcade, Beside Cancer Society,'
                  paragraph2='Near Guptanagr, Vasna, Ahmedabad, Gujarat 380051'
                  mb='44px'
                />

                <div
                  className='wow fadeInUp mb-12 max-w-[570px] lg:mb-0'
                  data-wow-delay='.15s'
                >
                  <div className='mx-[-12px] flex flex-wrap'></div>
                </div>
              </div>

              <div className='w-full px-4 lg:w-1/2'>
                <div
                  className='wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0'
                  data-wow-delay='.2s'
                >
                  <iframe
                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.727746154357!2d72.5377565753569!3d22.99703687919168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e853c387b2353%3A0xd47d05de86d46b51!2sSiddhi%20Vinayak%20Arcade!5e0!3m2!1sen!2sin!4v1724327568923!5m2!1sen!2sin'
                    width='500'
                    height='350'
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default ClientInfo;
