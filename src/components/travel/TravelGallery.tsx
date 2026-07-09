import type { TravelGalleryImage } from "../../data/travelImages";
import { TravelImage } from "./TravelImage";

type TravelGalleryProps = {
  images: TravelGalleryImage[];
  projectName: string;
};

export function TravelGallery({ images, projectName }: TravelGalleryProps) {
  if (images.length === 0) return null;

  return (
    <div className="travel-gallery-grid travel-gallery-grid--balanced">
      {images.map((image, index) => (
        <figure key={`${image.src}-${index}`} className="travel-gallery-item group">
          <div className="travel-gallery-media">
            <TravelImage
              src={image.src}
              alt={image.alt ?? `Ảnh ${projectName}`}
              objectPosition={image.position ?? "center"}
              className="travel-gallery-image"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
          {image.alt ? <figcaption className="travel-gallery-caption">{image.alt}</figcaption> : null}
        </figure>
      ))}
    </div>
  );
}
