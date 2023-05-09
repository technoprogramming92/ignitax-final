import Breadcrumb from "@/components/Common/Breadcrumb"
import PhotoGalleryMain from "@/components/PhotoGalleryMain"

import React from 'react'

const PhotoImages = () => {
  return (
    <div>
        <Breadcrumb
        pageName="Gallery"
      />
      <section id="graphicgallery">
        <PhotoGalleryMain />
      </section>
    </div>
  )
}

export default PhotoImages