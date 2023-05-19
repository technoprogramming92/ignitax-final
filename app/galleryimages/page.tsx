import Breadcrumb from "@/components/Common/Breadcrumb"
import GraphicGalleryMain from "@/components/GraphicGalleryMain"
import Script from "next/script";

const page = () => {
  return (
    <div>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-1PDC560M10`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-1PDC560M10');`}
      </Script>
        <Breadcrumb
        pageName="Gallery"
      />
      <section id="graphicgallery">
        <GraphicGalleryMain />
      </section>
    </div>
  )
}

export default page