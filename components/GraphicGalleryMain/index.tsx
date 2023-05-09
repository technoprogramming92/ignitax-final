"use client";

import { useState } from "react";

import PhotoAlbum from "react-photo-album";
import graphics from "./graphics";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const GraphicGalleryMain = () => {
    const [index, setIndex] = useState(-1);
  return (
    <section id="blog" className="bg-primary/5 py-16 md:py-20 lg:py-15">
        <div className="container">
        
          <PhotoAlbum photos={graphics} layout="rows" targetRowHeight={150} onClick={({ index }) => setIndex(index)} />

            <Lightbox
                slides={graphics}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
            // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
        </div>
    </section>
  )
}

export default GraphicGalleryMain