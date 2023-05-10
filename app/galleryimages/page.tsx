import Breadcrumb from "@/components/Common/Breadcrumb"
import GraphicGalleryMain from "@/components/GraphicGalleryMain"


const page = () => {
  return (
    <div>
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