'use client';
import React, { FC, useState, useMemo } from 'react';
import Image from 'next/image';
import LightGallery from 'lightgallery/react';
import { LightGallerySettings } from 'lightgallery/lg-settings';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgAutoplay from 'lightgallery/plugins/autoplay';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgShare from 'lightgallery/plugins/share';
import lgRotate from 'lightgallery/plugins/rotate';
import Masonry from 'react-masonry-css';

// CSS
import '@/styles/portfolio/photo-gallery.css';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-autoplay.css';
import 'lightgallery/css/lg-fullscreen.css';
import 'lightgallery/css/lg-share.css';
import 'lightgallery/css/lg-rotate.css';

// Icon
import { MdArrowRightAlt } from 'react-icons/md';

// Image Data
import imageData from '@/public/images/imageData';

interface Image {
  src: string;
  alt: string;
  width: number;
  height: number;
  category: string;
}

const getFilteredImages = (filter: string, categories: string[]): Image[] => {
  if (filter === 'all') return imageData;
  if (filter === 'featured') {
    return categories
      .map((category) =>
        imageData.filter((img) => img.category === category).slice(0, 3)
      )
      .flat();
  }
  return imageData.filter((img) => img.category === filter);
};

const gallerySettings: Partial<LightGallerySettings> = {
  speed: 500,
  plugins: [lgThumbnail, lgZoom, lgAutoplay, lgFullscreen, lgShare, lgRotate],
  autoplay: true,
  slideShowAutoplay: true,
  slideShowInterval: 5000,
  share: true,
  facebook: true,
  twitter: true,
  pinterest: true,
  selector: '.photo-gallery-img',
};

const Skeleton: FC<{ width: number; height: number }> = ({ width, height }) => (
  <div
    className="img-loading-skeleton"
    style={{
      width: '100%',
      paddingBottom: `${(height / width) * 100}%`,
    }}
  />
);

const PhotoGallery: FC = () => {
  const categories = useMemo(
    () => Array.from(new Set(imageData.map((img) => img.category))),
    []
  );
  const [filteredImages, setFilteredImages] = useState(() =>
    getFilteredImages('featured', categories)
  );
  const [activeFilter, setActiveFilter] = useState('featured');
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());

  const handleFilter = (filter: string) => {
    setFilteredImages(getFilteredImages(filter, categories));
    setActiveFilter(filter);
    setLoadedImages(new Set());
  };

  const handleImageLoad = (src: string) => {
    setLoadedImages((prev) => new Set(prev).add(src));
  };

  if (!imageData.length) {
    return (
      <p className="images-not-loaded">
        No images are available at the moment! Please check back later
      </p>
    );
  }

  return (
    <section className="photo-gallery">
      <div className="photo-gallery-container">
        <h3 className="photo-gallery-heading">Photo Gallery</h3>

        <div className="photo-gallery-filter-bar">
          <div className="photo-gallery-filters">
            <button
              className={`filter-btn ${
                activeFilter === 'featured' ? 'active' : ''
              }`}
              onClick={() => handleFilter('featured')}
              aria-label="Filter by featured images"
              role="button"
            >
              Featured
            </button>
            {categories.map((category) => (
              <button
                key={category}
                className={`filter-btn ${
                  activeFilter === category ? 'active' : ''
                }`}
                onClick={() => handleFilter(category)}
                aria-label={`Filter by ${category} images`}
                role="button"
              >
                {category.charAt(0).toUpperCase() +
                  category.slice(1).replace(/-/g, ' ')}
              </button>
            ))}
            <button
              className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => handleFilter('all')}
            >
              All
            </button>
          </div>
          <div className="scroll-right">
            <MdArrowRightAlt className="scroll-right-icon" />
          </div>
        </div>

        <div className="photo-gallery-content">
          <LightGallery {...gallerySettings}>
            <Masonry
              breakpointCols={{
                default: 4,
                1024: 3,
                768: 2,
                480: 1,
              }}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column"
            >
              {filteredImages.map((image) => {
                const isLoaded = loadedImages.has(image.src);
                return (
                  <a
                    key={image.src}
                    href={`/images/portfolio-img/${image.src}`}
                    className="photo-gallery-img"
                  >
                    {!isLoaded && (
                      <Skeleton width={image.width} height={image.height} />
                    )}
                    <Image
                      alt={image.alt}
                      src={`/images/portfolio-img/${image.src}`}
                      width={image.width}
                      height={image.height}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 25vw"
                      layout="responsive"
                      onLoadingComplete={() => handleImageLoad(image.src)}
                      onError={() =>
                        console.error(`Failed to load ${image.src}`)
                      }
                      className={`photo-gallery-img-thumbnail ${
                        isLoaded ? 'loaded' : 'loading'
                      }`}
                    />
                  </a>
                );
              })}
            </Masonry>
          </LightGallery>
        </div>
      </div>
    </section>
  );
};

export default PhotoGallery;
